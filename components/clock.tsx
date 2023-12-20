"use client";

import { useCurrentLocale } from "@/app/locales/client";
import { useEffect, useRef, useState } from "react";

// ? https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const timeZone = "America/Montreal";
const getLocaleTime = (locale: string) => {
  const date = new Date();
  const dateString = date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const timeString = date.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const localTime = {
    date: dateString.split("/"),
    time: timeString.split(":"),
  };

  return localTime;
};

export default function Clock() {
  const locale = useCurrentLocale();
  const ref = useRef<NodeJS.Timeout | null>(null);
  const [localTime, setLocalTime] = useState(getLocaleTime(locale));

  useEffect(() => {
    if (ref.current) clearInterval(ref.current);
    ref.current = setInterval(() => {
      setLocalTime(getLocaleTime(locale));
    }, 1000);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [locale]);

  return (
    <div className="text-right">
      <div className="leading-3 text-xs">
        <p>{timeZone}</p>
      </div>
      <div>
        <p>
          <time suppressHydrationWarning>
            {`${localTime.date[0]}/${localTime.date[1]}/${localTime.date[2]} `}
          </time>
          <time suppressHydrationWarning>{localTime.time[0]}</time>
          <span className="animate-pulse">:</span>
          <time suppressHydrationWarning>{localTime.time[1]}</time>
          <span className="animate-pulse">:</span>
          <time suppressHydrationWarning>{localTime.time[2]}</time>
        </p>
      </div>
    </div>
  );
}
