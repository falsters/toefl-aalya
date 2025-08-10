import { useEffect, useState } from "react";
export default function Timer({ seconds, onDone }) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) { onDone?.(); return; }
    const t = setTimeout(()=> setLeft(l => l-1), 1000);
    return () => clearTimeout(t);
  }, [left, onDone]);
  const mm = String(Math.floor(left/60)).padStart(2,"0");
  const ss = String(left%60).padStart(2,"0");
  return <div className="text-lg font-mono px-3 py-2 rounded bg-toefl-secondary/10 text-toefl-primary">{mm}:{ss}</div>;
}
