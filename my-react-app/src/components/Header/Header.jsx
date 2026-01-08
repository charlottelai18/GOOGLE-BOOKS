import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Book Finder</h1>
      <p className={styles.subtitle}>
        Discover millions of books from Google's vast library. Search by title or author to find your next great read.
      </p>
    </header>
  );
}
