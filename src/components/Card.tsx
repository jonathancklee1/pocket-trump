import { useState } from "react";
import useGameStore from "../store/GameStore";
import { CardProps } from "../types/GameTypes";
import Pokeball from "../assets/Pokeball";

function Card({ cardData, onClickEvent, isFullSize, isFlipped }: CardProps) {
  console.log(" card data", cardData);
  const { setPlayerSelectedStat } = useGameStore();
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <>
      {cardData ? (
        <div
          onClick={onClickEvent}
          className={`card ${!isFullSize && "scale-[50%]"} ${isFlipped && "flipped"}`}
        >
          {/* Inner */}
          <div className="card-inner z-10 h-full w-full max-w-[320px] shrink-0 rounded-xl border-[12px] border-[#FFDE00] bg-[#81affe] px-3 py-2 text-black">
            {/* Front */}
            <div className="card-front inset-0">
              <p className="mb-1 text-2xl font-bold capitalize md:text-4xl">
                {cardData?.name ?? "Loading..."}
              </p>

              <div className="mb-2 flex aspect-video w-full min-w-36 items-center justify-center overflow-hidden border-4 border-gray-400 bg-slate-50 bg-[url('https://picsum.photos/id/15/2500/1667')] bg-cover">
                <picture className="h-full">
                  <img
                    src={cardData?.sprite}
                    alt=""
                    className="h-full w-full"
                  />
                </picture>
              </div>

              <div className="bg-[#a3c5ff] px-3 py-3">
                <div className="mb-2 flex gap-2">
                  {cardData?.types?.map((type, index) => {
                    return (
                      <span
                        className="cursor-pointer rounded-3xl bg-red-700 px-3 py-1 text-sm font-semibold uppercase text-white shadow-2xl"
                        key={type + index}
                      >
                        {type ?? "Loading..."}
                      </span>
                    );
                  })}
                </div>
                {cardData?.stats?.map((stat, index) => {
                  return (
                    <button
                      className={`mb-2 flex w-full cursor-pointer items-center justify-between rounded-xl border border-white px-3 py-2 text-sm shadow-2xl last-of-type:mb-0 hover:shadow-inner ${
                        selectedButton === index && "bg-blue-600 text-white"
                      }`}
                      key={stat?.name}
                      type="button"
                      onClick={
                        isFullSize
                          ? () => {
                              setSelectedButton(index);
                              setPlayerSelectedStat(stat?.name, stat?.value);
                            }
                          : undefined
                      }
                    >
                      <span className="font-semibold uppercase">
                        {stat?.name}:
                      </span>
                      <span className="font-semibold uppercase">
                        {stat?.value ?? "Loading..."}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Back */}
            <div className="card-back absolute flex items-center justify-center bg-[#3b4cca]">
              <Pokeball />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-[180px] animate-spin items-center justify-center">
          <Pokeball />
        </div>
      )}
    </>
  );
}

export default Card;
