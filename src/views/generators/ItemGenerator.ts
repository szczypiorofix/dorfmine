import { Armor, IWeaponDamage, Item, Weapon } from "../../core/entities/items";
import { WEAPON_MAJOR_TERMS, WEAPON_MINOR_TERMS, WEAPON_NAMES } from "./DefinedNames";



class ItemGenerator {


    // WEAPON

    private static weaponNameGenerator<T extends Weapon>( weapon: T ): string {

        // TODO: depending on weapon damage the names would change

        const weaponType = Math.floor( Math.random() * ( Object.keys(WEAPON_NAMES).length ) );
        const weaponTypeName = Object.values(WEAPON_NAMES)[weaponType] as string;
        
        const weaponMajorTyoe = Math.floor( Math.random() * ( Object.keys(WEAPON_MAJOR_TERMS).length ) );
        const weaponMajorTypeName = Object.values(WEAPON_MAJOR_TERMS)[weaponMajorTyoe];

        const weaponMinorTyoe = Math.floor( Math.random() * ( Object.keys(WEAPON_MINOR_TERMS).length ) );
        const weaponMinorTypeName = Object.values(WEAPON_MINOR_TERMS)[weaponMinorTyoe];

        return `${weaponMinorTypeName}  ${weaponMajorTypeName}  ${weaponTypeName}`;
    }


    private static weaponDamageGenerator<T extends Weapon>( weapon: T ): IWeaponDamage {
        let damageMin = Math.floor( Math.random() * 8 );
        let damageMax = damageMin + Math.floor( Math.random() * 10 );
        return {min: damageMin, max: damageMax};
    }



    // ARMOR

    private static armorNameGenerator<T extends Armor>( armor: T ): string {
        let name = armor.Name;

        return name;
    }


    private static addRandorPropertiesToWeapon<T extends Weapon>( weapon: T ) : T  {
        weapon.damage = ItemGenerator.weaponDamageGenerator( weapon );
        weapon.requiredStr = 6;
        weapon.Name = ItemGenerator.weaponNameGenerator(weapon);

        return weapon;
    }


    private static addRandorPropertiesToArmor<T extends Armor>( armor: T ) : T  {
        armor.armorClass = 4;
        armor.requiredStr = 6;

        armor.Name = ItemGenerator.armorNameGenerator(armor);

        return armor;
    }


    private static addRandomPropertiesToItem<T extends Item>( item: T ) : T {
        
        if ( item instanceof Weapon ) {
            console.log("it's a weapon!");
            item = ItemGenerator.addRandorPropertiesToWeapon(item);
        }

        if ( item instanceof Armor ) {
            console.log("it's an armor!");
            item = ItemGenerator.addRandorPropertiesToArmor(item);
        }

        return item;
    }

    public static generateItem<T extends Item>(Class: new() => T): T {
        const item = new Class();
        return ItemGenerator.addRandomPropertiesToItem( item );
    }

}

export default ItemGenerator;
