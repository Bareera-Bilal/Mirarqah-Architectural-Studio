"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <span className={styles.tag}>ABOUT US</span>

        <h2>
          Designing the <br />
          <span>Future of</span> <br />
          <span className={styles.gold}>Space</span>
        </h2>

        <p>
          Founded on the principles of innovation and sustainability, Mirarqah
          Architectural Studio has spent over two decades pushing the boundaries
          of contemporary design. Our multidisciplinary team combines artistic
          vision with technical precision to create spaces that resonate with
          purpose and beauty.
        </p>

        <p>
          We believe architecture should tell a story — one that honors heritage
          while embracing the future.
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>150+</h3>
            <span>PROJECTS COMPLETED</span>
          </div>
          <div className={styles.card}>
            <h3>45</h3>
            <span>EXPERT ARCHITECTS</span>
          </div>
          <div className={styles.card}>
            <h3>32</h3>
            <span>DESIGN AWARDS</span>
          </div>
          <div className={styles.card}>
            <h3>18</h3>
            <span>COUNTRIES</span>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.valueCard}>
            <h4>Vision</h4>
            <p>
              To redefine spatial experiences through sustainable innovation.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h4>Mission</h4>
            <p>
              Creating timeless architecture that inspires generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
