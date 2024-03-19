import { NextPage } from "next";

import { format, utcToZonedTime } from "date-fns-tz";
import { parseISO } from "date-fns";

const DateFns: NextPage = () => {
  let formattedDateFromISOStr;
  try {
    formattedDateFromISOStr = format(
      utcToZonedTime("2024-01-01T00:00:00", "Asia/Tokyo"),
      "yyyy-MM-dd HH:mm:ss"
    );
  } catch (error) {
    console.log("formattedDate : ", error);
  }

  let formattedDateFromParsedISOStr;
  try {
    formattedDateFromParsedISOStr = format(
      parseISO("2024-01-01T00:00:00"),
      "yyyy-MM-dd HH:mm:ss"
    );

    console.log(parseISO("2024-01-01T00:00:00"));
  } catch (error) {
    console.log("formattedDate : ", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>{formattedDateFromISOStr}</p>
    </div>
  );
};

export default DateFns;
