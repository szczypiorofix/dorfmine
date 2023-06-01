import { v4 } from 'uuid';


export enum ITEM_TYPE {
    WEAPON,
    ARMOR 
}




export abstract class Item {

    public ID: number;
    public Name: string;
    public Hash: string;
    public level: number;
    public cost: number;
    public itemType: ITEM_TYPE;

    constructor() {
        this.ID = 0;
        this.Name = "item";
        this.Hash = v4();
        this.itemType = ITEM_TYPE.WEAPON;
        this.level = 1;
        this.cost = 0;
    }


}