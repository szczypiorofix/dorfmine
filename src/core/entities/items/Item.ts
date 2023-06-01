import { v4 } from 'uuid';


export enum ITEM_TYPE {
    GENERIC,
    WEAPON,
    ARMOR 
}




export class Item {

    public ID: number;
    public Name: string;
    public Hash: string;
    public itemType: ITEM_TYPE;

    constructor() {
        this.ID = 0;
        this.Name = "item";
        this.Hash = v4();
        this.itemType = ITEM_TYPE.WEAPON;
    }


}