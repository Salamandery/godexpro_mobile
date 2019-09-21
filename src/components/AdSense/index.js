import React from 'react';
import {
    View,
    StyleSheet,
    Platform
} from 'react-native';
import firebase from 'react-native-firebase'

import { normalize } from '../StringTrataments';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

const unitId =
Platform.OS === 'ios'
    ? 'ios'
    : 'ca-app-pub-5356914343536529/6894497090';
const advert = firebase.admob().interstitial(unitId);

const AdSense = ({paid}) => {
    advert.loadAd(request.build());
    advert.on('onAdLoaded', () => {
        console.log('Advert ready to show.');
        advert.show();
    });
    return (
        <View style={paid === true ? styles.containerAD : null}>
            { paid === true ? (<Banner
                unitId={unitId}
                size={'SMART_BANNER'}
                request={request.build()}
                onAdLoaded={() => {
                    console.log('Advert loaded');
                }}
            />) : null}
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