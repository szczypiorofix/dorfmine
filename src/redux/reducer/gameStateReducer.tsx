import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { APP_STATE_VIEW, AppState } from '../../core/App.model';



const initialState: AppState = {
    view: APP_STATE_VIEW.SPLASH
}


export const gameStateSlice = createSlice({
    name: 'game state switcher',
    initialState,
    reducers: {
        switchView: ( state: AppState, action: PayloadAction<APP_STATE_VIEW>) => {
            state.view = action.payload
        },
    },
})

export const { switchView } = gameStateSlice.actions

export default gameStateSlice.reducer;
