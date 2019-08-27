import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ListaPkms from '../ListaPkms';
import PkmInfo from '../PkmInfo';
import Logout from '../Logout';
export default createAppContainer(
    createSwitchNavigator({
        ListaPkms,
        PkmInfo,
        Logout,
    },
    {
        hideStatusBar: true,
        headerTintColor: "#FFF",
    })
);