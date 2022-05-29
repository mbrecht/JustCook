import styles from '../../styles/components/Layout.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.title_container}>
          <Image
            src="/butternut-squash.png"
            layout="fixed"
            width={64}
            height={64}
          />
          <h1>Butternut</h1>
        </div>
      </Link>
    </header>
  );
}
