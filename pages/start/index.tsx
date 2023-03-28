import styles from '@/styles/pages/Start.module.css'
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import Watch from '@/components/Watch';
import { setup } from '@/features/startSlice';
import PTag from '@/components/PTag';
import H1Tag from '@/components/H1Tag';

export default function Start() {

  const location = useSelector((state: RootState) => state.location.value)
  const program = useSelector((state: RootState) => state.program.value)
  const started = useSelector((state: RootState) => state.start.started)
  const duration = useSelector((state: RootState) => state.start.duration)
  const dispatch = useDispatch()

  const router = useRouter();

  function goBack() {
    router.back();
  }

  function startWash() {
    fetch(`https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/${location}/start/${program}`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      }
    }).then((res) => {
      return res.json();
    }).then((res) => {
      dispatch(setup(res.response.estimated_duration))
    })
  }
  
  return (
    <>
      {!started && <div className={styles.start}>
        <PTag variant="primary" text="Start" />
        <H1Tag text="Wash" />
        <PTag variant="secondary" text="Click on start to start the washing program" />
        <div className={styles.startButtons}>
          <Button variant="secondary" label="Back" onClick={goBack} />
          <span></span>
          <Button variant="primary" label="Start" onClick={startWash} />
        </div>
      </div>}
      {started && <div className={styles.start}>
        <PTag variant="primary" text="Time left" />
        <Watch duration={duration} />
        <PTag variant="secondary" text="We wish you a good wash" />
      </div>}
    </>
  )
}