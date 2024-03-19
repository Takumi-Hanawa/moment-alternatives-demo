import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

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

const Home: NextPage = () => {
  console.log(isValid(parse("20220427", "yyyy-MM-dd", new Date())));

  dayjs.extend(utc);
  dayjs.extend(timezone);

  // const jodaNow = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
  // const jodaISO = ZonedDateTime.of(
  //   LocalDateTime.parse("2022-04-01T00:00:00"),
  //   ZoneId.of("Asia/Tokyo")
  // );
  // const jodaFormatter = DateTimeFormatter.ofPattern("yyyy年M月d日 HH:mm:ss");

  const jstDateTime = utcToZonedTime(new Date(), "Asia/Tokyo");

  /**
   * Diff
   */
  let dayjsDiff;
  try {
    dayjsDiff = dayjs(jstDateTime).diff("2022-04-01T00:00:00", "year", true);
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsDiff = "error";
  }

  let luxonDiff;
  try {
    luxonDiff = DateTime.now()
      .setZone("Asia/Tokyo")
      .diff(
        DateTime.fromISO("2022-04-01T00:00:00").setZone("Asia/Tokyo"),
        "year"
      ).years;
  } catch (e) {
    console.log("luxon : ", e);
    luxonDiff = "error";
  }

  let dateFnsDiff;
  try {
    dateFnsDiff = differenceInYears(
      jstDateTime,
      parseISO("2022-04-01T00:00:00")
    );
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsDiff = "error";
  }

  let jsJodaDiff;
  try {
    const jodaNow = LocalDate.now(ZoneId.of("Asia/Tokyo"));
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
    dayjsAdd = dayjs(jstDateTime).add(1, "day").format("YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsAdd = "error";
  }

  let luxonAdd;
  try {
    luxonAdd = DateTime.now()
      .setZone("Asia/Tokyo")
      .plus({ days: 1 })
      .toFormat("yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("luxon : ", e);
    luxonAdd = "error";
  }

  let dateFnsAdd;
  try {
    dateFnsAdd = format(addDays(jstDateTime, 1), "yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsAdd = "error";
  }

  // let jsJodaAdd;
  // try {
  //   const jodaAdd = jodaNow.plusDays(1);
  //   jsJodaAdd = jodaAdd.format(jodaFormatter);
  // } catch (e) {
  //   console.log("js-joda : ", e);
  //   jsJodaAdd = "error";
  // }

  let tempoAdd;
  try {
    tempoAdd = tempoFormat(addDay(jstDateTime, 1), "YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("tempo : ", e);
    tempoAdd = "error";
  }

  /**
   * Subtract
   */
  let dayjsSubtract;
  try {
    dayjsSubtract = dayjs(jstDateTime)
      .subtract(1, "day")
      .format("YYYY年M月D日 HH:mm:ss");
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsSubtract = "error";
  }

  let luxonSubtract;
  try {
    luxonSubtract = DateTime.now()
      .setZone("Asia/Tokyo")
      .minus({ days: 1 })
      .toFormat("yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("luxon : ", e);
    luxonSubtract = "error";
  }

  let dateFnsSubtract;
  try {
    dateFnsSubtract = format(subDays(jstDateTime, 1), "yyyy年M月d日 HH:mm:ss");
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsSubtract = "error";
  }

  // let jsJodaSubtract;
  // try {
  //   const jodaSubtract = jodaNow.minusDays(1);
  //   jsJodaSubtract = jodaSubtract.format(jodaFormatter);
  // } catch (e) {
  //   console.log("js-joda : ", e);
  //   jsJodaSubtract = "error";
  // }

  let tempoSubtract;
  try {
    tempoSubtract = tempoFormat(
      addDay(jstDateTime, -1),
      "YYYY年M月D日 HH:mm:ss"
    );
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
    luxonValid = DateTime.fromISO("2022-02-29").setZone("Asia/Tokyo").isValid;
  } catch (e) {
    console.log("luxon : ", e);
    luxonValid = "error";
  }

  let dateFnsValid;
  try {
    dateFnsValid = isValid(new Date("2022-02-29"));
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsValid = "error";
  }

  // js-jodaにはvalidに相当する機能がないため、parseでエラーが出なければ有効とする
  let jsJodaValid;
  try {
    const localData = LocalDateTime.parse("2022-02-29T00:00:00").atZone(
      ZoneId.of("Asia/Tokyo")
    );
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
    dayjsBefore = dayjs("2022-04-01T00:00:00").isBefore(dayjs(jstDateTime));
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsBefore = "error";
  }

  let dayjsAfter;
  try {
    dayjsAfter = dayjs("2099-04-01T00:00:00").isAfter(dayjs(jstDateTime));
  } catch (e) {
    console.log("dayjs : ", e);
    dayjsAfter = "error";
  }

  let luxonBefore;
  try {
    luxonBefore =
      DateTime.fromISO("2022-04-01T00:00:00").setZone("Asia/Tokyo") <
      DateTime.now().setZone("Asia/Tokyo")
        ? true
        : false;
  } catch (e) {
    console.log("luxon : ", e);
    luxonBefore = "error";
  }

  let luxonAfter;
  try {
    luxonAfter =
      DateTime.fromISO("2099-04-01T00:00:00").setZone("Asia/Tokyo") >
      DateTime.now().setZone("Asia/Tokyo")
        ? true
        : false;
  } catch (e) {
    console.log("luxon : ", e);
    luxonAfter = "error";
  }

  let dateFnsBefore;
  try {
    dateFnsBefore = isBefore(parseISO("2022-04-01T00:00:00"), jstDateTime)
      ? true
      : false;
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsBefore = "error";
  }

  let dateFnsAfter;
  try {
    dateFnsAfter = isAfter(parseISO("2099-04-01T00:00:00"), jstDateTime)
      ? true
      : false;
  } catch (e) {
    console.log("date-fns : ", e);
    dateFnsAfter = "error";
  }

  // let jsJodaBefore;
  // try {
  //   const jodaBefore = ZonedDateTime.of(
  //     LocalDateTime.parse("2022-04-01T00:00:00"),
  //     ZoneId.of("Asia/Tokyo")
  //   );
  //   jsJodaBefore = jodaBefore.isBefore(jodaNow);
  // } catch (e) {
  //   console.log("js-joda : ", e);
  //   jsJodaBefore = "error";
  // }

  // let jsJodaAfter;
  // try {
  //   const jodaAfter = ZonedDateTime.of(
  //     LocalDateTime.parse("2099-04-01T00:00:00"),
  //     ZoneId.of("Asia/Tokyo")
  //   );
  //   jsJodaAfter = jodaAfter.isAfter(jodaNow);
  // } catch (e) {
  //   console.log("js-joda : ", e);
  //   jsJodaAfter = "error";
  // }

  let tempoBefore;
  try {
    tempoBefore = tempoIsBefore("2022-04-01T00:00:00", jstDateTime);
  } catch (e) {
    console.log("tempo : ", e);
    tempoBefore = "error";
  }

  let tempoAfter;
  try {
    tempoAfter = tempoIsAfter("2099-04-01T00:00:00", jstDateTime);
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
              <td>
                <b>format</b>
                <br />
                <code>format(new Date,&quot;YYYY年M月D日 HH:mm:ss&quot;)</code>
              </td>
              <td>
                <b>format</b>
                <br />
                <code>
                  format(&quot;2022-04-01T00:00:00&quot;,&quot;YYYY年M月D日
                  HH:mm:ss&quot;)
                </code>
              </td>
              <td>
                <b>diff</b>
                <br />
                <code>diff(new Date,&quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>add</b>
                <br />
                <code>add(new Date,1)</code>
              </td>
              <td>
                <b>sub</b>
                <br />
                <code>sub(new Date,1)</code>
              </td>
              <td>
                <b>isValid</b>
                <br />
                <code>isValid(&quot;2022-02-29T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isBefore</b>
                <br />
                <code>isBefore(new Date, &quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isAfter</b>
                <br />
                <code>isAfter(new Date, &quot;2099-04-01T00:00:00&quot;)</code>
              </td>
            </tr>
            <tr>
              <td>{dayjs(jstDateTime).format("YYYY年M月D日 HH:mm:ss")}</td>
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
        <h2>Luxon latest</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <b>format</b>
                <br />
                <code>format(new Date,&quot;YYYY年M月D日 HH:mm:ss&quot;)</code>
              </td>
              <td>
                <b>format</b>
                <br />
                <code>
                  format(&quot;2022-04-01T00:00:00&quot;,&quot;YYYY年M月D日
                  HH:mm:ss&quot;)
                </code>
              </td>
              <td>
                <b>diff</b>
                <br />
                <code>diff(new Date,&quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>add</b>
                <br />
                <code>add(new Date,1)</code>
              </td>
              <td>
                <b>sub</b>
                <br />
                <code>sub(new Date,1)</code>
              </td>
              <td>
                <b>isValid</b>
                <br />
                <code>isValid(&quot;2022-02-29T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isBefore</b>
                <br />
                <code>isBefore(new Date, &quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isAfter</b>
                <br />
                <code>isAfter(new Date, &quot;2099-04-01T00:00:00&quot;)</code>
              </td>
            </tr>
            <tr>
              <td>
                {DateTime.now()
                  .setZone("Asia/Tokyo")
                  .toFormat("yyyy年M月d日 HH:mm:ss")}
              </td>
              <td>
                {DateTime.fromISO("2022-04-01T00:00:00", {
                  zone: "Asia/Tokyo",
                }).toFormat("yyyy年M月d日 HH:mm:ss")}
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
              <td>
                <b>format</b>
                <br />
                <code>format(new Date,&quot;YYYY年M月D日 HH:mm:ss&quot;)</code>
              </td>
              <td>
                <b>format</b>
                <br />
                <code>
                  format(&quot;2022-04-01T00:00:00&quot;,&quot;YYYY年M月D日
                  HH:mm:ss&quot;)
                </code>
              </td>
              <td>
                <b>diff</b>
                <br />
                <code>diff(new Date,&quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>add</b>
                <br />
                <code>add(new Date,1)</code>
              </td>
              <td>
                <b>sub</b>
                <br />
                <code>sub(new Date,1)</code>
              </td>
              <td>
                <b>isValid</b>
                <br />
                <code>isValid(&quot;2022-02-29T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isBefore</b>
                <br />
                <code>isBefore(new Date, &quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isAfter</b>
                <br />
                <code>isAfter(new Date, &quot;2099-04-01T00:00:00&quot;)</code>
              </td>
            </tr>
            <tr>
              <td>{format(jstDateTime, "yyyy年M月d日 HH:mm:ss")}</td>
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
      {/* <div>
        <h2>js-Joda latest</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <b>format</b>
                <br />
                <code>format(new Date,&quot;YYYY年M月D日 HH:mm:ss&quot;)</code>
              </td>
              <td>
                <b>format</b>
                <br />
                <code>
                  format(&quot;2022-04-01T00:00:00&quot;,&quot;YYYY年M月D日
                  HH:mm:ss&quot;)
                </code>
              </td>
              <td>
                <b>diff</b>
                <br />
                <code>diff(new Date,&quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>add</b>
                <br />
                <code>add(new Date,1)</code>
              </td>
              <td>
                <b>sub</b>
                <br />
                <code>sub(new Date,1)</code>
              </td>
              <td>
                <b>isValid</b>
                <br />
                <code>isValid(&quot;2022-02-29T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isBefore</b>
                <br />
                <code>isBefore(new Date, &quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isAfter</b>
                <br />
                <code>isAfter(new Date, &quot;2099-04-01T00:00:00&quot;)</code>
              </td>
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
              <td>
                <b>format</b>
                <br />
                <code>format(new Date,&quot;YYYY年M月D日 HH:mm:ss&quot;)</code>
              </td>
              <td>
                <b>format</b>
                <br />
                <code>
                  format(&quot;2022-04-01T00:00:00&quot;,&quot;YYYY年M月D日
                  HH:mm:ss&quot;)
                </code>
              </td>
              <td>
                <b>diff</b>
                <br />
                <code>diff(new Date,&quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>add</b>
                <br />
                <code>add(new Date,1)</code>
              </td>
              <td>
                <b>sub</b>
                <br />
                <code>sub(new Date,1)</code>
              </td>
              <td>
                <b>isValid</b>
                <br />
                <code>isValid(&quot;2022-02-29T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isBefore</b>
                <br />
                <code>isBefore(new Date, &quot;2022-04-01T00:00:00&quot;)</code>
              </td>
              <td>
                <b>isAfter</b>
                <br />
                <code>isAfter(new Date, &quot;2099-04-01T00:00:00&quot;)</code>
              </td>
            </tr>
            <tr>
              <td>{tempoFormat(jstDateTime, "YYYY年M月D日 HH:mm:ss")}</td>
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
      </div> */}
    </div>
  );
};

export default Home;
