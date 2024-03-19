import { NextPage } from "next";

import { utcToZonedTime } from "date-fns-tz";

const DateFns: NextPage = () => {
  try {
    const jstDate = utcToZonedTime(new Date(), "Asia/Tokyo");
    console.log("utcToZonedTime: ", jstDate);
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
