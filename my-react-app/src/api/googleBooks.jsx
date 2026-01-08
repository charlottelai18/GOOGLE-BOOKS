
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const normaliseBook = (item) => {
  const info = item.volumeInfo ?? {};
  return {
    id: item.id,
    title: info.title ?? "Untitled",
    authors: info.authors ?? ["Unknown author"],
    description: info.description ?? "No description available.",
    thumbnail: info.imageLinks?.thumbnail ?? null,
  };
};

export const searchBooks = async ({ query, maxResults = 12 }) => {
  const res = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=${maxResults}`
  );

  if (!res.ok) throw new Error("Failed to fetch books.");

  const data = await res.json();
  const items = data.items ?? [];

  return { books: items.map(normaliseBook), totalItems: data.totalItems ?? 0 };
};