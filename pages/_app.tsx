import HeadMeta from "@/components/HeadMeta";
import Preloader from "@/components/Preloader";
import ModalContext from "@/context/ModalContext";
import TranslateContext from "@/context/useTranslate";
import eng from "@/languages/eng/eng";
import ru from "@/languages/ru/ru";
import uz from "@/languages/uzb/uz";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalTestID, setModalTestID] = useState<number>(0)

    const [loading, setLoading] = useState(false);

   Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
   });

   const changeModal = (state: boolean) => {
      setModalOpen(state);
   };

   const router = useRouter();
   const { locale } = router;

   const translation = locale === "uz" ? uz : locale === "ru" ? ru : eng;


  return (
    <>
        <HeadMeta
            title={
              locale == "ru"
                ? "Polyglot - Главная"
                : locale == "uz"
                ? "Polyglot - Bosh sahifa"
                : "Polyglot - Main"
        }
        />
        {
            loading ? (<Preloader/>) :
            (
                <TranslateContext.Provider value={translation}>
	                <ModalContext.Provider value={{modalOpen, changeModal, modalTestID, setModalTestID}} >
                        <Component {...pageProps} />
	    	        </ModalContext.Provider>
                </TranslateContext.Provider>
            )
        }
    </>   
	)
}
