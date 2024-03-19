import "@formatjs/intl-getcanonicallocales/polyfill";
import "@formatjs/intl-locale/polyfill";

import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/ja"; // locale-data for en

import "@formatjs/intl-numberformat/polyfill";
import "@formatjs/intl-numberformat/locale-data/ja"; // locale-data for en

import "@formatjs/intl-datetimeformat/polyfill";
import "@formatjs/intl-datetimeformat/add-all-tz";

import { NextPage } from "next";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";

const DateFns: NextPage = () => {
  const jstDateTime = utcToZonedTime(new Date(), "Asia/Tokyo");

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>{format(jstDateTime, "yyyy年M月d日 HH:mm:ss")}</p>
    </div>
  );
};

export default DateFns;
