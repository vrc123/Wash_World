import styles from '@/styles/Locations.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Locations() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    }, 300000);
  }, [])

  return (
    <div>
      <h1>Locations</h1>
      <Link href="/locations/1">
        <div>Dynamovej 10</div>
        <div>Status: available</div>
      </Link>
      <Link href="/locations/1">
        <div>Dynamovej 10</div>
        <div>Status: available</div>
      </Link>
      <Link href="/locations/1">
        <div>Dynamovej 10</div>
        <div>Status: available</div>
      </Link>
      <Link href="/locations/1">
        <div>Dynamovej 10</div>
        <div>Status: available</div>
      </Link>
    </div>
  )
}