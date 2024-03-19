import { NextPage } from "next";
import { utcToZonedTime } from "date-fns-tz";
import {
  addDays,
  differenceInYears,
  format,
  isAfter,
  isBefore,
  isValid,
  parse,
  parseISO,
  subDays,
} from "date-fns";

const DateFns: NextPage = () => {
  const jstDateTime = utcToZonedTime(new Date(), "Asia/Tokyo");

  return (
    <div>
      <h1>date-fns Demo</h1>
      <p>{format(jstDateTime, "yyyy年M月d日 HH:mm:ss")}</p>
    </div>
  );
};

export default DateFns;
