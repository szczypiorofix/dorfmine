import { Weapon } from "../../core/entities/items/Weapon";




class ItemGenerator {
    

    public static* generateItem<T extends Weapon>(Class: new(id: number) => T): Generator<T> {
        while (true) {
            const field = yield new Class(1);
            console.log('Object generated');
          }
    }



    private static generateWeapon = (): Weapon => {
        let weapon: Weapon = new Weapon( 1 );
        return weapon;
    }

}





export default ItemGenerator;
