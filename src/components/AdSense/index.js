import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob';

import { normalize } from '../StringTrataments';

const AdSense = () => {
    return (
        <View style={styles.containerAD}>
            <AdMobBanner
                adSize="smartBannerPortrait"
                adUnitID="ca-app-pub-5356914343536529/6894497090"
                onAdFailedToLoad={error => console.log(error)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    containerAD: {
        alignSelf: "stretch",
        justifyContent: "center",
        marginHorizontal: normalize(2)  
    }
})

export default AdSense;