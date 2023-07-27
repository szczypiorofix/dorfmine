import {GAME_TILE_TYPE, GameState} from "./Game.model";
import { Vector2 } from "../../core/Vector2";

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
                    value: 2,
                    pos: new Vector2( 0, 0)
                },
                {
                    id: 1,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 1, 0)
                },
                {
                    id: 2,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 2, 0)
                },
                {
                    id: 3,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 3, 0)
                },
                {
                    id: 4,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 4, 0)
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
                    value: 2,
                    pos: new Vector2( 0, 1)
                },
                {
                    id: 7,
                    selected: false,
                    type: GAME_TILE_TYPE.WATER,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 1, 1)
                },
                {
                    id: 8,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 2, 1)
                },
                {
                    id: 9,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 3, 1)
                },
                {
                    id: 10,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 4, 1)
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
                    value: 4,
                    pos: new Vector2( 0, 2)
                },
                {
                    id: 12,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 1, 2)
                },
                {
                    id: 13,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 5,
                    value: 4,
                    pos: new Vector2( 2, 2)
                },
                {
                    id: 14,
                    selected: false,
                    type: GAME_TILE_TYPE.COAL,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 3, 2)
                },
                {
                    id: 15,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 6,
                    value: 2,
                    pos: new Vector2( 4, 2)
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
                    value: 2,
                    pos: new Vector2( 0, 3)
                },
                {
                    id: 17,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT,
                    cost: 14,
                    value: 5,
                    pos: new Vector2( 1, 3)
                },
                {
                    id: 18,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT,
                    cost: 20,
                    value: 2,
                    pos: new Vector2( 2, 3)
                },
                {
                    id: 19,
                    selected: false,
                    type: GAME_TILE_TYPE.DIRT,
                    cost: 10,
                    value: 3,
                    pos: new Vector2( 3, 3)
                },
                {
                    id: 20,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 4, 3)
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
                    value: 2,
                    pos: new Vector2( 0, 4)
                },
                {
                    id: 22,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 1, 4)
                },
                {
                    id: 23,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 2, 4)
                },
                {
                    id: 24,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 3, 4)
                },
                {
                    id: 25,
                    selected: false,
                    type: GAME_TILE_TYPE.COBBLE,
                    cost: 10,
                    value: 2,
                    pos: new Vector2( 4, 4)
                }
            ]
        },
    ]
}


export default gameInitialState;
