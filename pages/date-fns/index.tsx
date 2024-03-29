import "@formatjs/intl-getcanonicallocales/polyfill";
import "@formatjs/intl-locale/polyfill";

import "@formatjs/intl-datetimeformat/polyfill";
import "@formatjs/intl-datetimeformat/locale-data/ja";
import "@formatjs/intl-datetimeformat/add-all-tz";

import { NextPage } from "next";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";

const DateFns: NextPage = () => {
  const jstDateTime = utcToZonedTime("2024-01-01", "Asia/Tokyo");

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>{format(jstDateTime, "yyyy年M月d日 HH:mm:ss")}</p>
    </div>
  );
};

export default DateFns;
