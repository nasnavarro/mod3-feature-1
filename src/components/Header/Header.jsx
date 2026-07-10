import styles from './Header.module.css'
// import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Espacio Valdecantos Store" className={styles.logo} />
      <nav className={styles.nav}>
        {/* TODO: sustituir por NavLink en el paso 5 (routing)
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          Catálogo
        </NavLink>
        */}
        <span className={styles.navLink}>Home</span>
        <span className={styles.navLink}>Catálogo</span>
      </nav>
    </header>
  )
}

export default Header
