import React from 'react';
import { Link } from 'react-router';
import styles from './Header.scss';

const Header = () => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link className={ styles.link } to="/">Home</Link>
      </div>
    </nav>
  </header>
);

Header.contextTypes = {};

export default Header;
