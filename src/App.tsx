import GamePage from "./pages/GamePage";
import { Routes, Route } from "react-router";
import StartPage from "./pages/StartPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<StartPage />}></Route>
      <Route path="/game" element={<GamePage />}></Route>
      <Route path="/results" element={<ResultPage />}></Route>
    </Routes>
  );
}

export default App;
