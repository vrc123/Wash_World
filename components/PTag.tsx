import styles from '@/styles/components/PTag.module.css'

interface PTagProps {
  variant: "primary" | "secondary",
  text: string,
}

export default function PTag({ variant, text }: PTagProps) {
  return (
    <p className={`${styles.pTagDefault} ${styles[variant]}`}>
      {text}
    </p>
  )
}