import { NextPage } from "next";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";

const DateFns: NextPage = () => {
  try {
    const jstTime = format(
      utcToZonedTime(new Date(), "Asia/Tokyo"),
      "yyyy年M月d日 HH:mm:ss"
    );
    console.log("utcToZonedTime: ", jstTime);
  } catch (error) {
    console.error("utcToZonedTime: ", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
    </div>
  );
};

export default DateFns;
