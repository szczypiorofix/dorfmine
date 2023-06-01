import { ITEM_TYPE, Item } from "./Item";


export class Armor extends Item {

    public requiredStr: number;
    public armorClass: number;

    constructor() {
        super();
        this.itemType = ITEM_TYPE.ARMOR;
        this.requiredStr = 0;
        this.armorClass = 0;
    }
    
}
