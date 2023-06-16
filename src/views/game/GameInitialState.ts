import {GAME_TILE_TYPE, GameState} from "./Game.model";

const gameInitialState: GameState = {
    selectedTile: null,
    tileRows: [
        {
            row: [
                {
                    id: 0,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 1,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 2,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 3,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 4,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                }
            ]
        },
        {
            row: [
                {
                    id: 6,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 7,
                    selected: false,
                    type: GAME_TILE_TYPE.WATER
                },
                {
                    id: 8,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL
                },
                {
                    id: 9,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL
                },
                {
                    id: 10,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                }
            ]
        },
        {
            row: [
                {
                    id: 11,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 12,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL
                },
                {
                    id: 13,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL
                },
                {
                    id: 14,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL
                },
                {
                    id: 15,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                }
            ]
        },
        {
            row: [
                {
                    id: 16,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 17,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT
                },
                {
                    id: 18,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT
                },
                {
                    id: 19,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT
                },
                {
                    id: 20,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                }
            ]
        },
        {
            row: [
                {
                    id: 21,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 22,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 23,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 24,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                },
                {
                    id: 25,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE
                }
            ]
        },
    ]
}


export default gameInitialState;
