import { APP_STATE_VIEW, SwitchPagePayloadAction } from "../../core/App.model";

export const switchToGameAction: SwitchPagePayloadAction = {
    view: APP_STATE_VIEW.GAME,
    name: "Switch to Game",
}

export const switchToMainMenu1Action: SwitchPagePayloadAction = {
    view: APP_STATE_VIEW.MAIN_MENU,
    name: "Switch to MainMenu",
}

export const switchToSettingsAction: SwitchPagePayloadAction = {
    view: APP_STATE_VIEW.SETTINGS,
    name: "Switch to Game",
}

export const switchToMorgueAction: SwitchPagePayloadAction = {
    view: APP_STATE_VIEW.MORGUE,
    name: "Switch to Game",
}

export const switchToGeneratorsAction: SwitchPagePayloadAction = {
    view: APP_STATE_VIEW.GENERATORS,
    name: "Switch to Game",
}

