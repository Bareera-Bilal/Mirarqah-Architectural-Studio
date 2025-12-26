"use client";

import styles from "./SideBar.module.css";

export default function SideBar() {
  return (

    <aside className={styles.sidebar}>

      {/* Logo */}

      <div className={styles.logo}>
        <span><img src="MAS-LOGO.jpg" alt="M" /></span>
      </div>

      {/* End of Logo */}





      {/* Coordinates */}

      <div className={styles.coordinates}>
        {/* <button className={styles.coordBtn}>ARCH</button> */}
        <button className={styles.coordBtn}>PLANNING</button>
        <button className={styles.coordBtn}>INTERIOR</button>
        <button className={styles.coordBtn}>3D VISUALS</button>
        <button className={styles.coordBtn}>EXTERIOR</button>

      </div>

      {/* End of Coordinates */}





      {/* Footer */}

      <div className={styles.footer}>Srinagar · India</div>

      {/* End of Footer */}

    </aside>



  );
}
