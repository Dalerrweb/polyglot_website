import React, { useState } from "react";

export default function Modal({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{children}</button>
      {isOpen && <ModalDialog/>}
    </div>
  );
}


const ModalDialog = () => {
    return (
        <div className="w-[500px] h-[500px] absolute top-1/2 left-1/2 bg-black -translate-y-1/2 -translate-x-1/2 z-10">
            modal
        </div>
    )
}
