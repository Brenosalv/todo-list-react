import styles from './header.module.css';

import Logo from '../../assets/logo.svg';

export const Header = () => (
  <header className={styles.header}>
    <img src={Logo} alt="To-do list Logo" />
  </header>
);
