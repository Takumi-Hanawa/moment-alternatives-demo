import { NextPage } from "next";

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
