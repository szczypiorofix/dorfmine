import { Armor, Weapon } from "../../core/entities/items";



export interface IGeneratorsState {
    randomItem: null |  Armor | Weapon;
}


export interface IRandomItemType {
    item: Armor | Weapon;
}

