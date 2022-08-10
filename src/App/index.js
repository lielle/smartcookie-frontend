import "./app.css";
import QuizedPlayer from "../QuizedPlayer";

const App = () => {
  const url = "videos/addition.mp4";
  const showQuizAfterSeconds = 64;
  const quiz = {
    question: "3 + 2 = ?",
    choices: [5, 3, 8, 4],
    answer: 5,
  }

  return (
    <div className="app">
      <QuizedPlayer url={url} quiz={quiz} showQuizAfterSeconds={showQuizAfterSeconds}/>
    </div>
  );
};

export default App;
