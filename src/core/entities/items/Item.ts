
import { v4 } from 'uuid';


export class Item {

    public ID: number;
    public Name: string;
    public Hash: string;


    constructor(_ID: number, _name: string = "generic item") {
        this.ID = _ID;
        this.Name = _name;
        this.Hash = v4();
    }


}