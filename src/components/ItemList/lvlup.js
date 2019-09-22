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
import RareCandy from './img/buff/RareCandy.png';
import DragonScale from './img/evoitem/DragonScale.png';
import KingsRock from './img/evoitem/KingsRock.png';
import MetalCoat from './img/evoitem/MetalCoat.png';
import SinnohStone from './img/evoitem/SinnohStone.png';
import SunStone from './img/evoitem/SunStone.png';
import Upgrade from './img/evoitem/Upgrade.png';
import TMsChargedMoves from './img/tm/TMsChargedMoves.png';
import TMsQuickFastMoves from './img/tm/TMsQuickFastMoves.png';
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
            <HeaderBar theme={theme} Headertitle={translation[lang].header.lvlup} navigation={navigation} />
            <AdSense /> 
            <View style={styles.ItemItens}>               
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].RareCandy.label);
                    setDes(translation.lvlup[lang].RareCandy.description);
                    setItemimg(RareCandy);
                    setModal();
                }}>
                    <Image style={styles.img} source={RareCandy}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].RareCandy.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].DragonScale.label);
                    setDes(translation.lvlup[lang].DragonScale.description);
                    setItemimg(DragonScale);
                    setModal();
                }}>
                    <Image style={styles.img} source={DragonScale}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].DragonScale.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].KingsRock.label);
                    setDes(translation.lvlup[lang].KingsRock.description);
                    setItemimg(KingsRock);
                    setModal();
                }}>
                    <Image style={styles.img} source={KingsRock}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].KingsRock.label}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].MetalCoat.label);
                    setDes(translation.lvlup[lang].MetalCoat.description);
                    setItemimg(MetalCoat);
                    setModal();
                }}>
                    <Image style={styles.img} source={MetalCoat}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].MetalCoat.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].SinnohStone.label);
                    setDes(translation.lvlup[lang].SinnohStone.description);
                    setItemimg(SinnohStone);
                    setModal();
                }}>
                    <Image style={styles.img} source={SinnohStone}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].SinnohStone.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].SunStone.label);
                    setDes(translation.lvlup[lang].SunStone.description);
                    setItemimg(SunStone);
                    setModal();
                }}>
                    <Image style={styles.img} source={SunStone}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].SunStone.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].Upgrade.label);
                    setDes(translation.lvlup[lang].Upgrade.description);
                    setItemimg(Upgrade);
                    setModal();
                }}>
                    <Image style={styles.img} source={Upgrade}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].Upgrade.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].FastTm.label);
                    setDes(translation.lvlup[lang].FastTm.description);
                    setItemimg(TMsQuickFastMoves);
                    setModal();
                }}>
                    <Image style={styles.img} source={TMsQuickFastMoves}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].FastTm.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle(translation.lvlup[lang].ChangedTm.label);
                    setDes(translation.lvlup[lang].ChangedTm.description);
                    setItemimg(TMsChargedMoves);
                    setModal();
                }}>
                    <Image style={styles.img} source={TMsChargedMoves}></Image>
                    <Text style={styles.label}>{translation.lvlup[lang].ChangedTm.title}</Text>
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