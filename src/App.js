import { useEffect, useState } from "react";
import { AuthorCard } from "./AuthorCard";
import "./styles.css";
import useContentful from "./useContentful";

export default function App() {
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful();

  useEffect(() => {
    getAuthors().then((res) => setAuthors(res));
  }, []);

  return (
    <div className="App">
      {authors.map((author, i) => (
        <AuthorCard key={i} author={author} />
      ))}
    </div>
  );
}
