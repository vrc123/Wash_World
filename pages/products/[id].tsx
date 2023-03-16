import styles from '@/styles/pages/Products.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link'
import Button from '@/components/Button';

export interface Products {
  productid: number;
  name: string;
  description: string;
  price: string;
  program: number;
}

interface Context {
  params: { id: number}
}

export async function getServerSideProps(context: Context) {
  const id = context.params.id;
  const res = await fetch('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/' + id);
  const data = await res.json();

  return {
    props: { products: data.response.products }
  }
}

interface ProductsProps {
  products: Products[];
}

export default function Products({ products }: ProductsProps) {

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
    <div className={styles.products}>
      <h1>Products</h1>
      <div>
        {products.map((product)=>{
          return (
            <Link key={product.productid} href={"/start/" + product.program}>
              <div>{product.name}</div>
              <p>{`Price: ${product.price},-`}</p>
            </Link>
          );
        })}
      </div>
      <Button variant="tertiary" label="Back" onClick={goBack} />
    </div>
  )
}