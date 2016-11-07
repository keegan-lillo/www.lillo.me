import React from 'react';
import { Link } from 'react-router';
import styles from './Header.scss';
import logoSVG from '../../content/assets/images/logo.svg';

const Header = () => (
  <header className={ styles.header }>
    <Link to="/" className={ styles.logo } dangerouslySetInnerHTML={{ __html: logoSVG }}></Link>
    <nav className={ styles.nav }>
      <div className={''} >
        <Link className={ styles.link } to="/who">Who</Link>
        <Link className={ styles.link } to="/what">What</Link>
        <Link className={ styles.link } to="/where">Where</Link>
      </div>
    </nav>
  </header>
);

Header.contextTypes = {};

export default Header;
