export default function AalyahGuide({ variant = "welcome", score }) {
  const messages = {
    welcome: "Hi! I’m Aalyah, your TOEFL coach. I’ll guide you every step of the way. Let’s get started!",
    reading: "Read actively. Focus on main ideas first, details later. You’ve got this.",
    listening: "One listen only. Note key ideas and transitions.",
    speaking: "Use your template, stay calm, speak clearly and directly.",
    writing: "Connect reading points with lecture counterpoints. Be concise and organized.",
    result: score != null ? `Nice work! Estimated score: ${score}. We’ll push it higher next time.` : "Great job! Let’s review your results."
  };
  return (
    <div className="card border border-green-200">
      <div className="font-semibold text-toefl-primary mb-1">Aalyah</div>
      <p>{messages[variant] || messages.welcome}</p>
    </div>
  );
}
