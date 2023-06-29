import { ITEM_TYPE, Item } from "./Item";


export interface IWeaponDamage {
    min: number;
    max: number;
}


export enum WEAPON_TYPE {
    ARROWS,
    AXE,
    BOW,
    CROSSBOW,
    KNIFE,
    MACE,
    HAMMER,
    STAFF,
    SWORD
}


export const ASSETS_IMAGES_ARROW: string[] = [
    "ar_t_01.png",
    "ar_t_02.png",
    "ar_t_03.png",
    "arr_t_01.png",
    "arr_t_02.png",
    "arr_t_03.png"
];

export const ASSETS_IMAGES_AXE: string[] = [
    "axe_mercenary_t.png",
    "axe_t_01.png",
    "axe_t_02.png",
    "axe_t_03.png",
    "axe_t_04.png",
    "axe_t_05.png",
    "axe_t_06.png",
    "hell-ax_t.png"
];

export const ASSETS_IMAGES_MACE: string[] = [
    "bl_t_01.png",
    "bl_t_02.png",
    "bl_t_03.png"
];

export const ASSETS_IMAGES_BOW: string[] = [
    "accurate_bow_t.png",
    "bw_t_01.png",
    "bw_t_02.png",
    "bw_t_03.png"
];

export const ASSETS_IMAGES_CROSSBOW: string[] = [
    "bw_t_04.png",
    "bw_t_05.png"
];

export const ASSETS_IMAGES_KNIFE: string[] = [
    "kn_t_01.png",
    "kn_t_02.png",
    "kn_t_03.png",
    "kn_t_04.png",
];

export const ASSETS_IMAGES_HAMMER: string[] = [
    "bl_t_04.png",
    "bl_t_05.png",
    "bl_t_06.png",
    "bl_t_07.png",
    "iron_hammer_t.png"
];

export const ASSETS_IMAGES_SWORD: string[] = [
    "sharp_blade_t.png",
    "swords_t_01.png",
    "swords_t_02.png",
    "swords_t_03.png",
    "swords_t_04.png",
    "swords_t_05.png",
    "swords_t_06.png",
    "swords_t_07.png",
    "swords_t_08.png"
];

export const ASSETS_IMAGES_STAFF: string[] = [
    "emerald_staff_t.png",
    "staff_t_01.png",
    "staff_t_02.png",
    "staff_t_03.png",
    "staff_t_04.png",
    "staff_t_05.png"
];



export class Weapon extends Item {

    public damage: IWeaponDamage;
    public requiredStr: number;
    public weaponType: WEAPON_TYPE;

    constructor() {
        super();
        this.itemType = ITEM_TYPE.WEAPON;
        this.damage = {
            min: 0,
            max: 0
        };
        this.requiredStr = 0;
        this.weaponType = WEAPON_TYPE.ARROWS;
    }
    

}
