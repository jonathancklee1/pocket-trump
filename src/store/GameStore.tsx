import { create, SetState } from "zustand";
import { GameState, PokemonCard, PokemonData } from "../types/GameTypes";

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
    types: [],
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
    types: [],
  },
  playerSelectedStat: {
    name: null,
    value: null,
  },
  opponentSelectedStat: {
    name: null,
    value: null,
  },
  generatePlayerHand: (pokemonData: PokemonCard[]) => {
    console.log("inner", pokemonData),
      set(() => ({
        playerHand: pokemonData,
      }));
  },
  generateOpponentHand: (pokemonData: PokemonCard[]) =>
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
    const oldOpponentHand = [...get().opponentHand];
    oldPlayerHand.shift();
    oldPlayerHand.push(get().playerHand[0]);
    oldPlayerHand.push(get().opponentHand[0]);
    oldOpponentHand.shift();
    set(() => ({
      playerHand: [...oldPlayerHand],
      // playerActiveCard: oldPlayerHand[0],
      opponentHand: [...oldOpponentHand],
      // opponentActiveCard: oldOpponentHand[0],
    }));
  },
  addToOpponentHand: () => {
    if (get().playerHand.length === 0 || get().opponentHand.length === 0)
      return;
    const oldOpponentHand = [...get().opponentHand];
    const oldPlayerHand = [...get().playerHand];
    oldOpponentHand.shift();
    oldOpponentHand.push(get().playerHand[0]);
    oldOpponentHand.push(get().opponentHand[0]);
    oldPlayerHand.shift();
    set(() => ({
      playerHand: [...oldPlayerHand],
      // playerActiveCard: oldPlayerhand[0],
      opponentHand: [...oldOpponentHand],
      // opponentActiveCard: oldOpponentHand[0],
    }));
  },
  returnToHand: () => {
    if (get().playerHand.length === 0 || get().opponentHand.length === 0)
      return;
    const oldOpponentHand = [...get().opponentHand];
    const oldPlayerHand = [...get().playerHand];
    oldOpponentHand.push(oldOpponentHand[0]);
    oldPlayerHand.push(oldPlayerHand[0]);
    oldOpponentHand.shift();
    oldPlayerHand.shift();
    set(() => ({
      playerHand: [...oldPlayerhand],
      // playerActiveCard: oldPlayerhand[0],
      opponentHand: [...oldOpponentHand],
      // opponentActiveCard: oldOpponentHand[0],
    }));
  },
  setPlayerSelectedStat: (statName: string, statValue: number) => {
    console.log(statName, statValue),
      set(() => ({
        playerSelectedStat: { name: statName, value: statValue },
      }));
  },
  setOpponentSelectedStat: (statName: string, statValue: number) => {
    console.log("inside stat", statName, statValue),
      set(() => ({
        opponentSelectedStat: { name: statName, value: statValue },
      }));
  },
}));
export default useGameStore;
