import styles from '@/styles/Products.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link'
import Button from '@/components/Button';

export default function Products() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    }, 600000);
  }, [])

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
      <Button variant="tertiary" label="Back" onClick={goBack} />
    </div>
  )
}