import Head from "next/head";
import Sidebar from "./Sidebar";
import Title from "./Title";
import Footer from "./Footer";
import Button from "./Button";

interface LayoutProps {
  children: any;
  title: string;
  className?: string;
  iconPlus?: any;
  iconEdit?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Mural" />
        <meta name="keywords" content="" />
        <meta name="author" content="Marlisson Silva" />
        <title>Mural</title>
      </Head>
      <main className="bg-zinc-800 flex h-screen">
        <Sidebar className="h-screen" />
        <section className="flex flex-col w-full">
          <div className="h-20 flex justify-between text-center px-16 py-2 border-b border-zinc-500">
            <Title>{props.title}</Title>
            <div className=" flex justify-between gap-6 text-center ">
              <button>{props.iconPlus}</button>
              <button>{props.iconEdit}</button>
            </div>
          </div>
          <div
            className={`h-screen px-16 py-10 text-xl
            flex flex-col bg-zinc-900
            ${props.className ?? props.className}`}
          >
            {props.children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
