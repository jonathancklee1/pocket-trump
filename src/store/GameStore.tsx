import { create, SetState } from "zustand";
import { GameState, PokemonData } from "../types/GameTypes";

const useGameStore = create<GameState>()((set: SetState<GameState>) => ({
    playerHand: [],
    opponentHand: [],
    board: [],
    generatePlayerHand: (pokemonData: PokemonData) =>
        set((state) => ({
            playerHand: [...state.playerHand, pokemonData],
        })),
}));
export default useGameStore;
