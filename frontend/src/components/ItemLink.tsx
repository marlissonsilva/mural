/* eslint-disable @next/next/no-img-element */
import {IconEdit, IconTrash} from "@tabler/icons-react";
import Link from "next/link";
import useItem from "@/hooks/useItem";
import Image from "next/image";
interface LinkProps {
  allowEdition: boolean;
}

export default function ItemLink(props: LinkProps) {
  const {items, deleteItem} = useItem();

  function renderData() {
    if (!items || items.length === 0) {
      return (
        <div className="flex justify-center w-full mt-8">
          <p className="text-white">Nenhum link cadastrado.</p>
        </div>
      );
    }
    return items.map((item) => {
      return (
        <div key={item._id} className="flex flex-col">
          <Link
            key={item._id}
            href={item.url}
            target="_blank"
            className={`flex gap-4 px-8 py-3 border text-${item.color} rounded-lg`}
          >
            <img src={item.icon} alt={item.shortUrl} className="w-6 h-6 rounded-xl"/>
            {item.shortUrl}
          </Link>
          <div
            className={`flex justify-around mt-4 text-white 
        ${props.allowEdition ? "flex" : "hidden"}`}
          >
            <button className="hover:bg-zinc-700 p-1 rounded-md">
              <IconTrash
                className="text-red-500"
                onClick={() => deleteItem(item._id)}
                size={25}
              />
            </button>
            <Link
              href={`/Edit/${item._id}`}
              className="hover:bg-zinc-700 p-1 rounded-md pointer-events-none"
            >
              <IconEdit className="text-blue-500" size={25} />
            </Link>
          </div>
        </div>
      );
    });
  }
  return renderData();
}
