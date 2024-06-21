import {useEffect, useState} from "react";
import Button from "./Button";
import Input from "./Input";
import useItem from "@/hooks/useItem";
import {useRouter} from "next/router";
import Select from "./Select";

interface FormProps {
  id?: string;
}

export default function Form(props: FormProps) {
  const router = useRouter();
  const {saveItem, getById, getAll} = useItem();
  const id = props.id ?? "";
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [color, setColor] = useState("");

  function handleChange(event: any) {
    setColor(event.target.value);
  }

  useEffect(() => {
    (async () => {
      if (props.id) {
        const item = await getById(props.id);
        setUrl(item.url);
        setShortUrl(item.shortUrl);
        setColor(item.color);
      }
    })();
  }, []);

  const handleSave = async () => {
    if (url.length < 6 || shortUrl.length < 3) {
      alert("Preencha os campos corretamente");
      return;
    }
    await saveItem(url, shortUrl, color, id);
    router.push("/Dashboard");
    getAll();
  };

  return (
    <div className="w-[95vw] max-w-[500px] m-auto space-y-6">
      {id ? (
        <Input label="id" readOnly text="Id" value={id} className="mb-5" />
      ) : (
        false
      )}
      <Input
        label="url"
        text="URL"
        minlength={6}
        value={url}
        valueChange={setUrl}
      />
      <Input
        label="shortUrl"
        text="ShortUrl"
        minlength={3}
        value={shortUrl}
        valueChange={setShortUrl}
      />

      <Select onChange={(event: any) => handleChange(event)} />

      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2" widthFull onClick={handleSave}>
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button
          color="red"
          widthFull
          onClick={() => {
            router.push("/Dashboard");
          }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}
