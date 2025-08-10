import Link from "next/link";
import AalyahGuide from "@/components/AalyahGuide";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <AalyahGuide variant="welcome" />
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/mock-exam" className="card hover:shadow-lg transition">
          <h2 className="font-semibold mb-2">Full TOEFL Mock (Exam Mode)</h2>
          <p>Reading → Listening → Speaking → Writing with official timers. Answers at the end.</p>
        </Link>
        <Link href="/vocab" className="card hover:shadow-lg transition">
          <h2 className="font-semibold mb-2">Vocabulary (2-week plan)</h2>
          <p>57 high-yield TOEFL words in 3 packs with spaced repetition.</p>
        </Link>
        <Link href="/reading" className="card hover:shadow-lg transition">
          <h2 className="font-semibold mb-2">Reading Practice</h2>
          <p>Exam-like passages with explanations revealed after submission.</p>
        </Link>
        <Link href="/listening" className="card hover:shadow-lg transition">
          <h2 className="font-semibold mb-2">Listening Practice</h2>
          <p>Single-play audios, question types tracked in your stats.</p>
        </Link>
      </div>
    </main>
  );
}
