import { useDispatch } from 'react-redux';
import { APP_STATE_VIEW } from '../../core/App.model';
import useTimeOut from "../../hooks/useTimeOut";
import {FC} from "react";
import {switchView} from "../../redux/reducer/gameStateReducer";

export const MainMenu: FC = () => {
    const dispatch = useDispatch();

    useTimeOut(2000 ).then(()=>{
        console.log("OK pod 2 sekundach");
    })

    return <div className="text-white bg-blue-950 box-border">
        <div>
            <h1 className="text-center py-6 text-3xl">MAIN MENU</h1>
        </div>
        <div className="flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-xs">
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch(switchView(APP_STATE_VIEW.GAME))}
            >START</button>
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch(switchView(APP_STATE_VIEW.SETTINGS))}
            >SETTINGS</button>
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch( switchView(APP_STATE_VIEW.MORGUE))}
            >MORGUE</button>
            <button
                className="p-3 rounded-lg flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 shadow-lg border border-slate-200"
                onClick={() => dispatch( switchView(APP_STATE_VIEW.GENERATORS))}
            >GENERATORS</button>
        </div>
    </div>
}

