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
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm11 3-6.1-6.1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>

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