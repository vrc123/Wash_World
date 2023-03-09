import styles from '@/styles/Welcome.module.css'
import Link from 'next/link'

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus reiciendis illo nam, labore perspiciatis, totam itaque odit temporibus atque consequatur hic at perferendis expedita nemo cumque facere voluptates dignissimos consequuntur!</p>
      <Link href="/locations">
        <button>Start</button>
      </Link>
    </div>
  )
}
