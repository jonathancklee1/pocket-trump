import GamePage from "./pages/GamePage";
import { Routes, Route } from "react-router";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<StartPage />}></Route>
      <Route path="/game" element={<GamePage />}></Route>
      <Route path="/result" element={<GamePage />}></Route>
    </Routes>
  );
}

export default App;
