import { useState } from 'react';

export function useLocalStorage<T>( defaultValue: T, objectName: string ): [ T, () => void, () => void ] {


    const [ state, setState ] = useState<T>( defaultValue );


    const save = (): void => {

    }


    const load = (): void => {
        const objStr: string = localStorage.getItem( objectName ) ?? "";
        const obj: T = ( JSON.parse( objStr ) ?? defaultValue ) as T;
        setState( obj );
    }


    return [ state, save, load ];
}

