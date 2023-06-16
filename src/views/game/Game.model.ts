
export enum GAME_TILE_TYPE {
    EMPTY,
    DIRT,
    ROCK,
    COAL,
    WATER

}

export interface GameTile {
    selected: boolean;
    type: GAME_TILE_TYPE;

}


export interface GameTileRow {
    row: GameTile[];
}

export interface GameState {
    tileRows: GameTileRow[];
}


export interface GameProps {
    run: boolean;
}
