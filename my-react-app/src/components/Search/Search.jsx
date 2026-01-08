import { useState } from "react";
import styles from "./Search.module.scss";

export default function Search({ onSearch, isLoading }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for books by title, author, or keyword..."
        />

        <button className={styles.button} type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}