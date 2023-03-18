import styles from '@/styles/components/H1Tag.module.css'

interface H1TagProps {
  text: string,
}

export default function PTag({ text }: H1TagProps) {
  return (
    <p className={styles.h1TagDefault}>
      {text}
    </p>
  )
}