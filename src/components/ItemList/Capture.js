import React, { 
    useState
} from 'react';
import {
    View,
    ScrollView,
    Modal,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { translate } from '../../components/StringTrataments';

import SilverPinap from './img/berry/SilverPinap.png';
import GoldenRazz from './img/berry/GoldenRazz.png';
import PremierBall from './img/ball/PremierBall.png';
import UltraBall from './img/ball/UltraBall.png';
import GreatBall from './img/ball/GreatBall.png';
import HeaderBar from '../Header';
import Pokeball from './img/ball/pokeball.png';
import Nanab from './img/berry/Nanab.png';
import Pinap from './img/berry/Pinap.png';
import Razz from './img/berry/Razz.png';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import AdSense from '../AdSense';

var translation = translate("Itens");

const ItemList = ({theme, Ari, navigation, lang}) => {
    const [ModalState, setModalState] = useState(false);
    const [Title, setTitle] = useState('');
    const [Des, setDes] = useState('');
    const [Itemimg, setItemimg] = useState(null);
    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    function closeModal(){
        setModalState(false);
    }
    function setModal(){
        setModalState(true);
    }
    const MyModa = ({Visibility, Title, Des, Itemimg}) => {

        return(
            <Modal style={styles.modalContainer} animationType={"slide"} visible={Visibility} transparent={true} onRequestClose={closeModal} onDismiss={closeModal}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeModal} onPress={closeModal}>
                        <Text style={styles.txtCloseModal}>{translation[lang].modal.close}</Text>
                    </TouchableOpacity>
                    <View style={styles.MyitemModal}>
                        <View style={styles.imgWrapper}>
                            <Image source={Itemimg} style={styles.img}></Image>
                        </View>
                        <ScrollView>
                            <Text style={styles.titleModal}>{Title}</Text>
                            <Text style={styles.desModal}>{Des}</Text>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        );
    }
    return(
        <View style={styles.container}>     
            <HeaderBar theme={theme} Headertitle={translation[lang].header.capture} navigation={navigation} />
            <AdSense />
            <View style={styles.ItemItens}>       
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Nanab.label);
                    setDes(translation.Capture[lang].Nanab.description);
                    setItemimg(Nanab);
                    setModal();
                }}>
                    <Image style={styles.img} source={Nanab}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Nanab.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Pinap.label);
                    setDes(translation.Capture[lang].Pinap.description);
                    setItemimg(Pinap);
                    setModal();
                }}>
                    <Image style={styles.img} source={Pinap}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Pinap.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Razz.label);
                    setDes(translation.Capture[lang].Razz.description);
                    setItemimg(Razz);
                    setModal();
                }}>
                    <Image style={styles.img} source={Razz}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Razz.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].SilverPinap.label);
                    setDes(translation.Capture[lang].SilverPinap.description);
                    setItemimg(SilverPinap);
                    setModal();
                }}>
                    <Image style={styles.img} source={SilverPinap}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].SilverPinap.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].GoldenRazz.label);
                    setDes(translation.Capture[lang].GoldenRazz.description);
                    setItemimg(GoldenRazz);
                    setModal();
                }}>
                    <Image style={styles.img} source={GoldenRazz}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].GoldenRazz.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Pokeball.label);
                    setDes(translation.Capture[lang].Pokeball.description);
                    setItemimg(Pokeball);
                    setModal();
                }}>
                    <Image style={styles.img} source={Pokeball}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Pokeball.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Greatball.label);
                    setDes(translation.Capture[lang].Greatball.description);
                    setItemimg(GreatBall);
                    setModal();
                }}>
                    <Image style={styles.img} source={GreatBall}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Greatball.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Ultraball.label);
                    setDes(translation.Capture[lang].Ultraball.description);
                    setItemimg(UltraBall);
                    setModal();
                }}>
                    <Image style={styles.img} source={UltraBall}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Ultraball.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Capture[lang].Premierball.label);
                    setDes(translation.Capture[lang].Premierball.description);
                    setItemimg(PremierBall);
                    setModal();
                }}>
                    <Image style={styles.img} source={PremierBall}></Image>
                    <Text style={styles.label}>{translation.Capture[lang].Premierball.label}</Text>
                </TouchableOpacity>
            </View>
            <MyModa Visibility={ModalState} Title={Title} Des={Des} Itemimg={Itemimg}/>
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
}))(ItemList);