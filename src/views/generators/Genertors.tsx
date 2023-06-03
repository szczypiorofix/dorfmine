import { useState } from "react";
import { IGeneratorsState } from "./Generators.model";
import ItemGenerator from "./ItemGenerator";
import { Armor, Weapon, ITEM_TYPE } from "../../core/entities/items";



export const Generators = () => {

    const items_swords: string[] = [
        "sharp_blade_t.png",
        "swords_t_01.png",
        "swords_t_02.png",
        "swords_t_03.png",
        "swords_t_04.png",
        "swords_t_05.png",
        "swords_t_06.png",
        "swords_t_07.png",
        "swords_t_08.png"
    ];

    const [state, setState ] = useState<IGeneratorsState>({
        randomItem: null
    });

    const generate = () => {
        const randomItemType = Math.floor(Math.random() * ( Object.keys(ITEM_TYPE).length / 2) );
        let item = null;
        
        switch( randomItemType ) {
            case ITEM_TYPE.ARMOR:
                item = ItemGenerator.generateNewArmor();
                break;
            default:
                // weapon
                item = ItemGenerator.generateNewWeapon();
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
                <h2>Obrażenia: { state.randomItem.damage.min } - { state.randomItem.damage.max }</h2>
                <h2>Wymagana Siła: { state.randomItem.requiredStr }</h2>
            </div>
        }

        if ( state.randomItem instanceof Armor) {
            return <div>
                <h2>Klasa zbroi: { state.randomItem.armorClass }</h2>
                <h2>Wymagana Siła: { state.randomItem.requiredStr }</h2>
            </div>
        }
    }


    const getRandomItemPath = (): string => {
        const rndImage = Math.floor( Math.random() * items_swords.length );
        if (!items_swords[rndImage]) {
            throw Error("Wrong image index!");
        }
        return items_swords[rndImage];
    }


    const itemPresenation = () => {
        if ( !state.randomItem ) {
            return <div></div>
        }
        return (
            <div className="flex flex-col flex-auto basis-0 justify-center">
                <div className="flex justify-center my-4">
                    <img src={ "./assets/images/items/swords/" + getRandomItemPath() } alt="sword icon" className="w-24" />
                </div>
                <h1>STATYSTYKI PRZEDMIOTU:</h1>
                <h2>Nazwa: { state.randomItem.Name }</h2>
                <h3>ID: { state.randomItem.ID }</h3>
                <h3>Hash: { state.randomItem.Hash }</h3>
                <h3>Typ: { Object.values( ITEM_TYPE )[ state.randomItem.itemType ] }</h3>
                <h4>Cena: { state.randomItem.price }</h4>
                <h3>Poziom: { state.randomItem.level }</h3>
                {itemDetails()}
            </div>
        );
    }

    return (
		<div className="text-white bg-blue-950" data-testid="app-test-id">
            <h1>GENERATORY</h1>
			<div className="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">
                <button
                    className="p-4 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                    onClick={generate}
                >WYGENERUJ !</button>
            </div>
            <div className="flex flex-col mx-auto m-5 space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-md bg-blue-900 p-5 rounded-md min-h-full">
                {state.randomItem && itemPresenation() }
            </div>
		</div>
    )
}
