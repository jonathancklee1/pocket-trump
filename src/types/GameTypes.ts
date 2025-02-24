export interface GameState {
  opponent: {
    name: string;
    avatar: string;
  };
  playerHand: [];
  opponentHand: [];
  playerActiveCard: PokemonCard;
  opponentActiveCard: PokemonCard;
  gameResult: string | null;
  playerSelectedStat: { name: string | null; value: number | null };
  opponentSelectedStat: { name: string | null; value: number | null };
  setOpponent: (name: string, avatar: string) => void;
  generatePlayerHand: (pokemonData: PokemonCard[]) => void;
  generateOpponentHand: (pokemonData: PokemonCard[]) => void;
  setPlayerActiveCard: () => void;
  setOpponentActiveCard: () => void;
  addToPlayerHand: () => void;
  addToOpponentHand: () => void;
  returnToHand: () => void;
  setPlayerSelectedStat: (name: string, value: number) => void;
  setOpponentSelectedStat: (name: string, value: number) => void;
  checkScore: () => void;
  resetStore: () => void;
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
  background: string;
}

export interface PlayerStatusProps {
  isInverse?: boolean;
  handCount: number;
  name: string;
  avatar: string;
}

export interface CardModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isGameStarted: boolean;
}
