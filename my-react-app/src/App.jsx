import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import BookGrid from "./components/BookGrid/BookGrid";
import { searchBooks } from "./api/googleBooks.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setHasSearched(true);
    setError("");
    setIsLoading(true);

    try {
      const { books } = await searchBooks({ query, maxResults: 12 });
      setBooks(books);
    } catch (e) {
      setBooks([]);
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} isLoading={isLoading} />

      {error && <p style={{ textAlign: "center", color: "crimson" }}>{error}</p>}

      {hasSearched && !isLoading && books.length === 0 && !error && (
        <p style={{ textAlign: "center" }}>No results found.</p>
      )}

      <BookGrid books={books} isLoading={isLoading} />
    </>
  );
}

export default App;
