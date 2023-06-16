import {GAME_TILE_TYPE, GameState} from "./Game.model";

const gameInitialState: GameState = {
    selectedTile: null,
    tileRows: [
        {
            row: [
                {
                    id: 0,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 1,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 2,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 3,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 4,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                }
            ]
        },
        {
            row: [
                {
                    id: 6,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 7,
                    selected: false,
                    type: GAME_TILE_TYPE.WATER,
                    cost: 10,
                    value: 2
                },
                {
                    id: 8,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2
                },
                {
                    id: 9,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2
                },
                {
                    id: 10,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                }
            ]
        },
        {
            row: [
                {
                    id: 11,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 7,
                    value: 4
                },
                {
                    id: 12,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2
                },
                {
                    id: 13,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 5,
                    value: 4
                },
                {
                    id: 14,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2
                },
                {
                    id: 15,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 6,
                    value: 2
                }
            ]
        },
        {
            row: [
                {
                    id: 16,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 17,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT,
                    cost: 14,
                    value: 5
                },
                {
                    id: 18,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT,
                    cost: 20,
                    value: 2
                },
                {
                    id: 19,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT,
                    cost: 10,
                    value: 3
                },
                {
                    id: 20,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                }
            ]
        },
        {
            row: [
                {
                    id: 21,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 22,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 23,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 24,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                },
                {
                    id: 25,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2
                }
            ]
        },
    ]
}


export default gameInitialState;
