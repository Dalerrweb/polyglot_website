import { useCallback, useEffect, useState } from "react";

const Timer:any = ({time , setEndTest}:any) => {
    const timer = Date.now() + time;
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        if (hours === -1) {
            setEndTest(true)
        } 
    }, [hours])  
    
    const getTime = () => {
        if(Math.floor((timer / 1000) % 60) - Math.floor((Date.now() / 1000) % 60) <= 0){

            setMinutes(Math.floor((timer / 1000 / 60) % 60) - Math.floor((Date.now() / 1000 / 60) % 60) - 1)
            setSeconds(59 + (Math.floor((timer / 1000) % 60) - Math.floor((Date.now() / 1000) % 60)))

            if(Math.floor((timer / 1000 / 60) % 60) - Math.floor((Date.now() / 1000 / 60) % 60) <= 0){

                setHours(Math.floor((timer/ (1000 * 60 * 60)) % 24) - Math.floor((Date.now() / (1000 * 60 * 60)) % 24) -1)
                setMinutes(59 + (Math.floor((timer / 1000 / 60) % 60) - Math.floor((Date.now() / 1000 / 60) % 60)))
                if(Math.floor((timer/ (1000 * 60 * 60)) % 24) - Math.floor((Date.now() / (1000 * 60 * 60)) % 24) < 0){
                    setEndTest(true)
                }
            }
        }else{
            setSeconds(Math.floor((timer / 1000) % 60) - Math.floor((Date.now() / 1000) % 60))
        }
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(), 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>{hours}:{minutes}:{seconds}</>
    )

}

export default Timer