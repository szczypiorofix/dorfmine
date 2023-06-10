import { Armor, IWeaponDamage, WEAPON_TYPE, Weapon } from "../../core/entities/items";
import { ARMOR_MINOR_TERMS, ARMOR_NAMES, WEAPON_MAJOR_TERMS, WEAPON_MINOR_TERMS, WEAPON_NAMES } from "./DefinedNames";



class ItemGenerator {

    public static generateNewArmor = (): Armor => {
        return ItemGenerator.addRandomPropertiesToArmor( new Armor() );
    }

    private static addRandomPropertiesToArmor( armor: Armor ): Armor  {
        armor.imagePath = "/armor/arm_t_10.png";
        // TODO: modify armor stats...
        // * just some comments here...
        return armor;
    }



    // WEAPON
    public static generateNewWeapon = (): Weapon => {
        return ItemGenerator.addRandomPropertiesToWeapon( new Weapon() );
    }

    private static addRandomPropertiesToWeapon( weapon: Weapon ): Weapon  {

        weapon.imagePath = "/swords/sharp_blade_t.png";

        // TODO: modify weapon stats...

        // * just some comments here...

        return weapon;
    }







    
    private static weaponTypeGenerator( weapon: Weapon ): Weapon {
        const weaponType = Math.floor( Math.random() * ( Object.keys(WEAPON_TYPE).length  / 2) );
        switch(weaponType) {
            case WEAPON_TYPE.ARROWS:
                
                break;
            default:
                break;
        }
        // return parseInt(Object.keys(WEAPON_TYPE)[weaponType]);
        return weapon;
    }

    private static weaponDamageGenerator( weapon: Weapon ): Weapon {
        let damageMin = Math.floor( Math.random() * 8 );
        let damageMax = damageMin + Math.floor( Math.random() * 10 );
        weapon.damage = {min: damageMin, max: damageMax};
        return weapon;
    }

    private static weaponNameGenerator( weapon: Weapon ): string {
        // TODO: depending on weapon damage the names would change

        const weaponType = Math.floor( Math.random() * ( Object.keys(WEAPON_NAMES).length ) );
        const weaponTypeName = Object.values(WEAPON_NAMES)[weaponType];
        
        const weaponMajorType = Math.floor( Math.random() * ( Object.keys(WEAPON_MAJOR_TERMS).length ) );
        const weaponMajorTypeName = Object.values(WEAPON_MAJOR_TERMS)[weaponMajorType];

        const weaponMinorType = Math.floor( Math.random() * ( Object.keys(WEAPON_MINOR_TERMS).length ) );
        const weaponMinorTypeName = Object.values(WEAPON_MINOR_TERMS)[weaponMinorType];

        return `${weaponMinorTypeName}  ${weaponMajorTypeName}  ${weaponTypeName}`;
    }

    // private static addRandomPropertiesToWeapon( weapon: Weapon ): Weapon  {

    //     weapon.weaponType = ItemGenerator.weaponTypeGenerator( weapon );
    //     weapon.damage = ItemGenerator.weaponDamageGenerator( weapon );
    //     weapon.requiredStr = 6;
    //     weapon.Name = ItemGenerator.weaponNameGenerator(weapon);

    //     return weapon;
    // }



    // ARMOR
    // private static armorNameGenerator( armor: Armor ): string {
    //     const armorType = Math.floor( Math.random() * ( Object.keys(ARMOR_NAMES).length ) );
    //     const armorTypeName = Object.values(ARMOR_NAMES)[armorType] as string;

    //     const armorMinorTyoe = Math.floor( Math.random() * ( Object.keys(ARMOR_MINOR_TERMS).length ) );
    //     const armorMinorTypeName = Object.values(ARMOR_MINOR_TERMS)[armorMinorTyoe];

    //     return `${armorMinorTypeName} ${armorTypeName}`;
    // }

    // private static addRandorPropertiesToArmor( armor: Armor ) : Armor  {
    //     armor.armorClass = 4;
    //     armor.requiredStr = 6;
    //     armor.Name = ItemGenerator.armorNameGenerator(armor);
    //     return armor;
    // }

}

export default ItemGenerator;
