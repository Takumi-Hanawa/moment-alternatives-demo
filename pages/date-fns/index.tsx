import { NextPage } from "next";

import { format, utcToZonedTime } from "date-fns-tz";
import { parseISO } from "date-fns";

const DateFns: NextPage = () => {
  let dateObjFromStr;
  try {
    dateObjFromStr = utcToZonedTime("2024-01-01T00:00:00", "Asia/Tokyo");
  } catch (error) {
    console.log("dateObjFromStr : ", error);
  }

  let formattedDate;
  try {
    formattedDate = format(dateObjFromStr || new Date(), "yyyy-MM-dd HH:mm:ss");
  } catch (error) {
    console.log("formattedDate : ", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateFns;
