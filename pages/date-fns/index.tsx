import { NextPage } from "next";

import { utcToZonedTime } from "date-fns-tz";

const DateFns: NextPage = () => {
  try {
    utcToZonedTime(new Date(), "Asia/Tokyo");
  } catch (error) {
    console.log("error", error);
  }

  return (
    <div>
      <h1>date-fns Demo</h1>
    </div>
  );
};

export default DateFns;
