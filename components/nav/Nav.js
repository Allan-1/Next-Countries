import React from 'react';
import styles from './nav.module.css';
import { BiMoon } from 'react-icons/bi';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.brand}>Where in the world?</div>
      <div className={styles.mode}>
        <BiMoon /> Dark mode
      </div>
    </div>
  );
}

export default Nav;
