import { SWRConfig } from "swr";
import "../styles/globals.css";
import fetcher from "../utils/fetcher";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        fetcher: fetcher,
      }}
    >
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
