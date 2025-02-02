import { create } from "zustand";
import { GameState, PokemonCard } from "../types/GameTypes";

const useGameStore = create<GameState>()((set, get) => ({
  opponent: {
    name: "",
    avatar: "",
  },
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
    background: "",
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
    background: "",
  },
  playerSelectedStat: {
    name: null,
    value: null,
  },
  opponentSelectedStat: {
    name: null,
    value: null,
  },
  gameResult: null,
  setOpponent: (name: string, avatar: string) =>
    set(() => ({
      opponent: {
        name: name,
        avatar: avatar,
      },
    })),
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
      opponentHand: [...oldOpponentHand],
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
      opponentHand: [...oldOpponentHand],
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

      opponentHand: [...oldOpponentHand],
    }));
  },
  setPlayerSelectedStat: (
    statName: string | null,
    statValue: number | null,
  ) => {
    console.log(statName, statValue),
      set(() => ({
        playerSelectedStat: { name: statName, value: statValue },
      }));
  },
  setOpponentSelectedStat: (
    statName: string | null,
    statValue: number | null,
  ) => {
    console.log("inside stat", statName, statValue),
      set(() => ({
        opponentSelectedStat: { name: statName, value: statValue },
      }));
  },

  checkScore: () => {
    console.log("check score", get().playerHand, get().opponentHand);
    if (get().opponentHand.length === 0) {
      set(() => ({
        gameResult: "You Win!",
      }));
    }

    if (get().playerHand.length === 0) {
      set(() => ({
        gameResult: "You Lose!",
      }));
    }
  },

  resetStore: () => {
    set(() => ({
      playerHand: [],
      opponentHand: [],
      playerActiveCard: {
        name: "",
        sprite: "",
        stats: [],
        types: [],
        background: "",
      },
      opponentActiveCard: {
        name: "",
        sprite: "",
        stats: [],
        types: [],
        background: "",
      },
      gameResult: null,
      playerSelectedStat: {
        name: null,
        value: null,
      },
      opponentSelectedStat: {
        name: null,
        value: null,
      },
    }));
  },
}));
export default useGameStore;
