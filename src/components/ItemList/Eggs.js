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
import EggIncubator from './img/Incubator/Egg-Incubator.png';
import EggIncubatorLimitedSuper from './img/Incubator/Egg-IncubatorLimitedSuper.png';
import EggIncubatorLimited from './img/Incubator/Egg-IncubatorLimited.png';
import Egg10km from './img/egg/Egg10km.png';
import Egg7km from './img/egg/Egg7km.png';
import Egg2km from './img/egg/Egg2km.png';
import Egg5km from './img/egg/Egg5km.png';
import AdSense from '../AdSense';
import { StyleTheme } from './style';
import { connect } from 'react-redux';

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
            <HeaderBar theme={theme} Headertitle={translation[lang].header.egg} navigation={navigation} />
            <AdSense />
            <View style={styles.ItemItens}>               
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].EggIncubator1.label);
                    setDes(translation.Eggs[lang].EggIncubator1.description);
                    setItemimg(EggIncubator);
                    setModal();
                }}>
                    <Image style={styles.img} source={EggIncubator}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].EggIncubator1.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].EggIncubator2.label);
                    setDes(translation.Eggs[lang].EggIncubator2.description);
                    setItemimg(EggIncubatorLimited);
                    setModal();
                }}>
                    <Image style={styles.img} source={EggIncubatorLimited}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].EggIncubator2.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].SuperIncubator.label);
                    setDes(translation.Eggs[lang].SuperIncubator.description);
                    setItemimg(EggIncubatorLimitedSuper);
                    setModal();
                }}>
                    <Image style={styles.img} source={EggIncubatorLimitedSuper}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].SuperIncubator.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].Egg2.label);
                    setDes(translation.Eggs[lang].Egg2.description);
                    setItemimg(Egg2km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg2km}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].Egg2.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].Egg5.label);
                    setDes(translation.Eggs[lang].Egg5.description);
                    setItemimg(Egg5km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg5km}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].Egg5.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].Egg7.label);
                    setDes(translation.Eggs[lang].Egg7.description);
                    setItemimg(Egg7km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg7km}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].Egg7.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.Eggs[lang].Egg10.label);
                    setDes(translation.Eggs[lang].Egg10.description);
                    setItemimg(Egg10km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg10km}></Image>
                    <Text style={styles.label}>{translation.Eggs[lang].Egg10.label}</Text>
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