import React, {useState, useEffect, useCallback} from 'react';

interface WorldTileProps {
    text: string;
}

interface WorldTileState {
    selected: boolean;
}

const WorldTile = ( props: WorldTileProps ) => {

    const [state, setState] = useState<WorldTileState>({
        selected: false
    });

    const callback = useCallback( () => {
        console.log('useCallback');
    }, []);

    return <div
        className={ `w-12 h-12 border-2 px-4 py-2 mx-0.5 cursor-pointer select-none ` + ( state.selected ? `border-amber-700` : `border-amber-400` ) }
        onClick={ () => setState({...state, selected: !state.selected})}
    >
        <span>{props.text}</span>
    </div>
}

// export default WorldTile;
export default WorldTile;
