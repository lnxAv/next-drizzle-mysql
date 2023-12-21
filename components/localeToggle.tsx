"use client";

import { useChangeLocale } from "@/app/locales/client";

export default function LocalToggle() {
  const locale = useChangeLocale();
  return (
    <div>
      <div className="text-right text-sm">
        <button
          className="uppercase"
          type="button"
          onClick={() => locale("en")}
        >
          en
        </button>
        <span> | </span>
        <button
          className="uppercase"
          type="button"
          onClick={() => locale("fr")}
        >
          fr
        </button>
      </div>
    </div>
  );
}
