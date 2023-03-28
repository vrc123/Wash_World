import styles from '@/styles/components/Watch.module.css'
import { setup, countdownSec, countdownMin, saveInterval, changeSec } from "@/features/watchSlice"
import { RootState } from "@/store"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

interface WatchProps {
  duration: string,
}

export default function Watch({ duration }: WatchProps) {

  const sec = useSelector((state: RootState) => state.watch.sec)
  const min = useSelector((state: RootState) => state.watch.min)
  const started = useSelector((state: RootState) => state.watch.washStarted)
  const interval = useSelector((state: RootState) => state.watch.interval)
  const dispatch = useDispatch()

  const router = useRouter();

  
  useEffect(() => {
      
    let divideByUnitOftime = duration.split(':');
      
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
    <div className={styles.watch}>
        {min < 10 && <span>0</span>}{min}:{sec < 10 && <span>0</span>}{sec}
    </div>
  )
}