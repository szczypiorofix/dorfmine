import { ITEM_TYPE, Item } from "./Item";


export interface IWeaponDamage {
    min: number;
    max: number;
}


export class Weapon extends Item {

    public damage: IWeaponDamage;
    public requiredStr: number;


    constructor() {
        super();
        this.itemType = ITEM_TYPE.WEAPON;
        this.damage = {
            min: 0,
            max: 0
        };
        this.requiredStr = 0;
    }
    
}


