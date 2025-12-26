"use client";


import styles from "./Main.module.css";

export default function Main() {
  return (


    <main className={styles.main}>

      {/* Background */}
      <div className={styles.background}>
        <img
          src="/Front.png"
          alt="Architecture"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.hero}>
        <img src="/Front.png" alt="Architecture" className={styles.bgImage} />
        <div className={styles.blurOverlay} />
        <div className={styles.textOverlay}>
          <h2>AWARD-WINNING DESIGN</h2>
          <h1>Crafting Timeless Architecture</h1>
          <p>
            We transform visionary concepts into extraordinary spaces that inspire, endure,
            and elevate the human experience.
          </p>
          <div className={styles.buttons}>
            <button>VIEW OUR WORK</button>
            <button>OUR PHILOSOPHY</button>
          </div>
          {/* <div className={styles.scroll}>SCROLL ↓</div> */}
          <button className={styles.scroll} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}> SCROLL ↓ </button>
        </div>
      </div>




    </main>
  );
}
