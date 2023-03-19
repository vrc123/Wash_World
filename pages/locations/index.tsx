import styles from '@/styles/pages/Locations.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { decrement } from '../features/counter/counterSlice';
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

//useSelector hook to retrieve the dispatch function and the value of the countdown from the store

export default function Locations({ locations }: LocationsProps) {

  const router = useRouter();
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

//hook that starts the countdown by calling the decrement action every second.

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(decrement())
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

//hook that checks if the countdown has reached 0, and if so, navigates back to the home page using the router.push function

  useEffect(() => {
    if (value === 0) {
      router.push('/');
    }
  }, [value, router]);

//div to display the remaining time left in the countdown

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
      <div>Time left: {value}</div>
    </div>
  )
}
