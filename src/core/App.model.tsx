
export enum APP_STATE_VIEW {
    SPLASH,
    MAIN_MENU,
    SETTINGS,
    GAME
}


export interface AppState {
    view: APP_STATE_VIEW
}
