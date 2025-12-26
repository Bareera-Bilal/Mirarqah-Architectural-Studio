"use client";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <h2>Our Services</h2>
        <p>
          From initial concept to final execution, we provide comprehensive
          architectural services designed to exceed expectations.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>✏️</div>
          <h3>Architectural Design</h3>
          <p>
            Comprehensive design solutions from concept to completion,
            tailored to your unique vision.
          </p>
        </div>

        <div className={`${styles.card} ${styles.active}`}>
          <div className={styles.icon}>🏙️</div>
          <h3>Urban Planning</h3>
          <p>
            Thoughtful urban development that creates vibrant, sustainable
            communities.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🛋️</div>
          <h3>Interior Design</h3>
          <p>
            Luxurious interior spaces that blend aesthetics with
            functionality.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🌲</div>
          <h3>Landscape Architecture</h3>
          <p>
            Harmonious outdoor environments that connect architecture
            with nature.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>📐</div>
          <h3>Project Management</h3>
          <p>
            End-to-end project oversight ensuring quality, timeline,
            and budget adherence.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>💡</div>
          <h3>Design Consultation</h3>
          <p>
            Expert guidance to transform your architectural dreams
            into reality.
          </p>
        </div>
      </div>
    </section>
  );
}
