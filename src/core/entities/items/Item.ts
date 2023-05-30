
export abstract class Item {

    public ID: number;
    public name: string;

    constructor(_ID: number, _name: string = "item") {
        this.ID = _ID;
        this.name = _name;
    }

}