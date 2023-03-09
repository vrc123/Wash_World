import styles from '@/styles/Locations.module.css'
import Link from 'next/link'

export default function Locations() {
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