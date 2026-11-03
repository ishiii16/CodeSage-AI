import { useEffect, useState } from "react";
import { getHealth } from "./api";

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>CodeSage AI</h1>
      {error && <p style={{ color: "crimson" }}>Backend error: {error}</p>}
      {!error && !health && <p>Connecting to backend...</p>}
      {health && <p>Backend status: {health.status}</p>}
    </div>
  );
}