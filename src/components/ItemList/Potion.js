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

import HeaderBar from '../../components/Header';
import HyperPotion from './img/potion/HyperPotion.png';
import MaxPotion from './img/potion/MaxPotion.png';
import Potion from './img/potion/Potion.png';
import SuperPotion from './img/potion/SuperPotion.png';
import Revive5lvl from './img/revive/Revive5lvl.png';
import Revivemax from './img/revive/Revivemax.png';
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
            <HeaderBar theme={theme} Headertitle={translation[lang].header.potion} navigation={navigation} />
            <AdSense />
            <View style={styles.ItemItens}>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Potion[lang].Potion.label);
                    setDes(translation.Potion[lang].Potion.description);
                    setItemimg(Potion);
                    setModal();
                }}>
                    <Image style={styles.img} source={Potion}></Image>
                    <Text style={styles.label}>{translation.Potion[lang].Potion.label}</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Potion[lang].SuperPotion.label);
                    setDes(translation.Potion[lang].SuperPotion.description);
                    setItemimg(SuperPotion);
                    setModal();
                }}>
                    <Image style={styles.img} source={SuperPotion}></Image>
                    <Text style={styles.label}>{translation.Potion[lang].SuperPotion.label}</Text>
                </TouchableOpacity>           
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Potion[lang].HyperPotion.label);
                    setDes(translation.Potion[lang].HyoerPotion.description);
                    setItemimg(HyperPotion);
                    setModal();
                }}>
                    <Image style={styles.img} source={HyperPotion}></Image>
                    <Text style={styles.label}>{translation.Potion[lang].HyperPotion.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Potion[lang].MaxPotion.label);
                    setDes(translation.Potion[lang].MaxPotion.description);
                    setItemimg(MaxPotion);
                    setModal();
                }}>
                    <Image style={styles.img} source={MaxPotion}></Image>
                    <Text style={styles.label}>{translation.Potion[lang].MaxPotion.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Potion[lang].Reviver.label);
                    setDes(translation.Potion[lang].Reviver.description);
                    setItemimg(Revive5lvl);
                    setModal();
                }}>
                    <Image style={styles.img} source={Revive5lvl}></Image>
                    <Text style={styles.label}>{translation.Potion[lang].Reviver.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Potion[lang].MaxReviver.title);
                    setDes(translation.Potion[lang].MaxReviver.description);
                    setItemimg(Revivemax);
                    setModal();
                }}>
                    <Image style={styles.img} source={Revivemax}></Image>
                    <Text style={styles.label}>{translation.Potion[lang].MaxReviver.label}</Text>
                </TouchableOpacity>
            </View>
            <MyModa Visibility={ModalState} Title={Title} Des={Des} Itemimg={Itemimg} />
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