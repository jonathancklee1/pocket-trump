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
  const { contextSafe } = useGSAP({ scope: modal });
  const {
    playerSelectedStat,
    playerActiveCard,
    addToPlayerHand,
    addToOpponentHand,
    setOpponentSelectedStat,
    opponentActiveCard,
    opponentSelectedStat,
    setPlayerActiveCard,
    setOpponentActiveCard,
  } = useGameStore();

  const [playerResult, setPlayerResult] = useState("");

  const onStatConfirmClick = contextSafe(() => {
    const showStatsTl = gsap.timeline({
      paused: true,
    });
    showStatsTl
      .to(".card-modal-panel", {
        height: "100vh",
        width: "100vw",
        duration: 0.6,
      })
      .to("#modal-title, #confirm-button", {
        display: "none",
      })
      .to("#player-card", {
        scale: 0.5,
        position: "absolute",
        bottom: "16px",
        transformOrigin: "bottom",

        ease: "power2",
        duration: 0.5,
      })
      .to("#opponent-card", {
        display: "block",
        position: "absolute",
        top: "16px",
        scale: 0.5,
        transformOrigin: "top",
        ease: "power2",
        duration: 0.5,
      })
      .to("#opponent-card > .card > .card-inner", {
        rotateY: 0,
        ease: "linear",
        duration: 0.75,
      })
      .to("#stats-container", {
        display: "flex",
        ease: "power2",
        duration: 0.75,
        opacity: 1,
      })
      .fromTo(
        "#battle-type-text",
        { translateX: "-200px", ease: "ease", duration: 0.75 },
        {
          display: "block",
          ease: "ease",
          duration: 0.75,
          opacity: 1,
          translateX: 0,
        },
      )
      .to("#result-stats", {
        display: "flex",
        ease: "ease",
        duration: 0.5,
        opacity: 1,
      })
      .from("#player-result", {
        translateX: "-100%",
        ease: "ease",
        duration: 0.5,
      })
      .from("#opponent-result", {
        translateX: "100%",
        ease: "ease",
        duration: 0.5,
      })
      .to("#battle-type-text", {
        display: "block",
        ease: "ease",
        duration: 0.5,
        opacity: 0,
      })
      .to("#player-result-text", {
        display: "block",
        ease: "ease",
        duration: 0.5,
        opacity: 1,
      });

    showStatsTl.play();
    showStatsTl.then(() => {
      setTimeout(() => {
        close();
        setPlayerActiveCard();
        setOpponentActiveCard();
      }, 9999999);
    });
  });

  function close() {
    setIsOpen(false);
  }
  function confirmStats() {
    if (playerSelectedStat.name === null) {
      alert("Please select a stat");
      return;
    }
    compareStats();
    onStatConfirmClick();
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
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="card-modal-panel data-[closed]:transform-[scale(95%)] relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-white/5 py-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <div
                id="modal-title"
                className="mb-4 text-3xl font-bold text-white"
              >
                Choose your Stat
              </div>
              {/* Full Size Card */}
              <div id="opponent-card" className="opponent-card hidden">
                <Card
                  cardData={opponentActiveCard}
                  isFullSize={true}
                  isFlipped
                />
              </div>
              <div
                id="stats-container"
                className="relative z-10 flex hidden w-full flex-col justify-center bg-[#8fafff] py-4 text-xl font-semibold text-white opacity-0"
              >
                <span
                  id="battle-type-text"
                  className="mb-4 hidden text-center text-2xl uppercase opacity-0"
                >
                  {playerSelectedStat.name} battle
                </span>
                <span
                  id="player-result-text"
                  className="absolute right-0 top-3 mb-4 hidden w-full text-center text-4xl uppercase opacity-0"
                >
                  {playerResult}
                </span>
                <div
                  id="result-stats"
                  className="relative flex hidden items-center justify-center opacity-0"
                >
                  <div
                    className="left-result-path relative grid w-full place-items-center bg-blue-600 p-4 text-white"
                    id="player-result"
                  >
                    <span className="text-3xl">{playerSelectedStat.value}</span>
                    <span className="absolute left-2 top-2 text-xs text-white">
                      You
                    </span>
                  </div>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
                    VS
                  </span>
                  <div
                    className="right-result-path relative grid w-full place-items-center bg-red-600 p-4 text-white"
                    id="opponent-result"
                  >
                    <span className="text-3xl">
                      {opponentSelectedStat.value}
                    </span>
                    <span className="absolute bottom-2 right-2 text-xs text-white">
                      Opponent
                    </span>
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
