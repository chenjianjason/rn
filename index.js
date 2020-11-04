/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import App from './js/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {
    SplashScreen.hide();
    return App
});
