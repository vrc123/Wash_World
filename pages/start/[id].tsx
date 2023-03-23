import styles from '@/styles/pages/Start.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';


export default function Start() {

  const count = useSelector((state: RootState) => state.location.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("hej " + count[0])
  })

  const [start, setStart] = useState(false);

  const router = useRouter();


  function goBack() {
    router.back();
  }

  function startWash() {
    setStart(true);
  }
  
  return (
    <>
      {!start && <div className={styles.start}>
        <h1>Start wash</h1>
        <div>Detail list</div>
        <Button variant="secondary" label="Back" onClick={goBack} />
        <Button variant="primary" label="Start" onClick={startWash} />
      </div>}
      {start && <div className={styles.start}>
        <h1>Countdown: 10:00</h1>
        <p>Info</p>
      </div>}
    </>
  )
}
