import { LoaderProvider } from "@/provider/loadingProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/quoteReducer"

export default function App({ Component, pageProps }: AppProps) {

  return (

    // step : 2
    //we provided the store so that it is accesable to all 
    <Provider store={store}>
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
    </Provider>
  );
}
