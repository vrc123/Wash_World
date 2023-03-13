import styles from '@/styles/Product.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Button from '@/components/Button';

export default function Product() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    }, 300000);
  }, [])

  function goBack() {
    router.back()
  }

  function next() {
    router.push("/start");
  }

  return (
    <div>
      <h1>Product</h1>
      <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at dolore temporibus, sint adipisci laudantium animi fugiat saepe, tenetur eveniet totam facere aliquam hic obcaecati voluptate reprehenderit a repudiandae quam.</p>
      <p>Price: 39.00,-</p>
      <Button variant="secondary" label="Back" onClick={goBack} />
      <Button variant="primary" label="Next" onClick={next} />
    </div>
  )
}