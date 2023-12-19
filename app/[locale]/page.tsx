"use client";

import useSWR, { Fetcher } from "swr";
import { CategoryArrayType } from "@/server/lib/category/getAll";
import { useI18n, useScopedI18n } from "../locales/client";

export default function Page() {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");
  const fetcher: Fetcher<CategoryArrayType, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/webs?section=2`, fetcher);

  return (
    <div>
      <p>{t("hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>

      <p>
        {JSON.stringify(data)}
        {JSON.stringify(error)}
      </p>
    </div>
  );
}
