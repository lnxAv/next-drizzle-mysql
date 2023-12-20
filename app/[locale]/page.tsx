"use client";

import useSWR, { Fetcher } from "swr";
import { useI18n } from "../locales/client";
import { ExempleGetResponse } from "../api/exemple/route";

const usefulLinks = [
  {
    name: "Next",
    url: "https://nextjs.org/",
  },
  {
    name: "Vercel",
    url: "https://vercel.com/templates",
  },
  {
    name: "Drizzle",
    url: "https://orm.drizzle.team/",
  },
];

export default function Page() {
  const t = useI18n();
  // const scopedT = useScopedI18n("hello");
  const fetcher: Fetcher<ExempleGetResponse, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR(`/api/exemple`, fetcher);

  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden py-5 px-2 gap-2 bg-light text-dark dark:bg-dark dark:text-light">
      <div className="flex flex-col items-center w-auto pt-1 pb-2">
        <div className="flex-1 [writing-mode:vertical-lr] ">
          <p className="whitespace-nowrap">
            <span>{t("poweredBy")} </span>
            {usefulLinks.map((link, i) => (
              <a
                className="my-1 font-bold"
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
                <span className="font-regular">
                  {i < usefulLinks.length - 1 ? "," : "."}
                </span>
              </a>
            ))}
          </p>
        </div>
        <div className="justify-self-end [writing-mode:vertical-lr] ">
          <a
            className="font-bold"
            href="https://github.com/lnxAv/next-drizzle-mysql"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-row ">
          <div className="px-2 md:px-5 sm:px-5 font-bold">EN | FR</div>
          <div className="flex flex-1 justify-end items-center gap-5 px-2 md:px-5 sm:px-5 ">
            <div> mtl,qc asdsadsadsaad</div>
            <div> X </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 w-full h-auto flex">
            <div className="grid max-w-10 px-2 md:px-5 sm:px-5 mt-auto">
              <div className="font-regular text-sm">
                app/api/exemple/route.ts
              </div>
              <div className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">
                <p>
                  <span>{!isLoading ? `${data?.server},` : "loading..."}</span>
                </p>
                <a
                  className="font-bold underline"
                  href="https://github.com/lnxAv/next-drizzle-mysql#database-setup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  README.MD
                </a>
              </div>
            </div>
            <div
              className="ml-auto mt-auto text-xl px-2 md:px-5 sm:px-5 lg:text-2xl xl:text-2xl max-sm:[writing-mode:vertical-rl] max-sm:rotate-180"
              style={{ lineHeight: "10px" }}
            >
              <p className="font-bold opacity-100">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="opacity-80">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="opacity-60">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="opacity-40">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="opacity-20">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="opacity-10">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
