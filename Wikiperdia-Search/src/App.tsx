import React, { useState } from "react";

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

interface SearchHistory {
  term: string;
  time: string;
}

const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [history, setHistory] = useState<SearchHistory[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search.trim() === "") return;

    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*`
      );

      const data = await response.json();

      // Format API data
      const formattedResults: SearchResult[] = data[1].map(
        (title: string, index: number) => ({
          title,
          description: data[2][index],
          url: data[3][index],
        })
      );

      setResults(formattedResults);

      // Create history item
      const newHistory: SearchHistory = {
        term: search,
        time: new Date().toLocaleString(),
      };

      // Remove duplicate term 
      const updatedHistory = history.filter(
        (item) => item.term.toLowerCase() !== search.toLowerCase()
      );

      // Add latest search
      updatedHistory.push(newHistory);

      // Keep only last 5 searches
      setHistory(updatedHistory.slice(-5));

      // Clear input
      setSearch("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Wikipedia Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Wikipedia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "70%",
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
          }}
        >
          Search
        </button>
      </form>

      <hr />

      <h2>Search Results</h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))
      )}

      <hr />

      <h2>Last 5 Searches</h2>

      {history.length === 0 ? (
        <p>No searches yet.</p>
      ) : (
        <ul>
          {history
            .slice()
            .reverse()
            .map((item, index) => (
              <li key={index}>
                <strong>{item.term}</strong> — {item.time}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default App;