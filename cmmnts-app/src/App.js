import "./App.css";

import CommentList from "./components/CommentList";

function App() {
  const comment1 = { comment: "good book", name: "balaram" };
  const comment2 = { comment: "bad book", name: "sai balaram" };
  const comments = [comment1, comment2];
  return <CommentList comments={comments} />;
}

export default App;
