import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        Выберите заведение из списка в левой части экрана чтобы увидеть отзывы и
        их тональность
      </div>
    </main>
  );
}
