import styles from '@/styles/Start.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

export default function Start() {

  const [start, setStart] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!start) {
      setTimeout(()=>{
        router.push("/");
      }, 300000);
    } 
  }, [])

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
        <Button variant="secondary" label="Back" onClick={goBack} />
        <Button variant="primary" label="Start" onClick={startWash} />
      </div>}
      {start && <div>
        <h1>Countdown: 10:00</h1>
        <p>Info</p>
      </div>}
    </>
  )
}
