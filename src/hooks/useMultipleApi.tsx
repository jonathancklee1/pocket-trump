import { useQueries } from "@tanstack/react-query";

async function getData(url: string) {
    const res = await fetch(url);
    return await res.json();
}
export default function useMultipleApi(array: number[]) {
    const queryResults = useQueries({
        queries: array?.map((id) => ({
            queryKey: ["pokemon-array", id],
            queryFn: () => getData(`https://pokeapi.co/api/v2/pokemon/${id}`),
        })),
    });

    const data = queryResults.map((result) => result?.data);
    console.log(data);
    return data;
}
