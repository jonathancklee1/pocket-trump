import { CardProps } from "../types/GameTypes";

function Card({ cardData }: CardProps) {
    console.log(cardData);
    return (
        <div className=" md:w-[300px] aspect-[63/88] px-3 py-2 bg-[#7D78A3] text-black rounded-xl border-8 border-[#FFDE00]">
            <p className="text-4xl font-bold capitalize mb-3">
                {cardData?.name}
            </p>

            <div className="bg-slate-50">
                <picture>
                    <img
                        src={cardData?.sprites?.front_default}
                        alt=""
                        className="w-full mb-5"
                    />
                </picture>
            </div>
            {cardData?.stats?.map((stat) => {
                return (
                    <div
                        className="text-xl mb-4 flex justify-between"
                        key={stat.stat.name}
                    >
                        <span className="uppercase font-semibold">
                            {stat.stat.name}:{" "}
                        </span>
                        <span className="uppercase font-semibold">
                            {stat.base_stat}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
