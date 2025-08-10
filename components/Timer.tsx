import React from 'react';

export default function Timer({ seconds=60, onEnd }:{
  seconds?: number; onEnd?: ()=>void;
}) {
  const [time, setTime] = React.useState(seconds);
  React.useEffect(() => {
    if (time <= 0) { onEnd?.(); return; }
    const id = setTimeout(() => setTime(t => t-1), 1000);
    return () => clearTimeout(id);
  }, [time, onEnd]);
  const mm = String(Math.floor(time/60)).padStart(2,'0');
  const ss = String(time%60).padStart(2,'0');
  return <div aria-live="polite">⏱ {mm}:{ss}</div>;
}
