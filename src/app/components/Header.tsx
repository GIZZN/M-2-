'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        M
      </Link>
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          главная
        </Link>
        <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          о нас
        </Link>
        <Link href="/projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          проекты
        </Link>
        <Link href="/production" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          производство
        </Link>
        <Link href="/contacts" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
          контакты
        </Link>
      </nav>
    </header>
  );
} 