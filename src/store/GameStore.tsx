import { create, SetState } from "zustand";
import { GameState, PokemonData } from "../types/GameTypes";

const useGameStore = create<GameState>()((set, get) => ({
    playerHand: [],
    opponentHand: [],
    playerActiveCard: {
        name: "",
        sprite: "",
        stats: [
            {
                name: "hp",
                value: 0,
            },
            {
                name: "attack",
                value: 0,
            },
            {
                name: "defense",
                value: 0,
            },
            {
                name: "special-attack",
                value: 0,
            },
            {
                name: "special-defense",
                value: 0,
            },
            {
                name: "speed",
                value: 0,
            },
        ],
    },
    opponentActiveCard: {
        name: "",
        sprite: "",
        stats: [
            {
                name: "hp",
                value: 0,
            },
            {
                name: "attack",
                value: 0,
            },
            {
                name: "defense",
                value: 0,
            },
            {
                name: "special-attack",
                value: 0,
            },
            {
                name: "special-defense",
                value: 0,
            },
            {
                name: "speed",
                value: 0,
            },
        ],
    },
    generatePlayerHand: (pokemonData: PokemonData) =>
        set(() => ({
            playerHand: pokemonData,
        })),
    generateOpponentHand: (pokemonData: PokemonData) =>
        set(() => ({
            opponentHand: pokemonData,
        })),
    setPlayerActiveCard: () =>
        set(() => ({
            playerActiveCard: get().playerHand[0],
        })),
    setOpponentActiveCard: () =>
        set(() => ({
            opponentActiveCard: get().opponentHand[0],
        })),
    addToPlayerHand: () => {
        if (get().playerHand.length === 0 || get().opponentHand.length === 0)
            return;
        const oldPlayerHand = [...get().playerHand];
        oldPlayerHand.shift();
        oldPlayerHand.push(get().playerActiveCard);
        oldPlayerHand.push(get().opponentActiveCard);
        const oldOpponentHand = [...get().opponentHand];
        oldOpponentHand.shift();
        set(() => ({
            playerHand: [...oldPlayerHand],
            playerActiveCard: oldPlayerHand[0],
            opponentHand: [...oldOpponentHand],
            opponentActiveCard: oldOpponentHand[0],
        }));
        console.log("playerhandAfter", get().playerHand);
    },
    addToOpponentHand: () => {
        if (get().playerHand.length === 0 || get().opponentHand.length === 0)
            return;
        const oldOpponentHand = [...get().opponentHand];
        oldOpponentHand.shift();
        oldOpponentHand.push(get().playerActiveCard);
        oldOpponentHand.push(get().opponentActiveCard);
        const oldPlayerhand = [...get().playerHand];
        oldOpponentHand.shift();
        set(() => ({
            playerHand: [...oldPlayerhand],
            playerActiveCard: oldPlayerhand[0],
            opponentHand: [...oldOpponentHand],
            opponentActiveCard: oldOpponentHand[0],
        }));
        console.log("playerhandAfter", get().playerHand);
    },
}));
export default useGameStore;
