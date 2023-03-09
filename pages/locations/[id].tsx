import styles from '@/styles/Location.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Location() {
  
  const router = useRouter();

  function goBack() {
    router.back()
  }

  return (
    <div>
      <h1>Dynamovej 10</h1>
      <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deleniti incidunt. Ipsum repudiandae eum labore eveniet unde. Quia accusantium nemo sit ipsa similique placeat, illo, nulla laboriosam ullam earum culpa!</p>
      <p>License plate number:</p>
      <select name="" id="">
        <option value="">BV99123</option>
        <option value="">BV99123</option>
        <option value="">BV99123</option>
        <option value="">BV99123</option>
      </select>
      <button onClick={goBack}>Back</button>
      <Link href="/products">
        <button>Next</button>
      </Link>
    </div>
  )
}