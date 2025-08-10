export default function Home() {
  return (
    <main style={{padding: 24, fontFamily: 'system-ui'}}>
      <h1>TOEFL Aalya</h1>
      <p>Choose a section to start training:</p>
      <ul>
        <li><a href="/reading">Reading</a></li>
        <li><a href="/listening">Listening</a></li>
        <li><a href="/speaking">Speaking</a></li>
        <li><a href="/writing">Writing</a></li>
        <li><a href="/mock-exam">Full Mock Exam</a></li>
        <li><a href="/vocab">Vocabulary</a></li>
      </ul>
    </main>
  );
}
