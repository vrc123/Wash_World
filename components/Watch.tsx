import { setup, countdownSec, countdownMin, saveInterval, changeSec } from "@/features/watchSlice"
import { RootState } from "@/store"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Watch() {

  const sec = useSelector((state: RootState) => state.timer.sec)
  const min = useSelector((state: RootState) => state.timer.min)
  const started = useSelector((state: RootState) => state.timer.washStarted)
  const interval = useSelector((state: RootState) => state.timer.interval)
  const dispatch = useDispatch()

  const router = useRouter();

  let duration = "7:00";
  let divideByUnitOftime = duration.split(':');

  useEffect(() => {
      dispatch(setup([Number(divideByUnitOftime[0]), Number(divideByUnitOftime[1])]))

      const watchInterval = setInterval(()=>{  
        dispatch(countdownSec())
      }, 1000);

      dispatch(saveInterval(watchInterval))
      return () => clearInterval(watchInterval)
  }, [])

  useEffect(() => {
    if(sec === 0 && min === 0 && started) {
      clearInterval(interval)
      router.push("/");
    } else if (sec === 0 && started) {
      dispatch(countdownMin())
      dispatch(changeSec(59))
    }
  }, [sec])

  return (
    <div>
        {min < 10 && <span>0</span>}{min}:{sec < 10 && <span>0</span>}{sec}
    </div>
  )
}
