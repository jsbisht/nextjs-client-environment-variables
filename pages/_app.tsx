import type { AppProps } from "next/app";
import { PublicConfigProvider } from "../state/PublicConfigContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PublicConfigProvider value={pageProps.publicConfigs}>
      <Component {...pageProps} />
    </PublicConfigProvider>
  );
}

export default MyApp;
