import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Events from '../../components/NewsAndEvents/Events';
import News from '../../components/NewsAndEvents/News';

export default createAppContainer(
    createBottomTabNavigator({
        Updates: { 
            screen: News,
            navigationOptions: {
                //tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={capture}></Image>
            }
        },
        Events: { 
            screen: Events,
            navigationOptions: {
                //tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={pokecenter}></Image>
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: true,
            swipeEnabled: true,
            animationEnabled: true
        },
    })
)

