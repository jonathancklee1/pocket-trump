import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";

async function getData(url: string) {
    const res = await fetch(url);
    return await res.json();
}
export default function useRandomPokemonArray(count: number, max: number) {
    console.log("useRandomPokemonArray");
    const [randomIntArray, setRandomIntArray] = useState([] as number[]);

    useEffect(() => {
        const newArray = getRandomIntArray(count, max);
        setRandomIntArray(newArray);
        console.log(newArray, "newArray set");
    }, []);

    const queryResults = useQueries({
        queries: randomIntArray?.map((id) => ({
            queryKey: ["pokemon-array", id],
            queryFn: () => getData(`https://pokeapi.co/api/v2/pokemon/${id}`),
        })),
        combine: (results) => {
            return {
                data: results.map((result) => result.data),
                pending: results.some((result) => result.isPending),
            };
        },
    });

    // const data = queryResults.map((result) => result?.data);
    // console.log(queryResults);

    if (!queryResults.pending) {
        return queryResults;
    } else {
        return { data: [], pending: true };
    }
}

function getRandomIntArray(count: number, max: number) {
    const randomIntArray = [];
    for (let i = 0; i < count; i++) {
        randomIntArray.push(Math.floor(Math.random() * max));
    }
    return randomIntArray;
}
