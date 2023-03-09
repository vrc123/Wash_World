import styles from '@/styles/Product.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Product() {

  const router = useRouter();

  function goBack() {
    router.back()
  }

  return (
    <div>
      <h1>Product</h1>
      <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at dolore temporibus, sint adipisci laudantium animi fugiat saepe, tenetur eveniet totam facere aliquam hic obcaecati voluptate reprehenderit a repudiandae quam.</p>
      <p>Price: 39.00,-</p>
      <button onClick={goBack}>Back</button>
      <Link href="/start">
        <button>Next</button>
      </Link>
    </div>
  )
}