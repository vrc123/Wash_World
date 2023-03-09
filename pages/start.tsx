import styles from '@/styles/Start.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Start() {

  const [start, setStart] = useState(false);

  const router = useRouter();

  function goBack() {
    router.back();
  }

  function startWash() {
    setStart(true);
    setTimeout(()=>{
      router.push("/");
    }, 1000);
  }
  
  return (
    <>
      {!start && <div>
        <h1>Start wash</h1>
        <div>Detail list</div>
        <button onClick={goBack}>Back</button>
        <button onClick={startWash}>Start</button>
      </div>}
      {start && <div>
        <h1>Countdown: 10:00</h1>
        <p>Info</p>
      </div>}
    </>
  )
}
