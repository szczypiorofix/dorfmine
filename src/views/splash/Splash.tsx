import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { switchView } from "../../redux/reducer/gameStateReducer";
import { switchToMainMenu1Action } from "../../redux/actions/SwitchViewActions";


export const Splash = () => {

	const dispatch = useDispatch()

    useEffect( () => {
        setTimeout(() => {
            dispatch( switchView( switchToMainMenu1Action ) ); // loading delay
        }, 250);
    }, [ dispatch ]);

    return <div className="my-6">
        <h1 className="text-center py-6 text-3xl">LOADING ...</h1>
    </div>

}
