
export enum GAME_TILE_TYPE {
    EMPTY = "Empty",
    DIRT = "Dirt",
    COBBLE = "Cobblestone",
    COAL = "Coal",
    WATER = "Water"
}

export interface GameTile {
    id: number;
    selected: boolean;
    type: GAME_TILE_TYPE;
    value: number;
    cost: number;
}

export interface GameTileRow {
    row: GameTile[];
}

export interface GameState {
    tileRows: GameTileRow[];
    selectedTile: null | GameTile;
}

export interface GameProps {
    run: boolean;
}
