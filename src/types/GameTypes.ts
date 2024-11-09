export interface PokemonData {
    name: string;
    sprites: { front_default: string };
    stats: { stat: { name: string }; base_stat: number }[];
}

export interface GameState {
    playerHand: [];
    opponentHand: [];
    board: [];
    generatePlayerHand: (pokemonData: PokemonData) => void;
}

export interface CardProps {
    cardData: PokemonData;
}
