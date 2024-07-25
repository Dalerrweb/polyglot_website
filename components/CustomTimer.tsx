import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface TimerProps {
   time: number;
   sendData: Function,
   setEndTest: Dispatch<SetStateAction<boolean>>
}

const Timer: React.FC<TimerProps> = ({ time, sendData, setEndTest }) => {
   const timer = Date.now() + time;
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   useEffect(() => {
      if (hours == -1) {
         sendData();
         setEndTest(true);
      }
   }, [hours, sendData, setEndTest]);

   const getTime = () => {
      if (
         Math.floor((timer / 1000) % 60) -
         Math.floor((Date.now() / 1000) % 60) <=
         0
      ) {
         setMinutes(
            Math.floor((timer / 1000 / 60) % 60) -
            Math.floor((Date.now() / 1000 / 60) % 60) -
            1
         );
         setSeconds(
            59 +
            (Math.floor((timer / 1000) % 60) -
               Math.floor((Date.now() / 1000) % 60))
         );

         if (
            Math.floor((timer / 1000 / 60) % 60) -
            Math.floor((Date.now() / 1000 / 60) % 60) <=
            0
         ) {
            setHours(
               Math.floor((timer / (1000 * 60 * 60)) % 24) -
               Math.floor((Date.now() / (1000 * 60 * 60)) % 24) -
               1
            );
            setMinutes(
               59 +
               (Math.floor((timer / 1000 / 60) % 60) -
                  Math.floor((Date.now() / 1000 / 60) % 60))
            );
            if (
               Math.floor((timer / (1000 * 60 * 60)) % 24) -
               Math.floor((Date.now() / (1000 * 60 * 60)) % 24) <
               0
            ) {
               sendData();
               setEndTest(true);
            }
         }
      } else {
         setSeconds(
            Math.floor((timer / 1000) % 60) -
            Math.floor((Date.now() / 1000) % 60)
         );
      }
   };

   useEffect(() => {
      const interval = setInterval(() => getTime(), 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <>
         {hours}:{minutes}:{seconds}
      </>
   );
};

export default Timer;
