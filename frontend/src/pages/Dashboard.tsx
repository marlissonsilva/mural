import Layout from "@/components/Layout";
import {IconEdit, IconPlus} from "@tabler/icons-react";
import {useRouter} from "next/router";
import ItemLink from "@/components/ItemLink";
import useBoolean from "@/hooks/useBoolean";

interface LinksProps {}

export default function Links(props: LinksProps) {
  const [activeEdition, toggleActive] =
    useBoolean(false);
  const router = useRouter();

  function handleRedirectNew() {
    router.push("/New");
  }

  function handleToAllowEdition() {
    toggleActive();
  }

  return (
    <Layout
      title="Lista de links"
      iconPlus={
        <IconPlus className="border text-white  border-zinc-600 rounded-md" size={35} stroke={1} onClick={handleRedirectNew} />
      }
      iconEdit={
        <IconEdit
          className={`border  rounded-md  border-zinc-600 ${activeEdition ? "text-blue-600": "text-white"}`}
          size={35} stroke={1}
          onClick={handleToAllowEdition}
        />
      }
    >
      <section className="flex gap-6 flex-wrap ">
          <ItemLink allowEdition={activeEdition}/>
      </section>
    </Layout>
  );
}
