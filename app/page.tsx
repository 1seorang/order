// import useSWR from "swr";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
// import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Spacer } from "@nextui-org/react";
// import { Divider } from '@nextui-org/react';
import { GithubIcon } from "@/components/icons";
// import { Divider } from "@nextui-org/divider";
// import Jejak from "../components/Tanda";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-around h-full gap-4 py-2 md:py-10">
      {/* <Jejak /> */}
      <div className="inline-block w-full max-w-lg text-center justify-between">
        <h1 className={title()}>Follow Your&nbsp;</h1>
        <br />
        <h1 className={title({ color: "violet" })}>Common Sense&nbsp;</h1>
        {/* <Divider className="mt-5" /> */}
        <Spacer className="mt-5"></Spacer>
        <h2 className={subtitle({ class: "mt-5 text-xl" })}>
          Jangan menunggu sempurna untuk memulai sesuatu, tapi jalanilah
          walaupun itu burik
        </h2>
        <code className="italic text-default-600 text-base"> ~ John </code>
      </div>

      <div className="flex gap-3">
        <Link
          as={NextLink}
          href="/order"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "flat",
            class:
              "active:transition-all active:duration-700 active:ease-in-out relative overflow-visible hover:text-white/80  hover:translate-y-1 text-blue-100 text-base px-12 shadow-md  after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-blue-500/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 font-medium font-sans animate-[levitate_10s_ease_infinite]",
          })}
          data-hover={true}
          data-focus={true}
        >
          Kanjut!
        </Link>
      </div>

      <div className="mt-8 animate-[levitate_13s_ease_infinite]">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            App <Code color="primary">Versi 2.1</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
