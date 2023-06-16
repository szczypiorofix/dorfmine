import React, {useState} from 'react';
import WorldTile from "../../components/WorldTile";
import { GameState, GameTile, GameTileRow } from "./Game.model";
import gameInitialState from "./GameInitialState";


export const Game = () => {
    const [state, setState] = useState<GameState>( gameInitialState );

    const resolveView = () => {
        return state.tileRows.map( (row: GameTileRow, index: number) => <div
            key={ 'row_'+index }
            className="px-6 flex flex-row flex-wrap my-0.5"
        >
            { row.row.map( (item: GameTile, index: number) => <WorldTile
                tile={ item }
                key={ "tile_"+index }
                setSelected={ (id) => {
                    const tempRows = state.tileRows.map(
                        rowItem => {
                            rowItem.row = rowItem.row.map(
                                tile => {
                                    tile.selected = id === tile.id;
                                    return tile;
                                }
                            );
                            return rowItem;
                        }
                    );
                    setState( {
                        selectedTile: item,
                        tileRows: tempRows
                    } );
                }}
                text={ ""+item.id } />
            ) }
        </div> );
    }


    return <div className="flex flex-col">
        <div>
            <h1 className="text-center text-3xl">GAME</h1>
        </div>
        <div className="flex flex-row justify-between px-12">
            {/* LEFT PANEL*/}
            <div className="px-6">
                { resolveView() }
            </div>
            {/* RIGHT PANEL*/}
            <div className="px-6 w-1/3">
                {/* FIRST ROW */}
                <div className="px-6 py-2 flex flex-row flex-wrap">
                    <h1>TILE</h1>
                </div>
                {/* SECOND ROW */}
                <div className="px-6 py-2 flex flex-col flex-wrap">
                    <h1>DETAILS</h1>
                    <div>
                        { state.selectedTile && <div>
                            <p>TYPE: { state.selectedTile.type.toString() }</p>
                            <p>VALUE: { state.selectedTile.value }</p>
                            <p>COST: { state.selectedTile.cost }</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}
