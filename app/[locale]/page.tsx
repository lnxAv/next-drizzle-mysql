"use client";

import useSWR, { Fetcher } from "swr";
import { useI18n, useScopedI18n } from "../locales/client";
import { ExempleGetResponse } from "../api/exemple/route";

export default function Page() {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");
  const fetcher: Fetcher<ExempleGetResponse, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/exemple`, fetcher);

  return (
    <div>
      <p>{t("hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>

      <p>
        {JSON.stringify(data?.lang)}
        {JSON.stringify(error)}
      </p>
    </div>
  );
}
