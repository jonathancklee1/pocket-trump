export interface PokemonData {
    name: string;
    sprites: { front_default: string };
    stats: { stat: { name: string }; base_stat: number }[];
}

export interface GameState {
    playerHand: [];
    opponentHand: [];
    playerActiveCard: PokemonCard;
    opponentActiveCard: PokemonCard;
    generatePlayerHand: (pokemonData: PokemonData) => void;
    generateOpponentHand: (pokemonData: PokemonData) => void;
    setPlayerActiveCard: () => void;
    setOpponentActiveCard: () => void;
    reAddToPlayerHand: () => void;
}

export interface CardProps {
    cardData: PokemonCard;
    onClickEvent?: () => void;
    isFullSize?: boolean;
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
    isInverse: boolean;
}

export interface CardModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
}
