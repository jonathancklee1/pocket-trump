import GamePage from "./pages/GamePage";
import { Routes, Route } from "react-router";
import StartPage from "./pages/StartPage";
import ResultPage from "./pages/ResultPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<StartPage />}></Route>
      <Route path="/game" element={<GamePage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
      <Route path="/results" element={<ResultPage />}></Route>
    </Routes>
  );
}

export default App;
