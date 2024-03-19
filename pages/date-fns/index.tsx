import { NextPage } from "next";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DateTime } from "luxon";
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
import {
  DateTimeFormatter,
  LocalDate,
  LocalDateTime,
  ZonedDateTime,
  ZoneId,
  Period,
} from "@js-joda/core";
import "@js-joda/timezone";

import {
  addDay,
  iso8601,
  format as tempoFormat,
  isBefore as tempoIsBefore,
  isAfter as tempoIsAfter,
} from "@formkit/tempo";

import { utcToZonedTime } from "date-fns-tz";

const DateFns: NextPage = () => {
  try {
    const utcDate = utcToZonedTime(new Date("2024-01-01"), "Asia/Tokyo");
    console.log("utcToZonedTime: ", utcDate);
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
