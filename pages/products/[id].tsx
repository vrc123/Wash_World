import styles from '@/styles/pages/Products.module.css'
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import Product from '@/components/Product';
import H1Tag from '@/components/H1Tag';
import PTag from '@/components/PTag';
import { useDispatch } from 'react-redux';
import { change } from '@/features/programSlice';

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

  const dispatch = useDispatch()

  const router = useRouter();

  function goBack() {
    router.back()
  }

  return (
    <div className={styles.products}>
      <PTag variant='primary' text="Avaliable" />
      <H1Tag text='Products' />
      <PTag variant='secondary' text="Click on a product to proceed" />
      <div className={styles.productList}>
        {products.map((product)=>{

          function selectProduct() {
            dispatch(change(product.program))
            router.push("/start");
          }

          return (
            <Product key={product.productid} name={product.name} description={product.description} price={product.price} onClick={selectProduct} />
          );
        })}
      </div>
      <Button variant="secondary" label="Back" onClick={goBack} />
    </div>
  )
}