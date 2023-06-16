import { Settings } from '../views/settings/Settings';
import { MainMenu } from '../views/mainmenu/MainMenu';

import { APP_STATE_VIEW } from './App.model';
import { Splash } from '../views/splash/Splash';
import type { RootState } from '../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { switchView } from '../redux/reducer/gameStateReducer';
import { Game } from '../views/game/Game';
import { Morgue } from '../views/morgue/Morgue';
import { Generators } from '../views/generators';


const App = () => {

	const view = useSelector((state: RootState) => state.gameState.view );
	const dispatch = useDispatch();

	const viewResolver = () => {
		switch ( view ) {
			case APP_STATE_VIEW.MAIN_MENU:
				return (
					<MainMenu />
				)
			case APP_STATE_VIEW.SETTINGS:
				return (
					<Settings />
				)
			case APP_STATE_VIEW.GAME:
				return (
					<Game />
				)
			case APP_STATE_VIEW.MORGUE:
				return (
					<Morgue />
				)
			case APP_STATE_VIEW.GENERATORS:
				return (
					<Generators />
				)
			default:
				return  (
					<Splash />
				)
		}
	}

	return (
		<div className="h-screen text-white bg-blue-950 p-6" data-testid="app-test-id">
			<div className="flex space-x-4 mb-6 pt-6 text-sm font-medium">
				<div className="flex-auto flex space-x-4">
					<button
						className="h-10 px-6 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md border border-slate-200"
						type="button"
						aria-label="Switch to Main Menu"
						onClick={() => dispatch( switchView( APP_STATE_VIEW.MAIN_MENU ) )}
					>
						Main menu
					</button>
				</div>
			</div>
			{ viewResolver() }
		</div>
	);
}

export default App;
