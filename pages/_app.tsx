import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import Layout from "../components/Layout";
import { store } from "../src/utils/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
