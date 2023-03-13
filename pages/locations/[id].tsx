import styles from '@/styles/Location.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Button from '@/components/Button';


export default function Location() {
  
  const router = useRouter();

  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    }, 600000);
  }, [])

  function goBack() {
    router.back()
  }

  function next() {
    router.push("/products");
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
      <Button variant="secondary" label="Back" onClick={goBack} />
      <Button variant="primary" label="Next" onClick={next} />
    </div>
  )
}