import {useEffect, useState} from "react";

export default function Timer({ seconds = 60, onFinish }) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) { onFinish && onFinish(); return; }
    const t = setTimeout(() => setLeft(left - 1), 1000);
    return () => clearTimeout(t);
  }, [left, onFinish]);
  const m = String(Math.floor(left/60)).padStart(2,"0");
  const s = String(left%60).padStart(2,"0");
  return <span aria-label="timer">{m}:{s}</span>;
}
