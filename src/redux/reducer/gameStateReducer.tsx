import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { APP_STATE_VIEW, AppState, SwitchPagePayloadAction } from '../../core/App.model';

const initialState: AppState = {
    view: APP_STATE_VIEW.SPLASH,
}

export const gameStateSlice = createSlice({
    name: 'game state switcher',
    initialState,
    reducers: {
        switchView: ( state: AppState, action: PayloadAction<SwitchPagePayloadAction> ) => {
            state.view = action.payload.view;
            console.log("Payload: ", action.payload.name);
        },
    },
})

export const { switchView } = gameStateSlice.actions

export default gameStateSlice.reducer;
