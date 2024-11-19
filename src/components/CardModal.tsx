import { Dialog, DialogPanel } from "@headlessui/react";
import { CardModalProps } from "../types/GameTypes";
import useGameStore from "../store/GameStore";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

function CardModal({ isOpen, setIsOpen }: CardModalProps) {
  gsap.registerPlugin(useGSAP);
  const modal = useRef<HTMLDivElement>(null);
  // const showStatsTl = useRef<gsap.core.Timeline>();
  const { contextSafe } = useGSAP({ scope: modal });

  const onStatConfirmClick = contextSafe(() => {
    const showStatsTl = gsap.timeline({
      paused: true,
    });
    showStatsTl
      .to("#modal-title, #confirm-button", {
        display: "none",
      })
      .to("#opponent-card", {
        display: "block",
        position: "absolute",
        top: "-130px",
        scale: 0.5,
      })
      .to("#player-card", {
        scale: 0.5,
        position: "absolute",
        bottom: "-130px",
      })
      .to("#stats-container", {
        display: "flex",
      });

    showStatsTl.play();
    showStatsTl.then(() => {
      setTimeout(() => {
        close();
      }, 4000);
    });
  });
  const {
    playerSelectedStat,
    playerActiveCard,
    addToPlayerHand,
    addToOpponentHand,
    setOpponentSelectedStat,
    opponentActiveCard,
    opponentSelectedStat,
  } = useGameStore();

  const [playerResult, setPlayerResult] = useState("");

  function close() {
    setIsOpen(false);
  }
  function confirmStats() {
    if (playerSelectedStat.name === null) {
      alert("Please select a stat");
      return;
    }
    compareStats();
  }

  function compareStats() {
    const opponentCorrespondingStat = opponentActiveCard.stats.find(
      (stat) => stat.name === playerSelectedStat.name,
    );
    if (opponentCorrespondingStat?.name && opponentCorrespondingStat?.value) {
      setOpponentSelectedStat(
        opponentCorrespondingStat.name,
        opponentCorrespondingStat.value,
      );
    }
    console.log(opponentCorrespondingStat);
    console.log("Opp Stat", opponentCorrespondingStat);

    if (playerSelectedStat && opponentCorrespondingStat) {
      if (playerSelectedStat.value > opponentCorrespondingStat.value) {
        addToPlayerHand();

        setPlayerResult("You Win!");
      } else if (playerSelectedStat.value < opponentCorrespondingStat.value) {
        addToOpponentHand();

        setPlayerResult("You Lose!");
      } else {
        setPlayerResult("Draw");
      }
    }
  }
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        ref={modal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] relative flex min-h-[85vh] w-full max-w-md flex-col items-center justify-center rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <div
                id="modal-title"
                className="mb-4 text-3xl font-bold text-white"
              >
                Choose your Stat
              </div>
              {/* Full Size Card */}
              <div id="opponent-card" className="hidden">
                <Card cardData={opponentActiveCard} isFullSize={true} />
              </div>
              <div
                id="stats-container"
                className="flex hidden flex-col justify-center text-xl font-semibold text-white"
              >
                <span className="mb-2 text-center uppercase">
                  {playerSelectedStat.name}
                </span>
                <span className="mb-12 text-center uppercase">
                  {playerResult}
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative grid size-20 place-items-center rounded-full bg-blue-600 p-4">
                    <span className="absolute -top-10">You</span>
                    <span>{playerSelectedStat.value}</span>
                  </div>
                  <span>VS</span>
                  <div className="relative grid size-20 place-items-center rounded-full bg-red-900 p-4">
                    <span className="absolute -top-10">Opponent</span>
                    <span>{opponentSelectedStat.value}</span>
                  </div>
                </div>
              </div>
              <div id="player-card">
                <Card cardData={playerActiveCard} isFullSize={true} />
              </div>
              <button
                id="confirm-button"
                className="mt-3 rounded-3xl bg-[#2f67f3] px-5 py-3 text-white"
                onClick={() => {
                  onStatConfirmClick();
                  confirmStats();
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
