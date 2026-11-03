const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:8000";

export async function getHealth() {
  const response = await fetch(`${API_BASE}/api/health`);
  if (!response.ok) {
    throw new Error(`Backend returned HTTP ${response.status}`);
  }
  return response.json();
}