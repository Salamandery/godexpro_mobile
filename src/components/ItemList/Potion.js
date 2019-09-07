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
            <View style={styles.ItemItens}>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Potion");
                    setDes("A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 20 points.\n\nUnlocked at Level: 5.\n\nRestores: 20 HP.");
                    setItemimg(Potion);
                    setModal();
                }}>
                    <Image style={styles.img} source={Potion}></Image>
                    <Text style={styles.label}>{"Potion"}</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Super Potion");
                    setDes("A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 50 points.\n\nUnlocked at Level: 10.\n\nRestores: 50 HP.");
                    setItemimg(SuperPotion);
                    setModal();
                }}>
                    <Image style={styles.img} source={SuperPotion}></Image>
                    <Text style={styles.label}>{"Super Potion"}</Text>
                </TouchableOpacity>           
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Hyper Potion");
                    setDes("A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 200 points.\n\nUnlocked at Level: 15.\n\nRestores: 200 HP.");
                    setItemimg(HyperPotion);
                    setModal();
                }}>
                    <Image style={styles.img} source={HyperPotion}></Image>
                    <Text style={styles.label}>{"Hyper Potion"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Max Potion");
                    setDes("A spray-type medicine that completely restores all HP of a single Pokémon.\n\nCoins: 200 - 10x\n\nUnlocked at Level: 25.\n\nRestores: Completely restores the Max HP.");
                    setItemimg(MaxPotion);
                    setModal();
                }}>
                    <Image style={styles.img} source={MaxPotion}></Image>
                    <Text style={styles.label}>{"Max Potion"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Revive");
                    setDes("A medicine that can revive fainted Pokémon. It also restores half of a fainted Pokémon's maximum HP.\n\nUnlocked at Level: 5\n\nRestores: Revives Pokemon With Half of its Max HP.");
                    setItemimg(Revive5lvl);
                    setModal();
                }}>
                    <Image style={styles.img} source={Revive5lvl}></Image>
                    <Text style={styles.label}>{"Revive"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Max Revive");
                    setDes("A medicine that can revive fainted Pokémon. It also fully restores a fainted Pokémon's maximum HP.\n\nCoins: 180 - 6x\n\nUnlocked at Level: 30\n\nRestores: Revives Pokemon With the full of its Max HP Restored.");
                    setItemimg(Revivemax);
                    setModal();
                }}>
                    <Image style={styles.img} source={Revivemax}></Image>
                    <Text style={styles.label}>{"Max Revive"}</Text>
                </TouchableOpacity>
            </View>
            <MyModa Visibility={ModalState} Title={Title} Des={Des} Itemimg={Itemimg} />
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(ItemList);