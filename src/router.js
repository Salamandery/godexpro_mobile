import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './Views/Login';
import Main from './Views/Main';

export default createAppContainer(
    createSwitchNavigator({
        Login: {
            screen: Login
        },
        Main:  {
            screen: Main,
        },
    }, 
    {
        hideStatusBar: true,
    })
);