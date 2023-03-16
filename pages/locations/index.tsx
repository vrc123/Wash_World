import styles from '@/styles/Locations.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface Locations {
  id: number;
  name: string;
  status: string;
}

export async function getStaticProps() {

  const res = await fetch('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations');
  const data = await res.json();

  return {
    props: { locations: data.response.locations }
  }
}

interface LocationsProps {
  locations: Locations[];
}

export default function Locations({ locations }: LocationsProps) {

  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    }, 300000);
  }, [])

  return (
    <div>
      <h1>Locations</h1>
      {locations.map((location)=>{
        return(
          <Link key={location.id} href={`/locations/${location.id}`}>
            <div>{location.name}</div>
            <div>{location.status}</div>
          </Link>
        )
      })}
    </div>
  )
}