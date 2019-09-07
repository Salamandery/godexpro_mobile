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
            <View style={styles.ItemItens}>               
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Egg Incubator ∞");
                    setDes("A device that incubates an Egg as you walk until it's ready to hatch Unlimited use!\n\nYou can use this as many times as you want. \n\nPokemon GO Hatching Strategy: Using your orange incubator on 2KM Eggs is better than wasting your blue limited uses.");
                    setItemimg(EggIncubator);
                    setModal();
                }}>
                    <Image style={styles.img} source={EggIncubator}></Image>
                    <Text style={styles.label}>{"∞"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Egg Incubator");
                    setDes("A device that incubates an Egg as you walk until it is ready to hatch. Break after 3 uses.\n\nCoins: 150 - 1x\n\nYou can only use this 3 times before it breaks.");
                    setItemimg(EggIncubatorLimited);
                    setModal();
                }}>
                    <Image style={styles.img} source={EggIncubatorLimited}></Image>
                    <Text style={styles.label}>{"Egg Incubator"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Super Incubator");
                    setDes("A more powerful Egg incubator that helps Eggs hatch quickly. Break after 3 uses.\n\nCoins: 200 - 1x\n\nIt has distance multiplayer of 0.6666, which will Hatch Eggs 1.5 Times Faster than Regular Egg Incubators.");
                    setItemimg(EggIncubatorLimitedSuper);
                    setModal();
                }}>
                    <Image style={styles.img} source={EggIncubatorLimitedSuper}></Image>
                    <Text style={styles.label}>{"Super Incubator"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Egg 2km");
                    setDes("Bulbasaur, Charmander Squirtle, Abra, Gastly, Magikarp, Shellder, Krabby, Chikorita, Cyndaquil, Totodile, Midsreveaus, Igglybuff, Mudkip, Treecko, Meditite, Spoink, Torchic, Luvdisc, Wailmer, Togepi, Poochyena,  Pichu, Cleffa, Swinub, Swablu, Makuhita,  Machop, Aron, Turtwig, Piplup, Chimchar, Kricketot, Bonsly, Barboach, Spheal, Kricketot, Starly, Bidoof.");
                    setItemimg(Egg2km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg2km}></Image>
                    <Text style={styles.label}>{"Egg 2km"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Egg 5km");
                    setDes("Eevee, Lickitung, Sandshrew, Ponyta, Horsea, Psyduck, Cubone, Seel, Rhyhorn, Kabuto, Omanyte, Tangela, Gligar, Pineco, Yanma, Sneasel, Houndor, Mareep, Skarmory, Smoochum, MAgby, Cacnea, Anorith, Lileep, Lotad, Duskull, Trapinch, Shuppet, Wynaut, Clamperl, Buneary, Budew, Snover, Bronzor, Croagunk, Combee, Buizel, Skorupi, Finneon, Drifloon, Glameow, Cheubi, Hippopotas, Wynaut, Wingull, Tyrogue, Snorunt, Shuckle, Scyther, Pineco, Onix, Nosepass, Mudkip, Mantine, Girafarig, Elekid, Corphish, Baltoy, Azurill, Buneary.");
                    setItemimg(Egg5km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg5km}></Image>
                    <Text style={styles.label}>{"Egg 5km"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Egg 7km");
                    setDes("Alola Diglett, Alola Geodude, Alola Grimer, Alola Meowth, Alola Sandshrew, Alola Vulpix, Pichu, Cleffa, Igglybuff, Togepi, Smoochum, Tyrogue , Elekid, Magby, Azurill, Wynaut, Bonsly, Budew, Chingling, Munchlax, Mantyke, Riolu, Happiny.");
                    setItemimg(Egg7km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg7km}></Image>
                    <Text style={styles.label}>{"Egg 7km"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Egg 10km");
                    setDes("Aerodactyl, Lapras, Ralts, Slakoth, Mawile, Nincada, Sableye, Absol, Shieldon, Cranidos, Happiny, Munchlax, Chingling, Gible, Chansey,Porygon, Mareep, Beldum, Bagon, Lavitar, Feebas, Dratini, Shinx, Riolu.");
                    setItemimg(Egg10km);
                    setModal();
                }}>
                    <Image style={styles.img} source={Egg10km}></Image>
                    <Text style={styles.label}>{"Egg 10km"}</Text>
                </TouchableOpacity>
            </View>
            <MyModa Visibility={ModalState} Title={Title} Des={Des} Itemimg={Itemimg} />
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(ItemList);