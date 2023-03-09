import styles from '@/styles/Products.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Products() {

  const router = useRouter();

  function goBack() {
    router.back()
  }
  
  return (
    <div>
      <h1>Products</h1>
      <div>
        <Link href="/products/1">
          <div>Basis</div>
          <p>Price: 59,-</p>
        </Link>
        <Link href="/products/1">
          <div>Basis</div>
          <p>Price: 59,-</p>
        </Link>
        <Link href="/products/1">
          <div>Basis</div>
          <p>Price: 59,-</p>
        </Link>
        <Link href="/products/1">
          <div>Basis</div>
          <p>Price: 59,-</p>
        </Link>
      </div>
      <button onClick={goBack}>Back</button>
    </div>
  )
}