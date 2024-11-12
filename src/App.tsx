import GameBoard from "./components/GameBoard";
import Heading from "./components/Heading";

function App() {
    return (
        <>
            <div className="bg-[#bdd4ea]">
                <Heading />
                <main className="">
                    <GameBoard />
                </main>
            </div>
        </>
    );
}

export default App;
