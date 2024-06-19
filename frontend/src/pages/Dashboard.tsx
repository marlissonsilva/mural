import namer from "color-namer";
import Layout from "@/components/Layout";
import useItem from "@/hooks/useItem";
import Link from "next/link";
import {IconPlus} from "@tabler/icons-react";
import {useRouter} from "next/router";
import {useState} from "react";

interface LinksProps {}

export default function Links(props: LinksProps) {
  const {items} = useItem();
  console.log(items);
  const router = useRouter();

  function handleRedirectNew() {
    router.push("/New");
  }

  return (
    <Layout
      title="Lista de links"
      icon={
        <IconPlus className=" border" size={30} onClick={handleRedirectNew} />
      }
    >
      <div className="flex gap-5 flex-wrap">
        {items?.map((item, index) => (
          <Link
            key={item._id}
            href={item.url}
            target="_blank"
            className={`px-8 py-3 border text-zinc-100 rounded-lg
              bg-${item.color}-500`}
          >
            {item.shortUrl}
          </Link>
        ))}
      </div>
    </Layout>
  );
}
