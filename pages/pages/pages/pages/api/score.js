export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  const { kind } = req.body || {};
  const base = kind === "speaking" ? 18 : kind === "writing" ? 17 : 20;
  const noise = Math.floor(Math.random()*4)-1; // -1..+2
  const score = Math.max(0, Math.min(30, base + noise));
  const feedback = `Auto feedback for ${kind || "task"}: focus on clarity, structure, and evidence.`;
  res.status(200).json({ score, feedback });
}
