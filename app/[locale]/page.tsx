"use client";

import React from "react";
import useSWR, { Fetcher } from "swr";
import Clock from "@/components/clock";
import LocalToggle from "@/components/localeToggle";
import ThemeToggle from "@/components/themeToggle";
import { useTheme } from "next-themes";
import { Blob, Next, Vercel } from "@/components/svg";
import { useI18n } from "../locales/client";
import { ExempleGetResponse } from "../api/exemple/route";

const usefulLinks = [
  {
    name: "Next",
    url: "https://nextjs.org/",
    element: (
      <Next className="inline-block w-11 mt-5 my-3 leading-0 mx-0 px-0 h-auto rotate-90 pb-0.5 border-b-black dark:border-b-light border-b fill-dark dark:fill-light" />
    ),
  },
  {
    name: "Vercel",
    url: "https://vercel.com/templates",
    element: (
      <Vercel className="inline-block w-11 my-3 h-auto rotate-90 pb-0.5 border-b-black dark:border-b-light border-b fill-dark dark:fill-light" />
    ),
  },
  {
    name: "Drizzle",
    url: "https://orm.drizzle.team/",
  },
];

export default function Page() {
  const t = useI18n();
  const { theme } = useTheme();
  const fetcher: Fetcher<ExempleGetResponse, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(`/api/exemple`, fetcher);

  const displayPangram = () => (
    <>
      <p className="font-bold opacity-100">{t("pangram")}</p>
      <p className="opacity-80">{t("pangram")}</p>
      <p className="opacity-60">{t("pangram")}</p>
      <p className="opacity-40">{t("pangram")}</p>
      <p className="opacity-20">{t("pangram")}</p>
      <p className="opacity-10">{t("pangram")}</p>
    </>
  );

  const displayData = () => {
    let componentArray: JSX.Element[] = [];
    if (data && data.payload?.[0]) {
      componentArray = Object.keys(data.payload[0]).map((key) => (
        <p key={key}>{`${key}: ${data.payload?.[0]?.[
          key as keyof (typeof data.payload)[0]
        ]}`}</p>
      ));
    }
    return componentArray;
  };

  return (
    <>
      {/* bg & blob */}
      <div className="absolute w-screen h-screen ">
        <div className="transition-all absolute w-full h-full bg-light dark:bg-dark overflow-hidden rounded-sm" />
        <div className="relative w-full h-full overflow-hidden z-0">
          <Blob
            theme={theme}
            className="absolute animate-float w-3/4 h-3/4 bottom-0 right-0 scale-90 origin-center mix-blend-darken opacity-95"
          />
          <Blob
            theme={theme}
            className="absolute w-3/4 h-3/4 bottom-0 right-0 origin-center scale-120 blur-sm "
          />
        </div>
      </div>
      {/* content */}
      <div className="relative flex flex-row w-screen h-screen overflow-hidden py-5 px-2 gap-2 text-dark dark:text-light ">
        <div className="flex flex-col items-center w-auto max-w-5 pt-1 pb-2">
          <div className="flex-1 [writing-mode:vertical-lr] boder-red-900">
            <div className="flex flex-row items-center whitespace-nowrap">
              <p className="text-sm">{t("poweredBy")} </p>
              {usefulLinks.map((link, i) => (
                <React.Fragment key={link.name}>
                  <a
                    aria-label={link.name}
                    className="inline-block relative my-1 font-bold text-sm underline"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.element ? link.element : link.name}
                  </a>
                  <p className="font-regular">
                    {i < usefulLinks.length - 1 ? "," : "."}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="justify-self-end [writing-mode:vertical-lr] ">
            <a
              className="font-bold text-sm"
              href="https://github.com/lnxAv/next-drizzle-mysql"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="relative flex flex-col flex-1 ">
          <div className="flex flex-row items-start">
            <div className="px-2 md:px-5 sm:px-5 font-bold">
              <LocalToggle />
            </div>
            <div className="flex flex-1 justify-end  gap-5 px-2 md:px-5 sm:px-5 ">
              <div>
                <Clock />
              </div>
              <div className="relative fill-dark dark:fill-light top-0 w-9 ">
                <ThemeToggle />
              </div>
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
                    <span>
                      {!isLoading
                        ? `${t(`connection.${data?.server || "failed"}`)},`
                        : `${t("connection.loading")}`}
                    </span>
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
                className="ml-auto mt-auto text-xl max-md:text-lg max-sm:text-lg px-2 md:px-5 sm:px-5 py-2 lg:text-2xl xl:text-2xl max-sm:[writing-mode:vertical-rl] max-sm:rotate-180 ,"
                style={{ lineHeight: "10px" }}
              >
                {data && data.payload ? displayData() : displayPangram()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
