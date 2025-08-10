import { useState } from "react";
import Timer from "@/components/Timer";
import AalyahGuide from "@/components/AalyahGuide";

export default function MockExam() {
  const [stage, setStage] = useState("reading"); // reading -> listening -> speaking -> writing -> review

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">TOEFL Mock – Exam Mode</h1>
        {stage==="reading" && <Timer seconds={20*60} onDone={()=>setStage("listening")} />}
        {stage==="listening" && <Timer seconds={41*60} onDone={()=>setStage("speaking")} />}
        {stage==="speaking" && <Timer seconds={17*60} onDone={()=>setStage("writing")} />}
        {stage==="writing" && <Timer seconds={50*60} onDone={()=>setStage("review")} />}
      </div>

      <AalyahGuide variant={stage} />

      {stage==="reading" && (
        <section className="card">
          <h2 className="font-semibold mb-2">Reading</h2>
          <p>Exam-like passages will be shown here. (Placeholder) Answers are revealed at the end.</p>
          <button className="btn mt-3" onClick={()=>setStage("listening")}>Skip to Listening</button>
        </section>
      )}
      {stage==="listening" && (
        <section className="card">
          <h2 className="font-semibold mb-2">Listening</h2>
          <p>Audio player (single play) + questions. (Placeholder)</p>
          <button className="btn mt-3" onClick={()=>setStage("speaking")}>Continue to Speaking</button>
        </section>
      )}
      {stage==="speaking" && (
        <section className="card">
          <h2 className="font-semibold mb-2">Speaking</h2>
          <p>Q1–Q4 timed tasks with recording. (Placeholder)</p>
          <button className="btn mt-3" onClick={()=>setStage("writing")}>Continue to Writing</button>
        </section>
      )}
      {stage==="writing" && (
        <section className="card">
          <h2 className="font-semibold mb-2">Writing</h2>
          <p>Q1 Integrated + Q2 Academic Discussion with AI scoring. (Placeholder)</p>
          <button className="btn mt-3" onClick={()=>setStage("review")}>Finish</button>
        </section>
      )}
      {stage==="review" && (
        <section className="card">
          <h2 className="font-semibold mb-2">Review & Estimated Score</h2>
          <p>Your estimated score and explanations appear here. (Placeholder)</p>
          <AalyahGuide variant="result" score="Reading xx / Listening xx / Speaking xx / Writing xx → Total xxx/120" />
        </section>
      )}
    </main>
  );
}
