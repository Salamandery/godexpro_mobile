import { createAppContainer, createStackNavigator } from 'react-navigation';
import {
    Easing,
    Animated
} from 'react-native';
import PkmInfoController from '../PkmInfoController';
import ListaPkms from '../ListaPkms';
import Logout from '../Logout';

export default createAppContainer(
    createStackNavigator({
        ListaPkms,
        PkmInfoController,
        Logout,
    },
    {
      headerMode: "none",
      
      transitionConfig: () => ({
          transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
          },
          screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
    
            const height = layout.initHeight;
            const translateY = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [height, 0, 0],
            });
    
            const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index],
              outputRange: [0, 1, 1],
            });
    
            return { opacity, transform: [{ translateY }] };
          },
      }), 
    })
);