import React , {
    useState,
    useEffect
} from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ProgressBarAndroid,
    TouchableOpacity
} from 'react-native';
import HeaderBar from '../../components/Header';
import btn_back from '../../default/back.png';
import fem from '../../default/fem.png';
import ma from '../../default/ma.png';
import CheckType from '../../components/checkType';
import WeakAndStrong from '../../components/WeakAndStrong';
import { StyleTheme } from './style';
import { FindString, percent } from '../../components/StringTrataments';
import WeatherforType from '../../components/typeWeather';
import { connect } from 'react-redux';

const PkmInfo = ({navigation, theme, Ari}) => {
    const [stAtk, setstAtk] = useState(0);
    const [stDef, setstDef] = useState(0);
    const [stStm, setstStm] = useState(0);
    const pkm = navigation.state.params.Pkm;

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    useEffect(()=> {
        function setStats() {
             setstAtk(pkm.atk);
             setstDef(pkm.def);
             setstStm(pkm.stm);
        }
        setStats();
    },[]);
    function checkGender(genders, toFind) {
        let str = 0;
        if (FindString(genders, toFind) !== -1 ) {
            str++;
        }
        return str;
    }
    function backHandler() {
        navigation.navigate('ListaPkms');
    }
    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={pkm.name} navigation={navigation} theme={theme}/>
            <ScrollView style="flex: 1">
                <View style={styles.InfoItens}>
                        <View style={styles.imgWrap}>
                            <TouchableOpacity style={styles.back} onPress={backHandler} activeOpacity={1}>
                                <Image source={btn_back}></Image>
                            </TouchableOpacity>
                            <Image style={styles.pkm_img} source={{uri: pkm.img}}></Image>
                        </View>

                        <View style={styles.infoPkm}>
                            <View style={styles.gender}>
                                {
                                    checkGender(pkm.genders, "Male") > 0 ? (
                                        <Image style={styles.img_sex} source={ma}></Image>
                                    ) : (null)
                                }
                                {
                                    checkGender(pkm.genders, "Female") > 0 ? (
                                        <Image style={styles.img_sex} source={fem}></Image>
                                    ) : (null)
                                }
                                <Text style={styles.lblGender}>{pkm.genders}</Text>
                            </View>

                            <Text style={styles.cp}>CP: {pkm.cp}</Text>
                            <View style={styles.type}>
                                {   
                                    pkm.types.map((type, index) =>(
                                        <CheckType key={index} type={type}/> 
                                    ))
                                }
                            </View>
                        </View>

                        <Text style={styles.description}>Description: {pkm.description_dex}</Text>
                    
                        <View style={styles.status}>
                            <View style={styles.grpStat}>
                                <View style={styles.lblStatWrapper}>
                                    <Text style={styles.atk}>ATK: {pkm.atk}</Text>
                                </View>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    color="#8B0000"
                                    indeterminate={false}
                                    style={styles.progress}
                                    progress={percent(stAtk, 'atk')}
                                />
                            </View>
                            <View style={styles.grpStat}>
                                <View style={styles.lblStatWrapper}>
                                    <Text style={styles.def}>DEF: {pkm.def}</Text>
                                </View>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    color="#4169E1"
                                    indeterminate={false}
                                    style={styles.progress}
                                    progress={percent(stDef, 'def')}
                                />
                            </View>
                            <View style={styles.grpStat}>
                                <View style={styles.lblStatWrapper}>
                                    <Text style={styles.stm}>STM: {pkm.stm}</Text>
                                </View>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    color="#B8860B"
                                    indeterminate={false}
                                    style={styles.progress}
                                    progress={percent(stStm, 'stm')}
                                />
                            </View>
                        </View>
                        <WeakAndStrong theme={theme} pkm={pkm} Ari={Ari} />
                        <WeatherforType theme={theme} pkm={pkm} Ari={Ari} /> 
                </View>
            </ScrollView>
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari }))(PkmInfo);