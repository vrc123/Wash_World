import styles from '@/styles/pages/Welcome.module.css'
import { useRouter } from 'next/router';
import Button from '@/components/Button'
import PTag from '@/components/PTag';
import H1Tag from '@/components/H1Tag';
import Countdown from '@/components/Watch';

export default function Welcome() {

  const router = useRouter();

  function startProcess() {
    router.push("/locations");
  }

  return (
    <div className={styles.welcome}>
      <PTag variant="primary" text="Welcome to" />
      <H1Tag text="Wash World" />
      <PTag variant="secondary" text="Click on start to proceed" />
      <Button variant="primary" label="Start" onClick={startProcess} />
      <Countdown/>
    </div>
  )
}

