import { useState } from "react";
import { IGeneratorsState } from "./Generators.model";
import ItemGenerator from "./ItemGenerator";
import { Armor, Weapon, ITEM_TYPE } from "../../core/entities/items";
import { useLocalStorage } from "../../hooks/useLocalStorage";


export const Generators = () => {

    const defaultWeapon: Weapon = new Weapon();
    const defaultArmor: Armor = new Armor();

    const [state, setState ] = useState<IGeneratorsState>({ });

    const [ weapon, weaponSave, weaponLoad, weaponDebug ] = useLocalStorage<Weapon>( defaultWeapon, "myweapon");
    const [ armor, armorSave, armorLoad, armorDebug ] = useLocalStorage<Armor>( defaultArmor, "myarmor");

    const generate = () => {
        const randomItemType = Math.floor(Math.random() * ( Object.keys(ITEM_TYPE).length / 2) );
        let item: Weapon | Armor = defaultWeapon;

        switch( randomItemType ) {
            case ITEM_TYPE.ARMOR:
                item = ItemGenerator.generateNewArmor();
                armorSave( item );

                break;
            default:
                // weapon
                item = ItemGenerator.generateNewWeapon();
                weaponSave( item );
                break;
        }



        setState({
            randomItem: item
        });

    }

    const itemDetails = () => {
        if ( !state.randomItem ) {
            return <div></div>
        }

        if ( state.randomItem instanceof Weapon) {
            return <div>
                <h2>Weapon type: { state.randomItem.weaponType }</h2>
                <h2>Damage: { state.randomItem.damage.min } - { state.randomItem.damage.max }</h2>
                <h2>STR required: { state.randomItem.requiredStr }</h2>
            </div>
        }

        if ( state.randomItem instanceof Armor) {
            return <div>
                <h2>Armor class: { state.randomItem.armorClass }</h2>
                <h2>STR required: { state.randomItem.requiredStr }</h2>
            </div>
        }
    }


    const showItemDetails = () => {
        if ( !state.randomItem ) {
            return <div></div>
        }
        return (
            <div className="flex flex-col flex-auto basis-0 justify-center">
                <div className="flex justify-center my-4">
                    <img src={ "./assets/images/items/" + state.randomItem.imagePath } alt={ ITEM_TYPE[state.randomItem.itemType] + " icon" } className="w-24" />
                </div>
                <h1>ITEM DETAILS:</h1>
                <h2>Name: { state.randomItem.Name }</h2>
                <h3>ID: { state.randomItem.ID }</h3>
                <h3>Hash: { state.randomItem.Hash }</h3>
                <h3>Type: { Object.values( ITEM_TYPE )[ state.randomItem.itemType ] }</h3>
                <h4>Price: { state.randomItem.price }</h4>
                <h3>Level: { state.randomItem.level }</h3>
                {itemDetails()}
            </div>
        );
    }

    return (
		<div className="text-white bg-blue-950" data-testid="app-test-id">
            <h1>GENERATORS</h1>
			<div className="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">
                <button
                    className="p-4 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                    onClick={generate}
                >GENERATE !</button>
            </div>
            <div className={ `flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-md bg-blue-900 rounded-md min-h-full` + ( state.randomItem ? ` m-5 p-5` : `` ) }>
                {state.randomItem && showItemDetails() }
            </div>
		</div>
    )
}
