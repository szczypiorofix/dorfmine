import React from 'react';
import {GAME_TILE_TYPE, GameTile} from "../views/game/Game.model";


interface WorldTileProps {
    text: string;
    tile: GameTile;
    setSelected: (id: number) => void;
}

const WorldTile = ( props: WorldTileProps ) => {

    const resolveImage = () => {
        switch( props.tile.type ) {
            case GAME_TILE_TYPE.DIRT:
                return <img className="w-full" src={ './assets/images/world/dirt.png' } alt={"Tile"} />
            case GAME_TILE_TYPE.COBBLE:
                return <img className="w-full" src={ './assets/images/world/cobble.png' } alt={"Tile"} />
            case GAME_TILE_TYPE.WATER:
                return <img className="w-full" src={ './assets/images/world/water.png' } alt={"Tile"} />
            case GAME_TILE_TYPE.COAL:
                return <img className="w-full" src={ './assets/images/world/coal.png' } alt={"Tile"} />
            default:
                return <span></span>
        }
    }

    return <div
        className={ `w-12 h-12 border-2 mx-0.5 cursor-pointer select-none ` + ( props.tile.selected ? `border-indigo-300` : `border-indigo-600` )}
        onClick={ () => props.setSelected(props.tile.id) }
    >
        { resolveImage() }
    </div>
}

export default WorldTile;
