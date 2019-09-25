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
import WeatherforType from '../../components/typeWeather';
import { StyleTheme } from './style';
import { FindString, percent, translate } from '../../components/StringTrataments';
import { connect } from 'react-redux';
import AdSense from '../../components/AdSense';

var translation = translate("PkmInfo");

const PkmInfo = ({screenProps, theme, Ari, lang}) => {
    const [stAtk, setstAtk] = useState(0);
    const [stDef, setstDef] = useState(0);
    const [stStm, setstStm] = useState(0);
    const pkm = screenProps.state.params.Pkm;

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
        screenProps.navigate('ListaPkms');
    }
    const Gender = () => {
        return (
            <Text style={styles.lblGender}>{ lang === "en" ? pkm.genders : (
                pkm.genders === "Male" ? "Macho" : (
                    pkm.genders === "Female" ? "Fêmea" : (
                        pkm.genders === "Male / Female" ? "Macho / Fêmea" : (
                            pkm.genders === "Unknown" ? "Sem gênero" : ""
                        )
                    )
                )
            )}</Text>
        );
    }
    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={pkm.name} navigation={screenProps} theme={theme}/>
            <AdSense />
            <ScrollView style="flex: 1">
                <View style={styles.InfoItens}>
                        <View style={styles.imgWrap}>
                            <View style={styles.typeGroup}>
                                <Text style={styles.txtType}>{translation[lang].pkm.type}</Text>
                                <View style={styles.type}>
                                    {   
                                        pkm.types.map((type, index) =>(
                                            <CheckType key={index} type={type}/> 
                                        ))
                                    }
                                </View>
                            </View>
                            <TouchableOpacity style={styles.back} onPress={backHandler} activeOpacity={1}>
                                <Image source={btn_back}></Image>
                            </TouchableOpacity>
                            <Image style={styles.pkm_img} source={{uri: pkm.img}}></Image>
                        </View>
                            <View style={styles.genderGroup}>
                                <Text style={styles.txtGender}>{translation[lang].pkm.gender}</Text>
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

                                </View>
                                <Gender />
                            </View>
                        <View style={styles.infoPkm}>
                            <View style={styles.sizeAndHeight}>
                                <View style={styles.Height}>
                                    <Text style={styles.titlesizeAndHeight}>{translation[lang].pkm.height}</Text>
                                    <Text style={styles.txtsizeAndHeight}>{pkm.height}</Text>
                                </View>
                                <View style={styles.Weight}>
                                    <Text style={styles.titlesizeAndHeight}>{translation[lang].pkm.weight}</Text>
                                    <Text style={styles.txtsizeAndHeight}>{pkm.weight}</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.description}>{translation[lang].pkm.description} { lang === "pt" && pkm.description_pt !== undefined ? pkm.description_pt : pkm.description_dex }</Text>
                    
                        <View style={styles.status}>
                            <View style={styles.grpStat}>
                                <View style={styles.lblStatWrapper}>
                                    <Text style={styles.cp}>CP: {pkm.cp}</Text>
                                </View>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    color="#B8860B"
                                    indeterminate={false}
                                    style={styles.progress}
                                    progress={percent(stAtk, 'atk')}
                                />
                            </View>
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
                                    color="#6600cc"
                                    indeterminate={false}
                                    style={styles.progress}
                                    progress={percent(stStm, 'stm')}
                                />
                            </View>
                        </View>
                        <WeakAndStrong theme={theme} pkm={pkm} Ari={Ari} lang={lang} />
                        <WeatherforType theme={theme} pkm={pkm} Ari={Ari} lang={lang} /> 
                </View>
            </ScrollView>
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
}))(PkmInfo);