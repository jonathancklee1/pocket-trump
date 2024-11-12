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
    setPlayerActiveCard: () => void;
    setOpponentActiveCard: () => void;
}

export interface CardProps {
    cardData: PokemonCard;
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
