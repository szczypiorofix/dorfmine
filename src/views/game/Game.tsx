import React, {useState} from 'react';
import WorldTile from "../../components/WorldTile";
import {GAME_TILE_TYPE, GameProps, GameState} from "./Game.model";
import GameInitialState from "./GameInitialState";


export const Game = ( props: GameProps ) => {

    const [state, setState] = useState<GameState>( GameInitialState );

    const resolveView = () => {
        return state.tileRows.map( row =>  <div className="px-6 flex flex-row flex-wrap my-0.5">
            { row.row.map( item => <WorldTile text={ "A" } /> ) }
        </div> );
    }

    return <div className="flex flex-col">
        <div>
            <h1 className="text-center text-3xl">GAME</h1>
        </div>

        <div className="flex flex-row justify-between">
            {/* LEFT PANEL*/}
            <div className="px-6">
                { resolveView() }
            </div>

            {/* RIGHT PANEL*/}
            <div className="px-6">

                {/* FIRST ROW */}
                <div className="px-6 py-2 flex flex-row flex-wrap">
                    <h1>TILE</h1>
                </div>

                {/* SECOND ROW */}
                <div className="px-6 py-2 flex flex-row flex-wrap">
                    <h1>DETAILS</h1>
                </div>
            </div>
        </div>
    </div>
}
