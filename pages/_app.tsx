import ModalContext from "@/context/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ModalContext.Provider value={false}>
         <Component {...pageProps} />
      </ModalContext.Provider>
   );
}
