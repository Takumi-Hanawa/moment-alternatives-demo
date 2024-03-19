import { NextPage } from "next";

import "@formatjs/intl-datetimeformat/polyfill";
import "@formatjs/intl-datetimeformat/locale-data/en"; // locale-data for en
import "@formatjs/intl-datetimeformat/add-all-tz";

import { zonedTimeToUtc } from "date-fns-tz";

const DateFns: NextPage = () => {
  try {
    const utcDate = zonedTimeToUtc(new Date(), "Asia/Tokyo");
    console.log("zonedTimeToUtc: ", utcDate);
  } catch (error) {
    console.error("zonedTimeToUtc: ", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
    </div>
  );
};

export default DateFns;
