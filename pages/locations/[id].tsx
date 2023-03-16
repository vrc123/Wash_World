import styles from '@/styles/Location.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Button from '@/components/Button';

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

  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    }, 600000);
  }, [])

  function goBack() {
    router.back()
  }

  function next() {
    router.push("/products/" + location.lpn);
  }

  return (

    <div>
      <h1>Detail about account</h1>
      <p>{location.description}</p>
      <Button variant="secondary" label="Back" onClick={goBack} />
      <Button variant="primary" label="Next" onClick={next} />
    </div>
  )
}