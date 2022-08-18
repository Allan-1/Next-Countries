import React from 'react';
import Nav from '../nav/Nav';
import styles from './layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Nav />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
