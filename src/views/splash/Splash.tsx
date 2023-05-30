import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { switchView } from "../../redux/reducer/gameStateReducer";
import { APP_STATE_VIEW } from "../../core/App.model";


export const Splash = () => {

	const dispatch = useDispatch()

    useEffect( () => {
        setTimeout(() => {
            dispatch( switchView( APP_STATE_VIEW.MAIN_MENU ) ); // loading delay
        }, 500);
    }, [ dispatch ]);

    return <div className="flex-initial w-64">
        SPLASH SCREEN
    </div>

}
