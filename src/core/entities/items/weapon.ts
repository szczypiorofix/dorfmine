import { Item } from "./Item";
import { ITEM_TYPES } from "./ItemTypes";



export class Weapon extends Item {

    public itemType: ITEM_TYPES;

    constructor( _ID: number ) {
        super(_ID);
        this.itemType = ITEM_TYPES.WEAPON;
    }
    
}


