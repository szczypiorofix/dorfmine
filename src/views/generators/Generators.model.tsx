import { Armor, Item, Weapon } from "../../core/entities/items";



export interface IGeneratorsState {
    randomItem: null | Item | Armor | Weapon;
}

