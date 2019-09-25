import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import HeaderBar from '../../components/Header';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import { translate, CalculateCombatPower } from '../../components/StringTrataments';
import Loading from '../Loading';
import AdSense from '../../components/AdSense';

var translation = translate("PkmInfo");

const PkmCP = ({screenProps, theme, Ari, lang}) => {
    const [lvl, setLVL] = useState([]);
    const [cpMaxFor, setcpMaxFor] = useState([]);
    const [cpMinFor, setcpMinFor] = useState([]);
    const pkm = screenProps.state.params.Pkm;

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    useEffect(()=>{
        setMaxValues();
        setMinValues();
        setLVLValues();
    },[]);
    function setLVLValues() {
        let values = [];
        for(i=1; i <= 40; i++) {
            values.push(i);
        }
        setLVL(values);
    }
    function setMaxValues() {
        let values = [];
        for(i=1; i <= 40; i++) {
            values.push(CalculateCombatPower(pkm, i));
        }
        setcpMaxFor(values);
    }
    function setMinValues() {
        let values = [];
        for(i=1; i <= 40; i++) {
            values.push(CalculateCombatPower(pkm, i, {
                atk: 0,
                def: 0,
                stm: 0
            }));
        }
        setcpMinFor(values);
    }

    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={translation[lang].cpFor} navigation={screenProps} theme={theme}/>
            <AdSense />
            <View style={styles.PkmCP}>
                <View style={styles.PkmCPheaders}>
                    <Text style={styles.label}>LVL.</Text>
                    <Text style={styles.label}>Min. CP</Text>
                    <Text style={styles.label}>Max. CP</Text>
                </View>
                { lvl.length > 0 ? (
                    <ScrollView style={styles.PkmCP}>
                        <View style={styles.PkmCProws}>
                            <View style={styles.row}>
                                {lvl.map(lv=>(
                                    <Text style={styles.values} key={lv}>{lv}</Text>
                                ))}
                            </View>
                            <View style={styles.row}>
                                {cpMinFor.map(cp=>(
                                    <Text style={styles.values} key={cp}>{cp}</Text>
                                ))}
                            </View>
                            <View style={styles.row}>
                                {cpMaxFor.map(cp=>(
                                    <Text style={styles.values} key={cp}>{cp}</Text>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                ) : <Loading /> }
            </View>
        </View>
    );
}

export default connect(state => ({ 
    theme: state.themes.theme, 
    Ari: state.themes.Ari, 
    lang: state.themes.lang, 
    dir: state.themes.dir,
    username: state.userinfo.username, 
    photo: state.userinfo.photo, 
    paid: state.userinfo.paid, 
}))(PkmCP);