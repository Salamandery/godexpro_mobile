import React, { 
    useState
} from 'react';
import AsyncStorage from '@react-native-community/async-storage'; 
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

var translation = translate("Settings");

const Settings = ({navigation, theme, Ari, lang}) => {
    const [ifLoad, setLoading] = useState(false);

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    function themeHandler(e) {
        AsyncStorage.setItem('theme', JSON.stringify(e));
        setLoading(true);
        setTimeout(()=>{
            navigation.navigate('Login');
        }, 2000);
    }
    function langHandler(e) {
        AsyncStorage.setItem('lang', e ? "pt" : "en");
        setLoading(true);
        setTimeout(()=>{
            navigation.navigate('Login');
        }, 2000);
    }
    function clearHandler() {
        setLoading(true);
        setTimeout(()=>{
            AsyncStorage.clear();
            navigation.navigate('Login');
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
                                    <Text style={styles.Title}>{translation[lang].theme.title}</Text> 
                                    <Text style={styles.Des}>{translation[lang].theme.desc}</Text> 
                                    <View style={styles.Opt}>
                                        <Switch 
                                            value={
                                                theme === "true" ? true : false
                                            }
                                            thumbColor="#f2f2f2"
                                            trackColor="#246175"
                                            ios_backgroundColor="#246175"
                                            onValueChange={themeHandler}
                                        />
                                    </View> 
                                </View>
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
                            </View>
                        </ScrollView>
                    )
                }
                
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(Settings);