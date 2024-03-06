import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";
import { DateTime } from "luxon";
import { format, parseISO } from "date-fns";
import { DateTimeFormatter, LocalDateTime } from "js-joda";

const Home: NextPage = () => {
  var dateNow = Date.now();
  // dayjs.extend(utc);
  // dayjs.extend(timezone);

  const jodaNow = LocalDateTime.now();
  const jodaISO = LocalDateTime.parse("2022-04-01T00:00:00");
  const jodaFormatter = DateTimeFormatter.ofPattern("yyyy年M月d日 HH:mm:ss");

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
            </tr>
            <tr>
              <td>{dayjs(dateNow).format("YYYY年M月D日 HH:mm:ss")}</td>
              <td>
                {dayjs("2022-04-01T00:00:00").format("YYYY年M月D日 HH:mm:ss")}
              </td>
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
            </tr>
            <tr>
              <td>{DateTime.now().toFormat("yyyy年M月d日 HH:mm:ss")}</td>
              <td>
                {DateTime.fromISO("2022-04-01T00:00:00").toFormat(
                  "yyyy年M月d日 HH:mm:ss"
                )}
              </td>
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
            </tr>
            <tr>
              <td>{format(dateNow, "yyyy年M月d日 HH:mm:ss")}</td>
              <td>
                {format(
                  parseISO("2022-04-01T00:00:00"),
                  "yyyy年M月d日 HH:mm:ss"
                )}
              </td>
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
            </tr>
            <tr>
              <td>{jodaNow.format(jodaFormatter)}</td>
              <td>{jodaISO.format(jodaFormatter)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
