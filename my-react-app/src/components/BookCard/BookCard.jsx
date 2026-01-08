import styles from "./BookCard.module.scss";

export default function BookCard({ book }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {book.thumbnail ? (
          <img src={book.thumbnail} alt={book.title} loading="lazy" />
        ) : (
          <div className={styles.noImg}>No image</div>
        )}
      </div>

      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>{book.authors.join(", ")}</p>
      <p className={styles.desc}>{book.description}</p>
    </article>
  );
}
