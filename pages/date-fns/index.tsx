import { NextPage } from "next";

import { format, utcToZonedTime } from "date-fns-tz";

const DateFns: NextPage = () => {
  const jstDateTimeFromStr = utcToZonedTime("2024-01-01", "Asia/Tokyo");

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>{format(jstDateTimeFromStr, "yyyy-MM-dd HH:mm:ss")}</p>
    </div>
  );
};

export default DateFns;
