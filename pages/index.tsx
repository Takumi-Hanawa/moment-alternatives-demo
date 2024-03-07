import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";
import { DateTime } from "luxon";
import {
  addDays,
  differenceInCalendarYears,
  format,
  isAfter,
  isBefore,
  isValid,
  parseISO,
  subDays,
} from "date-fns";
import { DateTimeFormatter, LocalDate, LocalDateTime, Period } from "js-joda";
import {
  addDay,
  iso8601,
  format as tempoFormat,
  isBefore as tempoIsBefore,
  isAfter as tempoIsAfter,
} from "@formkit/tempo";

const Home: NextPage = () => {
  var date = new Date();
  // dayjs.extend(utc);
  // dayjs.extend(timezone);

  const jodaNow = LocalDateTime.now();
  const jodaISO = LocalDateTime.parse("2022-04-01T00:00:00");
  const jodaFormatter = DateTimeFormatter.ofPattern("yyyy年M月d日 HH:mm:ss");

  /**
   * Diff
   */
  let dayjsDiff;
  try {
    dayjsDiff = dayjs(date).diff("2022-04-01T00:00:00", "year", true);
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsDiff = "error";
  }

  let luxonDiff;
  try {
    luxonDiff = DateTime.now().diff(
      DateTime.fromISO("2022-04-01T00:00:00"),
      "year"
    ).years;
  } catch (e) {
    console.log("luxon : ", e);
    luxonDiff = "error";
  }

  let dateFnsDiff;
  try {
    dateFnsDiff = differenceInCalendarYears(
      date,
      parseISO("2022-04-01T00:00:00")
    );
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsDiff = "error";
  }

  let jsJodaDiff;
  try {
    const jodaNow = LocalDate.now();
    const jodaISO = LocalDate.parse("2022-04-01");
    const period = Period.between(jodaISO, jodaNow);
    jsJodaDiff = period.years();
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaDiff = "error";
  }

  /**
   * Add
   */
  let dayjsAdd;
  try {
    dayjsAdd = dayjs(date).add(1, "day").format("YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsAdd = "error";
  }

  let luxonAdd;
  try {
    luxonAdd = DateTime.now()
      .plus({ days: 1 })
      .toFormat("yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("luxon : ", e);
    luxonAdd = "error";
  }

  let dateFnsAdd;
  try {
    dateFnsAdd = format(addDays(date, 1), "yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsAdd = "error";
  }

  let jsJodaAdd;
  try {
    const jodaAdd = jodaNow.plusDays(1);
    jsJodaAdd = jodaAdd.format(jodaFormatter);
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaAdd = "error";
  }

  let tempoAdd;
  try {
    tempoAdd = tempoFormat(addDay(date, 1), "YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("tempo : ", e);
    tempoAdd = "error";
  }

  /**
   * Subtract
   */
  let dayjsSubtract;
  try {
    dayjsSubtract = dayjs(date)
      .subtract(1, "day")
      .format("YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsSubtract = "error";
  }

  let luxonSubtract;
  try {
    luxonSubtract = DateTime.now()
      .minus({ days: 1 })
      .toFormat("yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("luxon : ", e);
    luxonSubtract = "error";
  }

  let dateFnsSubtract;
  try {
    dateFnsSubtract = format(subDays(date, 1), "yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsSubtract = "error";
  }

  let jsJodaSubtract;
  try {
    const jodaSubtract = jodaNow.minusDays(1);
    jsJodaSubtract = jodaSubtract.format(jodaFormatter);
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaSubtract = "error";
  }

  let tempoSubtract;
  try {
    tempoSubtract = tempoFormat(addDay(date, -1), "YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("tempo : ", e);
    tempoSubtract = "error";
  }

  /**
   * Valid
   */
  let dayjsValid;
  try {
    dayjsValid = dayjs("2022-02-29").isValid();
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsValid = "error";
  }

  let luxonValid;
  try {
    luxonValid = DateTime.fromISO("2022-02-29").isValid;
  } catch (e) {
    console.log("luxon : ", e);
    luxonValid = "error";
  }

  let dateFnsValid;
  try {
    dateFnsValid = isValid(parseISO("2022-02-29"));
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsValid = "error";
  }

  // js-jodaにはvalidに相当する機能がないため、parseでエラーが出なければ有効とする
  let jsJodaValid;
  try {
    const localData = LocalDate.parse("2022-02-29");
    jsJodaValid = localData ? "true" : "false";
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaValid = "false";
  }

  // tempoにはvalidに相当する機能がないため、parseでエラーが出なければ有効とする
  let tempoValid;
  try {
    tempoValid = iso8601("2022-02-29");
  } catch (e) {
    console.log("tempo : ", e);
    tempoValid = "error";
  }

  /**
   * Before & After
   */
  let dayjsBefore;
  try {
    dayjsBefore = dayjs("2022-04-01T00:00:00").isBefore(dayjs(date));
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsBefore = "error";
  }

  let dayjsAfter;
  try {
    dayjsAfter = dayjs("2099-04-01T00:00:00").isAfter(dayjs(date));
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsAfter = "error";
  }

  let luxonBefore;
  try {
    luxonBefore =
      DateTime.fromISO("2022-04-01T00:00:00") < DateTime.now() ? true : false;
  } catch (e) {
    console.log("luxon : ", e);
    luxonBefore = "error";
  }

  let luxonAfter;
  try {
    luxonAfter =
      DateTime.fromISO("2099-04-01T00:00:00") > DateTime.now() ? true : false;
  } catch (e) {
    console.log("luxon : ", e);
    luxonAfter = "error";
  }

  let dateFnsBefore;
  try {
    dateFnsBefore = isBefore(parseISO("2022-04-01T00:00:00"), date)
      ? true
      : false;
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsBefore = "error";
  }

  let dateFnsAfter;
  try {
    dateFnsAfter = isAfter(parseISO("2099-04-01T00:00:00"), date)
      ? true
      : false;
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsAfter = "error";
  }

  let jsJodaBefore;
  try {
    const jodaBefore = LocalDateTime.parse("2022-04-01T00:00:00");
    jsJodaBefore = jodaBefore.isBefore(LocalDateTime.now());
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaBefore = "error";
  }

  let jsJodaAfter;
  try {
    const jodaAfter = LocalDateTime.parse("2099-04-01T00:00:00");
    jsJodaAfter = jodaAfter.isAfter(LocalDateTime.now());
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaAfter = "error";
  }

  let tempoBefore;
  try {
    tempoBefore = tempoIsBefore("2022-04-01T00:00:00", date);
  } catch (e) {
    console.log("tempo : ", e);
    tempoBefore = "error";
  }

  let tempoAfter;
  try {
    tempoAfter = tempoIsAfter("2099-04-01T00:00:00", date);
  } catch (e) {
    console.log("tempo : ", e);
    tempoAfter = "error";
  }

  return (
    <div className={styles.container}>
      <h1>Moment Alternatives Demo</h1>
      <div>
        <h2>Day.js latest</h2>
        <table>
          <tbody>
            <tr>
              <td>format : from Date</td>
              <td>format : from Date.now()</td>
              <td>format : from ISO string</td>
              <td>diff : now ↔︎ 2022-04-01</td>
              <td>add : now + 1day</td>
              <td>sub : now - 1day</td>
              <td>valid : 2022-02-29</td>
              <td>isBefore : now → 2022-04-01</td>
              <td>isAfter : now → 2099-04-01</td>
            </tr>
            <tr>
              <td>{dayjs(date).format("YYYY年M月D日 HH:mm:ss")}</td>
              <td>{dayjs(Date.now()).format("YYYY年M月D日 HH:mm:ss")}</td>
              <td>
                {dayjs("2022-04-01T00:00:00").format("YYYY年M月D日 HH:mm:ss")}
              </td>
              <td>{dayjsDiff} year</td>
              <td>{dayjsAdd}</td>
              <td>{dayjsSubtract}</td>
              <td>{dayjsValid.toString()}</td>
              <td>{dayjsBefore.toString()}</td>
              <td>{dayjsAfter.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Luxon 1.28.1</h2>
        <table>
          <tbody>
            <tr>
              <td>format : from Date</td>
              <td>format : from ISO string</td>
              <td>diff : now ↔︎ 2022-04-01</td>
              <td>add : now + 1day</td>
              <td>sub : now - 1day</td>
              <td>valid : 2022-02-29</td>
              <td>isBefore : now → 2022-04-01</td>
              <td>isAfter : now → 2099-04-01</td>
            </tr>
            <tr>
              <td>{DateTime.now().toFormat("yyyy年M月d日 HH:mm:ss")}</td>
              <td>
                {DateTime.fromISO("2022-04-01T00:00:00").toFormat(
                  "yyyy年M月d日 HH:mm:ss"
                )}
              </td>
              <td>{luxonDiff} year</td>
              <td>{luxonAdd}</td>
              <td>{luxonSubtract}</td>
              <td>{luxonValid.toString()}</td>
              <td>{luxonBefore.toString()}</td>
              <td>{luxonAfter.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>date-fns 2.30.0</h2>
        <table>
          <tbody>
            <tr>
              <td>format : from Date</td>
              <td>format : from ISO string</td>
              <td>diff : now ↔︎ 2022-04-01</td>
              <td>add : now + 1day</td>
              <td>sub : now - 1day</td>
              <td>valid : 2022-02-29</td>
              <td>isBefore : now → 2022-04-01</td>
              <td>isAfter : now → 2099-04-01</td>
            </tr>
            <tr>
              <td>{format(date, "yyyy年M月d日 HH:mm:ss")}</td>
              <td>
                {format(
                  parseISO("2022-04-01T00:00:00"),
                  "yyyy年M月d日 HH:mm:ss"
                )}
              </td>
              <td>{dateFnsDiff} year</td>
              <td>{dateFnsAdd}</td>
              <td>{dateFnsSubtract}</td>
              <td>{dateFnsValid.toString()}</td>
              <td>{dateFnsBefore.toString()}</td>
              <td>{dateFnsAfter.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>js-Joda latest</h2>
        <table>
          <tbody>
            <tr>
              <td>format : from Date</td>
              <td>format : from ISO string</td>
              <td>diff : now ↔︎ 2022-04-01</td>
              <td>add : now + 1day</td>
              <td>sub : now - 1day</td>
              <td>valid : 2022-02-29</td>
              <td>isBefore : now → 2022-04-01</td>
              <td>isAfter : now → 2099-04-01</td>
            </tr>
            <tr>
              <td>{jodaNow.format(jodaFormatter)}</td>
              <td>{jodaISO.format(jodaFormatter)}</td>
              <td>{jsJodaDiff} year</td>
              <td>{jsJodaAdd}</td>
              <td>{jsJodaSubtract}</td>
              <td>{jsJodaValid.toString()}</td>
              <td>{jsJodaBefore.toString()}</td>
              <td>{jsJodaAfter.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Tempo latest</h2>
        <table>
          <tbody>
            <tr>
              <td>format : from Date</td>
              <td>format : from ISO string</td>
              <td>diff : now ↔︎ 2022-04-01</td>
              <td>add : now + 1day</td>
              <td>sub : now - 1day</td>
              <td>valid : 2022-02-29</td>
              <td>isBefore : now → 2022-04-01</td>
              <td>isAfter : now → 2099-04-01</td>
            </tr>
            <tr>
              <td>{tempoFormat(date, "YYYY年M月D日 HH:mm:ss")}</td>
              <td>
                {tempoFormat("2022-04-01T00:00:00", "YYYY年M月D日 HH:mm:ss")}
              </td>
              <td>not supported</td>
              <td>{tempoAdd}</td>
              <td>{tempoSubtract}</td>
              <td>{tempoValid.toString()}</td>
              <td>{tempoBefore.toString()}</td>
              <td>{tempoAfter.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
