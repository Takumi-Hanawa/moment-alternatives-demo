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
    console.error("formattedDateFromISOStr : ", error);
  }

  let formattedDateFromParsedISOStr;
  try {
    formattedDateFromParsedISOStr = format(
      utcToZonedTime(parseISO("2024-01-01T00:00:00"), "Asia/Tokyo"),
      "yyyy-MM-dd HH:mm:ss"
    );

    console.log(
      "dateFromParsedISOStr : ",
      utcToZonedTime(parseISO("2024-01-01T00:00:00"), "Asia/Tokyo")
    );
  } catch (error) {
    console.error("formattedDateFromParsedISOStr : ", error);
  }

  let formattedDateFromYYYYMMDDStr;
  try {
    formattedDateFromYYYYMMDDStr = format(
      utcToZonedTime("2024-01-01", "Asia/Tokyo"),
      "yyyy-MM-dd HH:mm:ss"
    );

    console.log(
      "dateFromYYYYMMDDStr : ",
      utcToZonedTime("2024-01-01", "Asia/Tokyo")
    );
  } catch (error) {
    console.error("formattedDateFromYYYYMMDDStr : ", error);
  }

  let formattedDateFromParsedYYYYMMDDStr;
  try {
    formattedDateFromParsedYYYYMMDDStr = format(
      parseISO("2024-01-01"),
      "yyyy-MM-dd HH:mm:ss"
    );

    console.log("dateFromParsedYYYYMMDDStr : ", parseISO("2024-01-01"));
  } catch (error) {
    console.error("formattedDateFromParsedYYYYMMDDStr : ", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>From ISO String : {formattedDateFromISOStr}</p>
      <p>From Parsed ISO String : {formattedDateFromParsedISOStr}</p>
      <p>
        From Parsed YYYY-MM-DD String : {formattedDateFromParsedYYYYMMDDStr}
      </p>
    </div>
  );
};

export default DateFns;
