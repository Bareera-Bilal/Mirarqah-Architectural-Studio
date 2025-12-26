import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.container}>





        {/* Logo / Brand */}
        <div className={styles.brand}>
          <span className={styles.brandName}>MIRARQAH, The Architechtural Studio</span>
          <span className={styles.brandSub}>Designing Spaces, Reflecting Dreams</span>
        </div>

        {/* End of Logo / Brand */}






        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact" className={styles.cta}>
            Contact
          </a>
        </nav>

        {/* End of Navigation */}






      </div>

    </header>
  );
}
