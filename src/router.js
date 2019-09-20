import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from './Views/Splash';
import Login from './Views/Login';
import Main from './Views/Main';

export default createAppContainer(
    createSwitchNavigator({
        Splash: {
            screen: Splash,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Main:  {
            screen: Main,
            navigationOptions: {
                header: null
            }
        },
    }, 
    {
        hideStatusBar: true,
    })
);