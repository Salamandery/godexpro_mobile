import React, {
    Component
} from 'react';
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import PkmInfo from '../PkmInfo';
import PkmAtks from '../PkmAtks';
import PkmCP from '../PkmCP';

const Tabs = createAppContainer(
    createBottomTabNavigator({
        PkmInfo: { 
            screen: PkmInfo,
            navigationOptions: {
                //tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={capture}></Image>
            }
        },
        PkmCP: { 
            screen: PkmCP,
            navigationOptions: {
                //tabBarIcon: ({ tintColor }) => <Image style={styles.img} source={pokecenter}></Image>
            }
        },
        PkmAtks: { 
            screen: PkmAtks,
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

export default class MainNavigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <Tabs screenProps={navigation} />
        )
    }
}