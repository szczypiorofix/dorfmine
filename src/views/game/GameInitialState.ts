import {GAME_TILE_TYPE, GameState} from "./Game.model";

const GameInitialState: GameState = {
    tileRows: [
        {
            row: [
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                },
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                },
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                }
            ]
        },
        {
            row: [
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                },
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                },
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                }
            ]
        },
        {
            row: [
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                },
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                },
                {
                    selected: false,
                    type: GAME_TILE_TYPE.ROCK
                }
            ]
        }
    ]
}


export default GameInitialState;
