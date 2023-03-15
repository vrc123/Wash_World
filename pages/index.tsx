import styles from '@/styles/pages/Welcome.module.css';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

export default function Welcome() {
  const router = useRouter();

  function startProcess() {
    router.push('/locations');
  }

  return (
    <div className={styles.welcome}>
      <h1>
        <span className="animation">Welcome</span>
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus reiciendis illo nam, labore perspiciatis, totam itaque odit temporibus atque consequatur hic at perferendis expedita nemo cumque facere voluptates dignissimos consequuntur!
      </p>
      <Button variant="primary" label="Start" onClick={startProcess} />
    </div>
  );
}
