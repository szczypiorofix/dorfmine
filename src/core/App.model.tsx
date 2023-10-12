export enum APP_STATE_VIEW {
    SPLASH,
    MAIN_MENU,
    SETTINGS,
    MORGUE,
    GENERATORS,
    GAME
}


export interface AppState {
    view: APP_STATE_VIEW;
}

export interface SwitchPagePayloadAction{
    view: APP_STATE_VIEW;
    name: string;
}
