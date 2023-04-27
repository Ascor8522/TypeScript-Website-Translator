import { useState } from 'preact/hooks';
import styles from './menubar.module.scss';

export default function MenuBar() {
  const [selectedPage, setSelectedPage] = useState('Dashboard');

  const pages = ['Dashboard', 'Teams', 'Reports', 'Search Strings'];

  return (
    <div className={styles["menu-bar"]}>
      <div className={styles["logo"]}>
        <span>transifex</span>
      </div>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles['menu-item']} ${selectedPage === page ? styles.active : ''}`}
          onClick={() => setSelectedPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
