import { NextPage } from "next";

import { format, utcToZonedTime } from "date-fns-tz";
import { parseISO } from "date-fns";

const DateFns: NextPage = () => {
  let formattedDateFromISOStr;
  try {
    formattedDateFromISOStr = format(
      new Date("2024-01-01T00:00:00"),
      "yyyy-MM-dd HH:mm:ss"
    );
  } catch (error) {
    console.error("formattedDateFromISOStr : ", error);
  }

  let formattedDateFromParsedISOStr;
  try {
    formattedDateFromParsedISOStr = format(
      parseISO("2024-01-01T00:00:00"),
      "yyyy-MM-dd HH:mm:ss"
    );
  } catch (error) {
    console.error("formattedDateFromParsedISOStr : ", error);
  }

  let formattedDateFromYYYYMMDDStr;
  try {
    formattedDateFromYYYYMMDDStr = format(
      new Date("2024-01-01"),
      "yyyy-MM-dd HH:mm:ss"
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
  } catch (error) {
    console.error("formattedDateFromParsedYYYYMMDDStr : ", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>From ISO String : {formattedDateFromISOStr}</p>
      <p>From Parsed ISO String : {formattedDateFromParsedISOStr}</p>
      <p>From YYYY-MM-DD String : {formattedDateFromYYYYMMDDStr}</p>
      <p>
        From Parsed YYYY-MM-DD String : {formattedDateFromParsedYYYYMMDDStr}
      </p>
    </div>
  );
};

export default DateFns;
