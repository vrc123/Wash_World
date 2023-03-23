import { setup, countdown } from "@/features/watchSlice"
import { RootState } from "@/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Watch() {

    const watch = useSelector((state: RootState) => state.timer.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(watch)
    }, [watch])

    useEffect(() => {
        dispatch(setup(10))
        const watchInterval = setInterval(()=>{
          dispatch(countdown())
        }, 1000);
        return () => clearInterval(watchInterval)
    }, [])

    /*

    let duration = "00:00";
    let divideByUnitOftime = duration.split(':');
  
    useEffect(() => {
      console.log(countdown)
    }, [countdown])
  
  
    useEffect(()=>{
      dispatch(setup([Number(divideByUnitOftime[0]), Number(divideByUnitOftime[1])]))
  
      const countdownInterval = setInterval(()=>{
        if(countdown.sec == 0 && countdown.min == 0 && countdown.washStarted) {
          clearInterval(countdownInterval);
        } else {
          dispatch(decrementSec());
          
          if(countdown.sec == 0) {
            dispatch(decrementMin());
            dispatch(changeSec(59));
          }
        }
        
        else {
          dispatch(decrementSec())
          if(countdown.sec == 0) {
            dispatch(decrementMin());
            dispatch(changeSec(59));
          }
        }
      }, 1000);
      return () => clearInterval(countdownInterval)
    }, [])
    */
  
    /*
    useEffect(()=>{
      const countdownInterval = setInterval(()=>{
        if(countdown.sec == 0 && countdown.min == 0) {
          clearInterval(countdownInterval);
        } else {
          setSec(prev => prev -= 1)
          if(sec == 0) {
            setMin(prev => prev -= 1)
            setSec(59)
          }
        }
      }, 1000);
      return () => clearInterval(countdownInterval)
    }, [countdown.sec])
    */
  
  
    /*
    let duration = "12:00";
    let divideByUnitOftime = duration.split(':');
  
    const [min, setMin] = useState(Number(divideByUnitOftime[0]));
    const [sec, setSec] = useState(Number(divideByUnitOftime[1]));
  
    useEffect(()=>{
      setMin(Number(divideByUnitOftime[0]));
      setSec(Number(divideByUnitOftime[1]));
    }, [])
  
    useEffect(()=>{
      const countdownInterval = setInterval(()=>{
        if(sec == 0 && min == 0) {
          clearInterval(countdownInterval);
        } else {
          setSec(prev => prev -= 1)
          if(sec == 0) {
            setMin(prev => prev -= 1)
            setSec(59)
          }
        }
      }, 1000);
      return () => clearInterval(countdownInterval)
    }, [sec])
    */

  return (
    <div>
        {watch}
    </div>
  )
}
