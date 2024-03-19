import { NextPage } from "next";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";
import "@formatjs/intl-datetimeformat/polyfill";
import "@formatjs/intl-getcanonicallocales/polyfill";
import "@formatjs/intl-locale/polyfill";

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
