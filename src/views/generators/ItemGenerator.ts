import { Armor, WEAPON_TYPE, Weapon } from "../../core/entities/items";
import { WEAPON_MAJOR_TERMS, WEAPON_MINOR_TERMS, WEAPON_NAMES } from "./DefinedNames";


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

    public static generateNewWeapon = (): Weapon => {
        return ItemGenerator.addRandomPropertiesToWeapon( new Weapon() );
    }

    private static addRandomPropertiesToWeapon( weapon: Weapon ): Weapon  {
        weapon.imagePath = "/swords/sharp_blade_t.png";
        // TODO: modify weapon stats...
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

}

export default ItemGenerator;
