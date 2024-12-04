export interface GameState {
  playerHand: [];
  opponentHand: [];
  playerActiveCard: PokemonCard;
  opponentActiveCard: PokemonCard;
  playerSelectedStat: { name: string | null; value: number | null };
  opponentSelectedStat: { name: string | null; value: number | null };
  generatePlayerHand: (pokemonData: PokemonCard[]) => void;
  generateOpponentHand: (pokemonData: PokemonCard[]) => void;
  setPlayerActiveCard: () => void;
  setOpponentActiveCard: () => void;
  addToPlayerHand: () => void;
  addToOpponentHand: () => void;
  returnToHand: () => void;
  setPlayerSelectedStat: (name: string, value: number) => void;
  setOpponentSelectedStat: (name: string, value: number) => void;
}

export interface CardProps {
  cardData: PokemonCard;
  onClickEvent?: () => void;
  isFullSize?: boolean;
  isFlipped?: boolean;
}

export interface PokemonCard {
  name: string;
  sprite: string;
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
}

export interface PlayerStatusProps {
  isInverse?: boolean;
  handCount: number;
  name: string;
}

export interface CardModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isGameStarted: boolean;
}
