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
            <HeaderBar theme={theme} Headertitle={"Evolve Items"} navigation={navigation} />
            <View style={styles.ItemItens}>               
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Rare Candy");
                    setDes("A mysterious candy. When used on a Pokémon, it turns into the Pokémon's Candy.\n\nThe Rare Candy can transform into Candy for any Pokémon.\n\nFor example: when used on a Pikachu, one Rare Candy turns into one Pikachu Cand. \n\nObtaining: You can obtain Pokemon GO Rare Candy exclusively only from Raid Boss Battles.");
                    setItemimg(RareCandy);
                    setModal();
                }}>
                    <Image style={styles.img} source={RareCandy}></Image>
                    <Text style={styles.label}>{"Rare Candy"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Dragon Scale");
                    setDes("A scale that can make certain species of Pokémon evolve. It is very tough and inflexible.\n\nPokémon: Seadra / Evolution: Kingdra");
                    setItemimg(DragonScale);
                    setModal();
                }}>
                    <Image style={styles.img} source={DragonScale}></Image>
                    <Text style={styles.label}>{"Dragon Scale"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("King's Rock");
                    setDes("A rock that can make certain species of Pokémon evolve. It looks like a crown.\n\nPokémon: Poliwhirl / Evolution: Politoed \nPokémon: Slowpoke/ Evolution: Slowking");
                    setItemimg(KingsRock);
                    setModal();
                }}>
                    <Image style={styles.img} source={KingsRock}></Image>
                    <Text style={styles.label}>{"King's Rock"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Metal Coat");
                    setDes("A coating that can make certain species of Pokémon evolve. It is a special metallic film.\n\nPokémon: Onix / Evolution: Steelix \nPokémon: Scyther/ Evolution: Scizor");
                    setItemimg(MetalCoat);
                    setModal();
                }}>
                    <Image style={styles.img} source={MetalCoat}></Image>
                    <Text style={styles.label}>{"Metal Coat"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Sinnoh Stone");
                    setDes("A special stone originally found in the Sinnoh region that can make certain species of Pokémon evolve. It is very tough and has a beautiful sheen.\n\nPokémon: Electabuzz / Evolution:Electivire\nPokémon: Sneasel / Evolution: Weavile\nPokémon: Roselia / Evolution: Roserade\nPokémon: Rhydon / Evolution: Rhyperionr\nPokémon: Murkrow / Evolution: Honchkrow\nPokémon:Porygon2  / Evolution:Porygon - Z\nPokémon: Togetic / Evolution: Togekiss\nPokémon: Magmar / Evolution: Magmortar\nPokémon: Misdreavus / Evolution: Mismagius\nPokémon: Gligar / Evolution: Gliscor\nPokémon: Dusclops / Evolution: Dusknoir\nPokémon: Swinub / Evolution: Mamoswine\nPokémon: Aipom / Evolution: Ambinpom\nPokémon: Yanma / Evolution: Yanmega\nPokémon: Tangela / Evolution: Tangrowth\nPokémon: Lickitung / Evolution: Lickilicky\nPokémon: Kirlia / Evolution: Gallade\nPokémon: Snorunt / Evolution: Froslass");
                    setItemimg(SinnohStone);
                    setModal();
                }}>
                    <Image style={styles.img} source={SinnohStone}></Image>
                    <Text style={styles.label}>{"Sinnoh Stone"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Sun Stone");
                    setDes("A peculiar stone that can make certain species of Pokémon evolve. It burns as red as the evening sun.\n\nPokémon: Gloom/ Evolution: Bellossom \nPokémon: Sunkern / Evolution: Sunflora");
                    setItemimg(SunStone);
                    setModal();
                }}>
                    <Image style={styles.img} source={SunStone}></Image>
                    <Text style={styles.label}>{"Sun Stone"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Upgrade");
                    setDes("A transparent device that make certain species of Pokémon evolve. It was produced by Silph Co.\n\nPokémon: Porygon / Evolution: Porygon2");
                    setItemimg(Upgrade);
                    setModal();
                }}>
                    <Image style={styles.img} source={Upgrade}></Image>
                    <Text style={styles.label}>{"Upgrade"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Fast TM");
                    setDes("This Technical Machine teaches the Pokémon a new Fast Attack.\n\nUnlocked at Level: 15. \nHow it Works: Teaches your Pokemon a New Random Fast Move. \nHow to Get: Drops in Raid Battles.");
                    setItemimg(TMsQuickFastMoves);
                    setModal();
                }}>
                    <Image style={styles.img} source={TMsQuickFastMoves}></Image>
                    <Text style={styles.label}>{"Fast TM"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Charged TM");
                    setDes("This Technical Machine teaches the Pokémon a new Charged Attack.\n\nUnlocked at Level: 25. \nHow it Works: Teaches your Pokemon a New Random Fast Move. \nHow to Get: Drops in Raid Battles.");
                    setItemimg(TMsChargedMoves);
                    setModal();
                }}>
                    <Image style={styles.img} source={TMsChargedMoves}></Image>
                    <Text style={styles.label}>{"Charged TM"}</Text>
                </TouchableOpacity>
            </View>
            <MyModa Visibility={ModalState} Title={Title} Des={Des} Itemimg={Itemimg} />
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(ItemList);