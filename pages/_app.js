import { SWRConfig } from "swr";
import Header from "../components/Header";
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
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
