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
  isValid,
  parseISO,
  subDays,
} from "date-fns";
import { DateTimeFormatter, LocalDate, LocalDateTime, Period } from "js-joda";

const Home: NextPage = () => {
  var dateNow = Date.now();
  // dayjs.extend(utc);
  // dayjs.extend(timezone);

  const jodaNow = LocalDateTime.now();
  const jodaISO = LocalDateTime.parse("2022-04-01T00:00:00");
  const jodaFormatter = DateTimeFormatter.ofPattern("yyyy年M月d日 HH:mm:ss");

  let dayjsDiff;
  try {
    dayjsDiff = dayjs(dateNow).diff("2022-04-01T00:00:00", "year", true);
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
      dateNow,
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

  let dayjsAdd;
  try {
    dayjsAdd = dayjs(dateNow).add(1, "day").format("YYYY年M月D日 HH:mm:ss");
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
    dateFnsAdd = format(addDays(dateNow, 1), "yyyy年M月d日 HH:mm:ss");
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

  let dayjsSubtract;
  try {
    dayjsSubtract = dayjs(dateNow)
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
    dateFnsSubtract = format(subDays(dateNow, 1), "yyyy年M月d日 HH:mm:ss");
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

  let jsJodaValid;
  try {
    const localData = LocalDate.parse("2022-02-29");
    jsJodaValid = localData ? "true" : "false";
  } catch (e) {
    console.log("js-joda : ", e);
    jsJodaValid = "error";
  }

  return (
    <div className={styles.container}>
      <h1>Moment Alternatives Demo</h1>
      <div>
        <h2>Day.js</h2>
        <table>
          <tbody>
            <tr>
              <td>format : date.now</td>
              <td>format : ISO string</td>
              <td>diff : now - 2022-04-01</td>
              <td>add 1day</td>
              <td>sub 1day</td>
              <td>valid 2022-02-29</td>
            </tr>
            <tr>
              <td>{dayjs(dateNow).format("YYYY年M月D日 HH:mm:ss")}</td>
              <td>
                {dayjs("2022-04-01T00:00:00").format("YYYY年M月D日 HH:mm:ss")}
              </td>
              <td>{dayjsDiff} year</td>
              <td>{dayjsAdd}</td>
              <td>{dayjsSubtract}</td>
              <td>{dayjsValid.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Luxon 1.28.1</h2>
        <table>
          <tbody>
            <tr>
              <td>format : date.now</td>
              <td>format : ISO string</td>
              <td>diff : now - 2022-04-01</td>
              <td>add 1day</td>
              <td>sub 1day</td>
              <td>valid 2022-02-29</td>
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
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>date-fns 2.30.0</h2>
        <table>
          <tbody>
            <tr>
              <td>format : date.now</td>
              <td>format : ISO string</td>
              <td>diff : now - 2022-04-01</td>
              <td>add 1day</td>
              <td>sub 1day</td>
              <td>valid 2022-02-29</td>
            </tr>
            <tr>
              <td>{format(dateNow, "yyyy年M月d日 HH:mm:ss")}</td>
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
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>js-Joda</h2>
        <table>
          <tbody>
            <tr>
              <td>format : date.now</td>
              <td>format : ISO string</td>
              <td>diff : now - 2022-04-01</td>
              <td>add 1day</td>
              <td>sub 1day</td>
              <td>valid 2022-02-29</td>
            </tr>
            <tr>
              <td>{jodaNow.format(jodaFormatter)}</td>
              <td>{jodaISO.format(jodaFormatter)}</td>
              <td>{jsJodaDiff} year</td>
              <td>{jsJodaAdd}</td>
              <td>{jsJodaSubtract}</td>
              <td>{jsJodaValid}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
