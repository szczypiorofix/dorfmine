import React, {useState, useEffect} from "react";
import { IGeneratorsState } from "./Generators.model";
import ItemGenerator from "./ItemGenerator";
import { Weapon } from "../../core/entities/items/Weapon";



export const Generators = () => {

    const [state, setState ] = useState<IGeneratorsState>({
        rollDice: false
    });


    const generate = () => {
        console.log("Generate item!");
        
        const weaponGenerator = ItemGenerator.generateItem(Weapon);

        const weapon1 = weaponGenerator.next().value;
        console.dir(weapon1);

        const weapon2 = weaponGenerator.next().value;
        console.dir(weapon2);


        setState({
            rollDice: true
        });
    }


    const itemPresenation = () => {
        return (
            <div>
                <h2>NAME: </h2>
            </div>
        );
    }

    useEffect(() => {

    }, []);

    return (
		<div className="text-white bg-blue-950" data-testid="app-test-id">
            <h1>GENERATORS</h1>
			<div className="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">
                <button
                    className="p-4 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg"
                    onClick={generate}
                >GENERATE !</button>
            </div>
            <div>
                {state.rollDice && itemPresenation() }
            </div>
		</div>
    )
}

