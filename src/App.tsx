import GameBoard from "./components/GameBoard";
import Heading from "./components/Heading";

function App() {
    return (
        <>
            <div className="bg-[#bdd4ea]">
                <header className="w-full flex justify-center pt-10">
                    <Heading />
                </header>
                <main className="">
                    <GameBoard />
                </main>
            </div>
        </>
    );
}

export default App;
