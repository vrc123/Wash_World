import styles from '@/styles/pages/Locations.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PTag from '@/components/PTag';
import H1Tag from '@/components/H1Tag';
import Location from '@/components/Location'

export interface Locations {
  id: number;
  name: string;
  status: "available" | "maintenance";
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

  return (
    <div className={styles.locations}>
      <PTag variant="primary" text="Choose" />
      <H1Tag text="Location" />
      <PTag variant="secondary" text="Click on a location to proceed" />
      <div className={styles.locationList}>
        {locations.map((location)=>{
          
          function selectLocation() {
            if (location.status == "available") {
              router.push("/locations/" + location.id);
            }
          }
          
          return(
            <Location key={location.id} status={location.status} name={location.name} onClick={selectLocation} />
          )
        })}
      </div>
    </div>
  )
}