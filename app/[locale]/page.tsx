"use client";

import useSWR, { Fetcher } from "swr";
import Clock from "@/components/clock";
import LocalToggle from "@/components/localeToggle";
import { Blob, DarkMode } from "@/components/svg";
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
  const fetcher: Fetcher<ExempleGetResponse, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR(`/api/exemple`, fetcher);

  return (
    <>
      {/* bg & blob */}
      <div className="absolute w-full h-full ">
        <div className="transition-all absolute top-5 dark:top-0 right-11 dark:right-0 w-5 h-5 bg-light dark:w-full dark:h-full dark:bg-dark overflow-hidden rounded-sm" />
        <div className="relative w-full h-full overflow-hidden z-0">
          <Blob className="absolute animate-float w-3/4 h-3/4 bottom-0 right-0 scale-90 origin-center mix-blend-darken opacity-95" />
          <Blob className="absolute w-3/4 h-3/4 bottom-0 right-0 origin-center scale-120 blur-sm " />
        </div>
      </div>
      {/* content */}
      <div className="relative flex flex-row w-screen h-screen overflow-hidden py-5 px-2 gap-2 text-dark dark:text-light ">
        <div className="flex flex-col items-center w-auto pt-1 pb-2">
          <div className="flex-1 [writing-mode:vertical-lr] ">
            <p className="whitespace-nowrap">
              <span className="text-sm">{t("poweredBy")} </span>
              {usefulLinks.map((link, i) => (
                <a
                  className="my-1 font-bold text-sm"
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
                <button
                  type="button"
                  aria-label="toggle-dark-mode"
                  onClick={() => {}}
                >
                  <DarkMode
                    primary="fill-dark dark:fill-light"
                    secondary="fill-light dark:fill-dark"
                    className="relative top-0 w-5 h-5 rounded-sm"
                  />
                </button>
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
                <p className="font-bold opacity-100">{t("pangram")}</p>
                <p className="opacity-80">{t("pangram")}</p>
                <p className="opacity-60">{t("pangram")}</p>
                <p className="opacity-40">{t("pangram")}</p>
                <p className="opacity-20">{t("pangram")}</p>
                <p className="opacity-10">{t("pangram")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
