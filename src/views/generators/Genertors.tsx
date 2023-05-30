import React, {useState, useEffect} from "react";
import { IGeneratorsState } from "./Generators.model";


export const Generators = () => {

    const [state, setState ] = useState<IGeneratorsState>({
        rollDice: false
    });


    useEffect(() => {

    }, []);

    return (
		<div className="h-screen text-white bg-blue-950" data-testid="app-test-id">
            <h1>GENERATORS</h1>
			<div className="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">
                <button
                    className="p-4 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg"
                >GENERATE !</button>
            </div>
		</div>
    )
}

