import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { switchView } from "../../redux/reducer/gameStateReducer";
import { APP_STATE_VIEW } from "../../core/App.model";


export const Splash = () => {

	const dispatch = useDispatch()

    useEffect( () => {
        setTimeout(() => {
            dispatch( switchView( APP_STATE_VIEW.MAIN_MENU ) ); // loading delay
        }, 250);
    }, [ dispatch ]);

    return <div className="my-6">
        <h1 className="text-center py-6 text-3xl">LOADING ...</h1>
    </div>

}
