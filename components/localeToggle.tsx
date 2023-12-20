"use client";

import { useChangeLocale } from "@/app/locales/client";
import { LOCALES } from "@/app/locales/locales";

export default function LocalToggle() {
  const locale = useChangeLocale();
  return (
    <div className="text-right">
      <div>
        <button type="button" onClick={() => locale(LOCALES.EN)}>
          {LOCALES.EN}
        </button>
        <span> | </span>
        <button type="button" onClick={() => locale(LOCALES.FR)}>
          {LOCALES.FR}
        </button>
      </div>
    </div>
  );
}
