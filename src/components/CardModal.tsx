import { Dialog, DialogPanel } from "@headlessui/react";
import { CardModalProps } from "../types/GameTypes";
import useGameStore from "../store/GameStore";
import Card from "./Card";

function CardModal({ isOpen, setIsOpen }: CardModalProps) {
  const {
    playerSelectedStat,
    playerActiveCard,
    addToPlayerHand,
    addToOpponentHand,
    setOpponentSelectedStat,
    opponentActiveCard,
  } = useGameStore();
  function close() {
    setIsOpen(false);
  }
  function compareStats() {
    console.log(playerSelectedStat);

    const opponentCorrespondingStat = opponentActiveCard.stats.find(
      (stat) => stat.name === playerSelectedStat.name,
    );

    setOpponentSelectedStat(
      opponentCorrespondingStat.name,
      opponentCorrespondingStat.value,
    );
    console.log(opponentCorrespondingStat);
    console.log("Opp Stat", opponentCorrespondingStat);
    if (playerSelectedStat.value > opponentCorrespondingStat.value) {
      addToPlayerHand();
      alert(
        "You Win!" +
          playerSelectedStat.value +
          "+" +
          opponentCorrespondingStat.value,
      );
    } else if (playerSelectedStat.value < opponentCorrespondingStat.value) {
      addToOpponentHand();
      alert(
        "You Lose!" +
          playerSelectedStat.value +
          "+" +
          opponentCorrespondingStat.value,
      );
    } else {
      alert("Draw");
    }
  }
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] flex w-full max-w-md flex-col items-center justify-center rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <div className="mb-4 text-3xl font-bold text-white">
                Choose your Stat
              </div>
              {/* Full Size Card */}
              <Card cardData={playerActiveCard} isFullSize={true} />
              <button
                className="mt-3 rounded-3xl bg-[#1647c5] px-5 py-3 text-white"
                onClick={() => {
                  if (playerSelectedStat.name === null) {
                    alert("Please select a stat");
                    return;
                  }
                  compareStats();

                  close();
                }}
              >
                Confirm Stat Choice
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default CardModal;
