import {
    Armor,
    ARMOR_TYPE,
    ASSETS_IMAGES_ARROW,
    ASSETS_IMAGES_AXE,
    ASSETS_IMAGES_BELT,
    ASSETS_IMAGES_BOOT,
    ASSETS_IMAGES_BOW,
    ASSETS_IMAGES_BRACER,
    ASSETS_IMAGES_CHEST,
    ASSETS_IMAGES_CLOAK,
    ASSETS_IMAGES_CROSSBOW,
    ASSETS_IMAGES_GLOVE,
    ASSETS_IMAGES_HAMMER,
    ASSETS_IMAGES_HELMET,
    ASSETS_IMAGES_KNIFE,
    ASSETS_IMAGES_MACE,
    ASSETS_IMAGES_PANTS,
    ASSETS_IMAGES_SHIELD,
    ASSETS_IMAGES_SHOULDER,
    ASSETS_IMAGES_STAFF,
    ASSETS_IMAGES_SWORD,
    IWeaponDamage,
    Weapon,
    WEAPON_TYPE
} from "../../core/entities/items";
import {WEAPON_MAJOR_TERMS, WEAPON_MINOR_TERMS, WEAPON_NAMES} from "./DefinedNames";


class ItemGenerator {

    private static getRandom = ( max: number ) => {
        return Math.floor( Math.random() * max );
    }

    private static randomItemLevel = (): number => {
        const rnd = this.getRandom(100);
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

    private static randomWeaponDamage = ( weapon: Weapon ): IWeaponDamage => {
        const damage: IWeaponDamage = {
            min: 0,
            max: 0
        };

        switch(weapon.weaponType) {
            case WEAPON_TYPE.ARROWS:
                damage.min = 1;
                damage.max = this.getRandom( weapon.level) + 2;
                break;

            case WEAPON_TYPE.AXE:
                damage.min = 3;
                damage.max = this.getRandom( weapon.level * 3) + 4;
                break;

            case WEAPON_TYPE.BOW:
                damage.min = 2;
                damage.max = this.getRandom( weapon.level * 2 ) + 1;
                break;
            case WEAPON_TYPE.STAFF:
                damage.min = this.getRandom( 3 ) + 2;
                damage.max = this.getRandom( 10 ) + 4;
                break;

            default:
                damage.min = this.getRandom( 10 );
                damage.max = this.getRandom( 5 )
        }

        return damage;
    }


    public static generateNewArmor = (): Armor => {
        return ItemGenerator.addRandomPropertiesToArmor( new Armor() );
    }

    private static addRandomPropertiesToArmor( armor: Armor ): Armor  {
        armor.armorType = this.getRandom( Object.keys(ARMOR_TYPE).length / 2 );
        armor.imagePath = this.setArmorImage(armor);
        armor.level = this.randomItemLevel();
        return armor;
    }

    private static setArmorImage(armor: Armor): string {
        switch( armor.armorType ) {
            case ARMOR_TYPE.SHOULDER:
                return "shoulders/" + ASSETS_IMAGES_SHOULDER[this.getRandom(Object.values(ASSETS_IMAGES_SHIELD).length)];
            case ARMOR_TYPE.SHIELD:
                return "shields/" + ASSETS_IMAGES_SHIELD[this.getRandom(Object.values(ASSETS_IMAGES_SHIELD).length)];
            case ARMOR_TYPE.PANTS:
                return "pants/" + ASSETS_IMAGES_PANTS[this.getRandom(Object.values(ASSETS_IMAGES_PANTS).length)];
            case ARMOR_TYPE.HELMET:
                return "helmets/" + ASSETS_IMAGES_HELMET[this.getRandom(Object.values(ASSETS_IMAGES_HELMET).length)];
            case ARMOR_TYPE.GLOVE:
                return "gloves/" + ASSETS_IMAGES_GLOVE[this.getRandom(Object.values(ASSETS_IMAGES_GLOVE).length)];
            case ARMOR_TYPE.CLOAK:
                return "cloaks/" + ASSETS_IMAGES_CLOAK[this.getRandom(Object.values(ASSETS_IMAGES_CLOAK).length)];
            case ARMOR_TYPE.BRACER:
                return "bracers/" + ASSETS_IMAGES_BRACER[this.getRandom(Object.values(ASSETS_IMAGES_BRACER).length)];
            case ARMOR_TYPE.BOOTS:
                return "boots/" + ASSETS_IMAGES_BOOT[this.getRandom(Object.values(ASSETS_IMAGES_BOOT).length)];
            case ARMOR_TYPE.BELT:
                return "belts/" + ASSETS_IMAGES_BELT[this.getRandom(Object.values(ASSETS_IMAGES_BELT).length)];
            default:
                return "armor/" + ASSETS_IMAGES_CHEST[this.getRandom(Object.values(ASSETS_IMAGES_CHEST).length)];
        }
    }

    public static generateNewWeapon = (): Weapon => {
        return ItemGenerator.addRandomPropertiesToWeapon( new Weapon() );
    }

    private static addRandomPropertiesToWeapon( weapon: Weapon ): Weapon  {
        weapon.weaponType = this.getRandom(Object.keys(WEAPON_TYPE).length / 2);
        weapon.imagePath = this.setWeaponImage(weapon);
        weapon.level = this.randomItemLevel();
        weapon.damage = this.randomWeaponDamage( weapon );
        return weapon;
    }

    private static setWeaponImage(weapon: Weapon): string {
        switch(weapon.weaponType) {
            case WEAPON_TYPE.BOW:
                return "bows/" + ASSETS_IMAGES_BOW[this.getRandom(Object.values(ASSETS_IMAGES_BOW).length)];
            case WEAPON_TYPE.STAFF:
                return "staves/" + ASSETS_IMAGES_STAFF[this.getRandom(Object.values(ASSETS_IMAGES_STAFF).length)];
            case WEAPON_TYPE.CROSSBOW:
                return "crossbows/" + ASSETS_IMAGES_CROSSBOW[this.getRandom(Object.values(ASSETS_IMAGES_CROSSBOW).length)];
            case WEAPON_TYPE.MACE:
                return "maces/" + ASSETS_IMAGES_MACE[this.getRandom(Object.values(ASSETS_IMAGES_MACE).length)];
            case WEAPON_TYPE.HAMMER:
                return "hammers/" + ASSETS_IMAGES_HAMMER[this.getRandom(Object.values(ASSETS_IMAGES_HAMMER).length)];
            case WEAPON_TYPE.KNIFE:
                return "knives/" + ASSETS_IMAGES_KNIFE[this.getRandom(Object.values(ASSETS_IMAGES_KNIFE).length)];
            case WEAPON_TYPE.AXE:
                return "axes/" + ASSETS_IMAGES_AXE[this.getRandom(Object.values(ASSETS_IMAGES_AXE).length)];
            case WEAPON_TYPE.ARROWS:
                return "arrows/" + ASSETS_IMAGES_ARROW[this.getRandom(Object.values(ASSETS_IMAGES_ARROW).length)];
            default:
                return "swords/" + ASSETS_IMAGES_SWORD[this.getRandom(Object.values(ASSETS_IMAGES_SWORD).length)];
        }
    }


    private static weaponNameGenerator( weapon: Weapon ): string {
        // TODO: depending on weapon damage the names would change

        const weaponType = this.getRandom(Object.keys(WEAPON_NAMES).length);
        const weaponTypeName = Object.values(WEAPON_NAMES)[weaponType];
        
        const weaponMajorType = this.getRandom(Object.keys(WEAPON_MAJOR_TERMS).length);
        const weaponMajorTypeName = Object.values(WEAPON_MAJOR_TERMS)[weaponMajorType];

        const weaponMinorType = this.getRandom(Object.keys(WEAPON_MINOR_TERMS).length);
        const weaponMinorTypeName = Object.values(WEAPON_MINOR_TERMS)[weaponMinorType];

        return `${weaponMinorTypeName}  ${weaponMajorTypeName}  ${weaponTypeName}`;
    }

}

export default ItemGenerator;
