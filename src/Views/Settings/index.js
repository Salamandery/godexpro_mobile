import React, { 
    useState,
    useEffect
} from 'react';
import AsyncStorage from '@react-native-community/async-storage'; 
import api from '../../services/api';
import {
    View,
    Text,
    Switch,
    Button
} from 'react-native';
import { StyleTheme } from './style';
import HeaderBar from '../../components/Header';
import Loading from '../Loading';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { translate } from '../../components/StringTrataments';
import { ToggleTheme } from '../../services/actions';
import AdSense from '../../components/AdSense';

var translation = translate("Settings");

const Settings = ({navigation, dispatch, theme, Ari, lang, dir, paid, email}) => {
    
    const [ifLoad, setLoading] = useState(false);
    const [dis, setDis] = useState(true);

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
    useEffect(()=> {
       setDis(paid === "false" ? true : false);
    }, []);
    function themeHandler(e) {
        AsyncStorage.setItem('theme', JSON.stringify(e));
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            dispatch(ToggleTheme(JSON.stringify(e), Ari, lang, dir));
            navigation.navigate('Splash');
        }, 2000);
    }
    function langHandler(e) {
        AsyncStorage.setItem('lang', e ? "pt" : "en");
        api.put('/userapplang', {lang: e ? "pt" : "en", email})
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            dispatch(ToggleTheme(theme, Ari, e ? "pt" : "en", dir));
            navigation.navigate('Splash');
        }, 2000);
    }
    function dirHandler(e) {
        AsyncStorage.setItem('dir', e ? "right" : "left");
        setLoading(true);
        setTimeout(()=>{
            dispatch(ToggleTheme(theme, Ari, lang, e ? "right" : "left"));
            navigation.navigate('Splash');
        }, 2000);
    }
    function clearHandler() {
        setLoading(true);
        setTimeout(()=>{
            AsyncStorage.clear();
            navigation.navigate('Splash');
        }, 3000);
    }
    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={translation[lang].header} navigation={navigation} theme={theme}/>
            
                {
                    ifLoad ? (
                        <Loading />
                    ) : (
                        <ScrollView>
                            <View style={styles.SettingsItens}>
                                <View style={styles.grpSetting}>
                                    <Text style={styles.Title}>{translation[lang].lang.title}</Text> 
                                    <Text style={styles.Des}>{translation[lang].lang.desc}</Text> 
                                    <View style={styles.Opt}>
                                        <Switch 
                                            value={lang === "pt" ? true : false}
                                            thumbColor="#f2f2f2"
                                            trackColor="#246175"
                                            ios_backgroundColor="#246175"
                                            onValueChange={langHandler}
                                        />
                                    </View> 
                                </View>
                                <View style={styles.grpSetting}>
                                    <Text style={styles.Title}>{translation[lang].clear.title}</Text> 
                                    <Text style={styles.Des}>{translation[lang].clear.desc}</Text> 
                                    <View style={styles.Opt}>
                                        <Button 
                                            value={lang}
                                            title="Clear.."                            
                                            thumbColor="#f2f2f2"
                                            color="#246175"
                                            onPress={clearHandler}
                                        />
                                    </View> 
                                </View>
                                <View style={styles.grpSetting}>
                                    <Text style={styles.Title}>{translation[lang].menuSide.title}</Text> 
                                    <Text style={styles.Des}>{translation[lang].menuSide.desc}</Text> 
                                    <View style={styles.Opt}>
                                        <Switch 
                                            value={dir === "right" ? true : false}
                                            thumbColor="#f2f2f2"
                                            trackColor="#246175"
                                            ios_backgroundColor="#246175"
                                            onValueChange={dirHandler}
                                            disabled={dis}
                                        />
                                    </View> 
                                </View>
                                <View style={styles.grpSetting}>
                                    <Text style={styles.Title}>{translation[lang].theme.title}</Text> 
                                    <Text style={styles.Des}>{translation[lang].theme.desc}</Text> 
                                    <View style={styles.Opt}>
                                        <Switch 
                                            value={theme === "true" ? true : false}
                                            thumbColor="#f2f2f2"
                                            trackColor="#246175"
                                            ios_backgroundColor="#246175"
                                            onValueChange={themeHandler}
                                            disabled={dis}
                                        />
                                    </View> 
                                </View>
                            </View>
                        </ScrollView>
                    )
                }
            <AdSense /> 
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
    email: state.userinfo.email, 
}))(Settings);