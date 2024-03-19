import { NextPage } from "next";

import { format, utcToZonedTime } from "date-fns-tz";

const DateFns: NextPage = () => {
  let dateObjFromStr;
  try {
    dateObjFromStr = utcToZonedTime("2024-01-01", "Asia/Tokyo");
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
