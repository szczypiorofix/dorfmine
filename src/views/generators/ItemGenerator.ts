import { Armor, IWeaponDamage, Weapon } from "../../core/entities/items";
import { WEAPON_MAJOR_TERMS, WEAPON_MINOR_TERMS, WEAPON_NAMES } from "./DefinedNames";



class ItemGenerator {

    public static generateNewWeapon = (): Weapon => {
        let weapon = new Weapon();
        weapon = ItemGenerator.addRandorPropertiesToWeapon( weapon );
        return weapon;
    }

    public static generateNewArmor = (): Armor => {
        let armor = new Armor();
        armor = ItemGenerator.addRandorPropertiesToArmor( armor );
        return armor;
    }


    // WEAPON
    private static weaponNameGenerator( weapon: Weapon ): string {
        // TODO: depending on weapon damage the names would change

        const weaponType = Math.floor( Math.random() * ( Object.keys(WEAPON_NAMES).length ) );
        const weaponTypeName = Object.values(WEAPON_NAMES)[weaponType] as string;
        
        const weaponMajorTyoe = Math.floor( Math.random() * ( Object.keys(WEAPON_MAJOR_TERMS).length ) );
        const weaponMajorTypeName = Object.values(WEAPON_MAJOR_TERMS)[weaponMajorTyoe];

        const weaponMinorTyoe = Math.floor( Math.random() * ( Object.keys(WEAPON_MINOR_TERMS).length ) );
        const weaponMinorTypeName = Object.values(WEAPON_MINOR_TERMS)[weaponMinorTyoe];

        return `${weaponMinorTypeName}  ${weaponMajorTypeName}  ${weaponTypeName}`;
    }


    private static weaponDamageGenerator( weapon: Weapon ): IWeaponDamage {
        let damageMin = Math.floor( Math.random() * 8 );
        let damageMax = damageMin + Math.floor( Math.random() * 10 );
        return {min: damageMin, max: damageMax};
    }



    // ARMOR
    private static armorNameGenerator( armor: Armor ): string {
        let name = armor.Name;
        return name;
    }


    private static addRandorPropertiesToWeapon( weapon: Weapon ): Weapon  {
        weapon.damage = ItemGenerator.weaponDamageGenerator( weapon );
        weapon.requiredStr = 6;
        weapon.Name = ItemGenerator.weaponNameGenerator(weapon);
        return weapon;
    }


    private static addRandorPropertiesToArmor( armor: Armor ) : Armor  {
        armor.armorClass = 4;
        armor.requiredStr = 6;
        armor.Name = ItemGenerator.armorNameGenerator(armor);
        return armor;
    }

}

export default ItemGenerator;
