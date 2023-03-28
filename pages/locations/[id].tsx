import styles from '@/styles/pages/Location.module.css'
import { useRouter } from 'next/router'
import Button from '@/components/Button';
import H1Tag from '@/components/H1Tag';
import PTag from '@/components/PTag';
import { useDispatch } from 'react-redux';
import { change } from '@/features/locationSlice';

export interface Cam {
  lpn: string;
  description: string;
  location: number;
}

interface Context {
  params: { id: number}
}

export async function getServerSideProps(context: Context) {
  const id = context.params.id;
  const res = await fetch('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/cam/' + id);
  const data = await res.json();

  return {
    props: { location: data.response }
  }
}

interface LocationProps {
  location: Cam;
}

export default function Location({ location }: LocationProps) {

  const dispatch = useDispatch()

  const router = useRouter();

  function goBack() {
    router.back()
  }

  function next() {
    dispatch(change(location.location))
    router.push("/products/" + location.lpn);
  }

  return (

    <div className={styles.location}>
      <PTag variant='primary' text="Your" />
      <H1Tag text='Car details' />
      <PTag variant='secondary' text={location.description} />
      <div>
        <Button variant="secondary" label="Back" onClick={goBack} />
        <span></span>
        <Button variant="primary" label="Next" onClick={next} />
      </div>
    </div>
  )
}
