import { ITEM_TYPE, Item } from "./Item";

export enum ARMOR_TYPE {
    CHEST,
    BELT,
    BOOTS,
    BRACER,
    CLOAK,
    GLOVE,
    HELMET,
    PANTS,
    SHIELD,
    SHOULDER
}

export const ASSETS_IMAGES_CHEST: string[] = [
    "arm_t_02.png",
    "arm_t_03.png",
    "arm_t_04.png",
    "arm_t_05.png",
    "arm_t_06.png",
    "arm_t_07.png",
    "arm_t_08.png",
    "arm_t_09.png",
    "arm_t_10.png",
    "composite_breastplate_t.png"
];

export const ASSETS_IMAGES_BELT: string[] = [
    "belt_t_01.png",
    "belt_t_02.png",
    "belt_t_03.png",
    "belt_t_04.png",
    "belt_t_05.png",
    "belt_t_06.png",
    "belt_t_07.png"
];

export const ASSETS_IMAGES_BOOT: string[] = [
    "boot_t_01.png",
    "boot_t_02.png",
    "boot_t_03.png",
    "boot_t_04.png",
    "boot_t_05.png",
    "boot_t_06.png",
    "boot_t_07.png",
    "Leather_boots_t-01.png",
    "reinforced_shoes_t.png",
    "shadow_boots_t.png",
];

export const ASSETS_IMAGES_BRACER: string[] = [
    "br_t_01.png",
    "br_t_02.png",
    "br_t_03.png",
    "br_t_04.png",
    "br_t_05.png",
    "br_t_06.png",
    "br_t_07.png",
    "combat_bracelets_t.png"
];

export const ASSETS_IMAGES_CLOAK: string[] = [
    "cl_t_01.png",
    "cl_t_02.png",
    "cl_t_03.png",
    "cl_t_04.png",
    "cl_t_05.png",
    "cl_t_06.png",
    "cl_t_07.png"
];

export const ASSETS_IMAGES_GLOVE: string[] = [
    "gl_t_01.png",
    "gl_t_02.png",
    "gl_t_03.png",
    "gl_t_04.png",
    "gl_t_05.png",
    "gl_t_06.png",
    "gl_t_07.png",
];

export const ASSETS_IMAGES_HELMET: string[] = [
    "hlm_t_01.png",
    "hlm_t_02.png",
    "hlm_t_03.png",
    "hlm_t_04.png",
    "hlm_t_05.png",
    "hlm_t_06.png",
    "hlm_t_07.png",
    "hlm_t_08.png",
    "hlm_t_09.png",
    "hlm_t_10.png",
    "infantry_helmet_t.png"
];

export const ASSETS_IMAGES_PANTS: string[] = [
    "pn_t_01.png",
    "pn_t_02.png",
    "pn_t_03.png",
    "pn_t_04.png",
    "pn_t_05.png",
    "pn_t_06.png",
    "pn_t_07.png"
];

export const ASSETS_IMAGES_SHIELD: string[] = [
    "shield_t_01.png",
    "shield_t_02.png",
    "shield_t_03.png",
    "shield_t_04.png",
    "shield_t_05.png",
    "shield_t_06.png",
    "shield_t_07.png",
    "shield_t_08.png",
    "shl_t_01.png",
    "shl_t_02.png",
    "shl_t_03.png",
];

export const ASSETS_IMAGES_SHOULDER: string[] = [
    "fortified_shoulders_t.png",
    "sh_t_01.png",
    "sh_t_02.png",
    "sh_t_03.png",
    "sh_t_04.png",
    "sh_t_05.png",
    "sh_t_06.png",
    "sh_t_07.png"
];


export class Armor extends Item {

    public requiredStr: number;
    public armorClass: number;
    public armorType: ARMOR_TYPE;
    
    constructor() {
        super();
        this.itemType = ITEM_TYPE.ARMOR;
        this.armorType = ARMOR_TYPE.CHEST;
        this.requiredStr = 0;
        this.armorClass = 0;
    }

}
