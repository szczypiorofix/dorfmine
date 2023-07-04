import {
    Armor,
    ARMOR_TYPE,
    ASSETS_IMAGES_ARROW,
    ASSETS_IMAGES_AXE,
    ASSETS_IMAGES_BELT, ASSETS_IMAGES_BOOT,
    ASSETS_IMAGES_BOW, ASSETS_IMAGES_BRACER,
    ASSETS_IMAGES_CHEST, ASSETS_IMAGES_CLOAK,
    ASSETS_IMAGES_CROSSBOW, ASSETS_IMAGES_GLOVE,
    ASSETS_IMAGES_HAMMER, ASSETS_IMAGES_HELMET,
    ASSETS_IMAGES_KNIFE,
    ASSETS_IMAGES_MACE, ASSETS_IMAGES_PANTS, ASSETS_IMAGES_SHIELD, ASSETS_IMAGES_SHOULDER,
    ASSETS_IMAGES_STAFF,
    ASSETS_IMAGES_SWORD,
    Weapon,
    WEAPON_TYPE,
} from "../../core/entities/items";
import {WEAPON_MAJOR_TERMS, WEAPON_MINOR_TERMS, WEAPON_NAMES} from "./DefinedNames";


class ItemGenerator {

    private static randomItemLevel = (): number => {
        const rnd = Math.floor( Math.random() * 100 );
        console.log('rnd:', rnd);
        if ( rnd >= 50) {
            if ( rnd >= 75 ) {
                if (rnd >= 88) {
                    if (rnd >= 94) {
                        if (rnd >= 98) {
                            if (rnd >= 99) {
                                return 7;
                            }
                            return 6;
                        }
                        return 5;
                    }
                    return 4;
                }
                return 3;
            }
            return 2;
        }
        return 1;
    }

    public static generateNewArmor = (): Armor => {
        return ItemGenerator.addRandomPropertiesToArmor( new Armor() );
    }

    private static addRandomPropertiesToArmor( armor: Armor ): Armor  {
        armor.armorType = Math.floor( Math.random() * ( Object.keys(ARMOR_TYPE).length / 2 ) );
        armor.imagePath = this.setArmorImage(armor);
        armor.level = this.randomItemLevel();
        return armor;
    }

    private static setArmorImage(armor: Armor): string {
        switch( armor.armorType ) {
            case ARMOR_TYPE.SHOULDER:
                return "shoulders/" + ASSETS_IMAGES_SHOULDER[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_SHIELD).length) ))];
            case ARMOR_TYPE.SHIELD:
                return "shields/" + ASSETS_IMAGES_SHIELD[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_SHIELD).length) ))];
            case ARMOR_TYPE.PANTS:
                return "pants/" + ASSETS_IMAGES_PANTS[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_PANTS).length) ))];
            case ARMOR_TYPE.HELMET:
                return "helmets/" + ASSETS_IMAGES_HELMET[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_HELMET).length) ))];
            case ARMOR_TYPE.GLOVE:
                return "gloves/" + ASSETS_IMAGES_GLOVE[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_GLOVE).length) ))];
            case ARMOR_TYPE.CLOAK:
                return "cloaks/" + ASSETS_IMAGES_CLOAK[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_CLOAK).length) ))];
            case ARMOR_TYPE.BRACER:
                return "bracers/" + ASSETS_IMAGES_BRACER[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_BRACER).length) ))];
            case ARMOR_TYPE.BOOTS:
                return "boots/" + ASSETS_IMAGES_BOOT[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_BOOT).length) ))];
            case ARMOR_TYPE.BELT:
                return "belts/" + ASSETS_IMAGES_BELT[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_BELT).length) ))];
            default:
                return "armor/" + ASSETS_IMAGES_CHEST[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_CHEST).length) ))];
        }
    }

    public static generateNewWeapon = (): Weapon => {
        return ItemGenerator.addRandomPropertiesToWeapon( new Weapon() );
    }

    private static addRandomPropertiesToWeapon( weapon: Weapon ): Weapon  {
        weapon.weaponType = Math.floor( Math.random() * ( Object.keys(WEAPON_TYPE).length / 2 ) );
        weapon.imagePath = this.setWeaponImage(weapon);
        weapon.level = this.randomItemLevel();
        return weapon;
    }

    private static setWeaponImage(weapon: Weapon): string {
        switch(weapon.weaponType) {
            case WEAPON_TYPE.BOW:
                return "bows/" + ASSETS_IMAGES_BOW[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_BOW).length) ))];
            case WEAPON_TYPE.STAFF:
                return "staves/" + ASSETS_IMAGES_STAFF[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_STAFF).length) ))];
            case WEAPON_TYPE.CROSSBOW:
                return "crossbows/" + ASSETS_IMAGES_CROSSBOW[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_CROSSBOW).length) ))];
            case WEAPON_TYPE.MACE:
                return "maces/" + ASSETS_IMAGES_MACE[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_MACE).length) ))];
            case WEAPON_TYPE.HAMMER:
                return "hammers/" + ASSETS_IMAGES_HAMMER[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_HAMMER).length) ))];
            case WEAPON_TYPE.KNIFE:
                return "knives/" + ASSETS_IMAGES_KNIFE[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_KNIFE).length) ))];
            case WEAPON_TYPE.AXE:
                return "axes/" + ASSETS_IMAGES_AXE[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_AXE).length) ))];
            case WEAPON_TYPE.ARROWS:
                return "arrows/" + ASSETS_IMAGES_ARROW[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_ARROW).length) ))];
            default:
                return "swords/" + ASSETS_IMAGES_SWORD[(Math.floor(Math.random() * (Object.values(ASSETS_IMAGES_SWORD).length) ))];
        }
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
