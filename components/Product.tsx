import styles from '@/styles/components/Product.module.css'

interface ProductProps {
  name: string,
  description: string,
  price: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export default function Product({ name, description, price, onClick }: ProductProps) {
  return (
    <div className={styles.productDefault} onClick={onClick}>
      <div className={styles.productInfo}>
        {name}
        <span>{description}</span>
      </div>
      <div className={styles.productPrice}>
        {price},-
      </div> 
    </div>
  )
}