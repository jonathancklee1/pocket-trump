import { create, SetState } from "zustand";
import { GameState, PokemonData } from "../types/GameTypes";

const useGameStore = create<GameState>()((set: SetState<GameState>) => ({
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
        set((state) => ({
            playerActiveCard: state.playerHand[0],
        })),
    setOpponentActiveCard: () =>
        set((state) => ({
            opponentActiveCard: state.opponentHand[0],
        })),
}));
export default useGameStore;
