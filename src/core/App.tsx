import { Settings } from '../views/settings/Settings';
import { MainMenu } from '../views/mainmenu/MainMenu';

import { APP_STATE_VIEW } from './App.model';
import { Splash } from '../views/splash/Splash';
import type { RootState } from '../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { switchView } from '../redux/reducer/gameStateReducer'


const App = () => {

	const view = useSelector((state: RootState) => state.gameState.view );
	const dispatch = useDispatch()


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
					<div>GAME</div>
				)
			default:
				return  (
					<Splash />
				)
		}
	}

	return (
		<div className="App" data-testid="app-test-id">
			<div className="flex space-x-4 mb-6 text-sm font-medium">
				<div className="flex-auto flex space-x-4">
					<button
						className="h-10 px-6 font-semibold rounded-full bg-red-600 text-white hover:bg-blue-700"
						aria-label="Switch to Splash Screen"
						onClick={() => dispatch( switchView( APP_STATE_VIEW.SPLASH ) )}
					>
						Splash Screen
					</button>
					<button
						className="h-10 px-6 font-semibold rounded-full bg-green-600 text-white hover:bg-blue-700"
						aria-label="Switch to Main Menu"
						onClick={() => dispatch( switchView( APP_STATE_VIEW.MAIN_MENU ) )}
					>
						Main Menu
					</button>
					<button
						className="h-10 px-6 font-semibold rounded-full bg-green-600 text-white hover:bg-blue-700"
						aria-label="Switch to Main Menu"
						onClick={() => dispatch( switchView( APP_STATE_VIEW.SETTINGS ) )}
					>
						Settings
					</button>
				</div>
			</div>
			<div>
				{ viewResolver() }
			</div>
		</div>
	);
}

export default App;
