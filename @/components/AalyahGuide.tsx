import React from 'react';

export default function AalyahGuide({
  title = "Welcome to AALYAH",
  children,
}: { title?: string; children?: React.ReactNode }) {
  return (
    <aside style={{border:"1px solid #e5e7eb", padding:16, borderRadius:12}}>
      <h3 style={{margin:0}}>{title}</h3>
      <p style={{marginTop:8}}>
        I’m Aalyah — your TOEFL coach. I’ll guide you through each task, timing,
        tips, and feedback.
      </p>
      {children}
    </aside>
  );
}
