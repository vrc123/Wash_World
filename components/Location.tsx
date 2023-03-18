import styles from '@/styles/components/Location.module.css'

interface LocationProps {
  status: "available" | "maintenance",
  name: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export default function Location({ status, name, onClick }: LocationProps) {
  return (
    <div className={`${styles.locationDefault} ${styles[status]}`} onClick={onClick}>
      {name}
    </div>
  )
}
