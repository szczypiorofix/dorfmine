import { useDispatch } from 'react-redux';
import { FC } from "react";
import { switchView } from "../../redux/reducer/gameStateReducer";
import {
    switchToGameAction,
    switchToGeneratorsAction,
    switchToMorgueAction,
    switchToSettingsAction
} from "../../redux/actions/SwitchViewActions";

export const MainMenu: FC = () => {
    const dispatch = useDispatch();

    return <div className="text-white bg-blue-950 box-border">
        <div>
            <h1 className="text-center py-6 text-3xl">MAIN MENU</h1>
        </div>
        <div className="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch(switchView(switchToGameAction))}
            >START</button>
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch(switchView(switchToSettingsAction))}
            >SETTINGS</button>
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch( switchView(switchToMorgueAction))}
            >MORGUE</button>
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch( switchView(switchToGeneratorsAction))}
            >GENERATORS</button>
        </div>
    </div>
}

