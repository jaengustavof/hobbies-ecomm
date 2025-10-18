import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={`container ${styles["hero__content"]}`}>
        <h1 className={styles["hero__title"]}>Rediscover your time.</h1>
        <p className={styles["hero__subtitle"]}>
          Reconnect with yourself through what you love to do. Hobbies aren’t a
          luxury — they’re a way to nurture your mind and your well-being.
        </p>
        <button className={styles["hero__cta"]}>Explore hobbies</button>
      </div>
    </section>
  );
}
