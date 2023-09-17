import ModalContext from "@/context/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalTestID, setModalTestID] = useState<number>(0)
    const [infoStudent, setInfoStudent] = useState<any>()

    const changeModal = (state:boolean) => {
        setModalOpen(state)
    }
  return (
	    <ModalContext.Provider value={{modalOpen, changeModal, modalTestID, setModalTestID, infoStudent, setInfoStudent}} >
            <Component {...pageProps} />
		</ModalContext.Provider>
	)
}
