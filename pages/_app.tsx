import Script from "next/script";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.DateTimeFormat%2CIntl.DateTimeFormat.%7EtimeZone.all%2CIntl.DateTimeFormat.%7EtimeZone.golden%2CIntl.DisplayNames%2CIntl.ListFormat%2CIntl.Locale%2CIntl.NumberFormat%2CIntl.PluralRules%2CIntl.RelativeTimeFormat%2CIntl.getCanonicalLocales%2CMath.acosh%2CMath.asinh%2CMath.atanh%2CMath.cbrt%2CMath.clz32%2CMath.cosh%2CMath.expm1%2CMath.fround%2CMath.hypot%2CMath.imul%2CMath.log10%2CMath.log1p%2CMath.log2%2CMath.sign%2CMath.trunc%2CMath.tanh%2CMath.sinh%2CDate.now%2CDate.prototype.toISOString" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
