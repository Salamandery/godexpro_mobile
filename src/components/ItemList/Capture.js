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
                    setTitle("Nanab");
                    setDes("Feed this to a Pokémon to calm it down, making it less erratic.\n\nDetails: Nanab Berry is kind of berry that will slow a Pokémon's movement up to 95%, making it easier to capture on the Trainer's next attempt.\n\nUnlocked at Level: They can be obtained by trainer at Level 1 and higher.\n\nHow to Get: Just like two other kinds of berries, Nanab Berries can be obtained from spinning Photo Disc at PokéStops and Gyms and as reward for leveling up.\n\n(Note): It is particularly useful on hovering Pokémon that move around. There are several such move patterns: darting from one spot to another rapidly (Magnemite), moving about smoothly (Abra), or flying upwards and staying for some time (Pidgeotto, Golbat)");
                    setItemimg(Nanab);
                    setModal();
                }}>
                    <Image style={styles.img} source={Nanab}></Image>
                    <Text style={styles.label}>{"Nanab"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Pinap");
                    setDes("Feed this to a Pókemon to receive more Candy when you catch it.\n\nDetails: Pinap Berry is kind of berry that when fed a Pokémon while trying to capture it, it will double the amount of Candy the Trainer will receive if their next capture attempt is successful.\n\nUnlocked at Level: They can be obtained by trainer at Level 18 and higher.\n\nHow to Get: Just like two other kinds of berries, Pinap Berries can be obtained from spinning Photo Disc at PokéStops and Gyms and as reward for leveling up.\n\n(Note): It is particularly useful on Pokémon that are the 2nd and 3rd stages of their evolution line, as they drop more candy (5 and 10 respectively) than their 1st stage form (only 3 candies). However, those Pokémon are also usually harder to catch, making it more likely to break out and waste the berry.");
                    setItemimg(Pinap);
                    setModal();
                }}>
                    <Image style={styles.img} source={Pinap}></Image>
                    <Text style={styles.label}>{"Pinap"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Razz");
                    setDes("Feed this to a Pókemon to make it easier to catch.\n\nDetails: Razz Berry is kind of berry that when fed a Pokémon while trying to capture it increases the chance of success.\n\nUnlocked at Level: They can be obtained by trainer at Level 8 and higher.\n\nHow to Get: Just like two other kinds of berries, Razz Berries can be obtained from spinning Photo Disc at PokéStops and Gyms and as reward for leveling up.");
                    setItemimg(Razz);
                    setModal();
                }}>
                    <Image style={styles.img} source={Razz}></Image>
                    <Text style={styles.label}>{"Razz"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Silver Pinap");
                    setDes("Feed this to a Pókemon to receive more Candy when catch it and make it easier to catch.\n\nDetails: Silver Pinap Berries increases a Trainer's chance of catching an encountered Pokémon by 1.8 times and doubles the amount of Candy given when Pokémon is successfully caught.\n\nHow to Get: They can be obtained by completing certain Field Research tasks as well as being rewarded for progressing through the later stages of A Ripple in Time and A Spooky Message.");
                    setItemimg(SilverPinap);
                    setModal();
                }}>
                    <Image style={styles.img} source={SilverPinap}></Image>
                    <Text style={styles.label}>{"Silver Pinap"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Golden Razz");
                    setDes("Feed this to a Pokémon to make it much easier to catch. Feed this to a Pokémon on a Gym to fully restore its motivation.\n\nDetails: Golden Razz Berries will greatly increase a Trainer's chances of catching a Pokémon they encounter in the wild and can also be given to a Pokémon assigned to a Gym to fully recover its motivation meter.\n\nHow to Get: This kind of berry can be only obtained as a reward from Raid Battle.");
                    setItemimg(GoldenRazz);
                    setModal();
                }}>
                    <Image style={styles.img} source={GoldenRazz}></Image>
                    <Text style={styles.label}>{"Golden Razz"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Pokeball");
                    setDes("A device for catching wild Pokémon. It's thrown like a ball, comfortably encapsulating its target.\n\nCoins: 100 - 20x\nCoins: 460 - 100x\nCoins: 800 - 200x\n\nThese are regular Pokeballs and can be purchased through the Pokemon Go Shop.");
                    setItemimg(Pokeball);
                    setModal();
                }}>
                    <Image style={styles.img} source={Pokeball}></Image>
                    <Text style={styles.label}>{"Pokeball"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Great ball");
                    setDes("A high-performance ball with a higher catch rate than a standard Pokéball.\n\nGreat Pokeballs cannot be purchased through shop. These Poke Balls have higher chance to capture Pokemon then regular ones.");
                    setItemimg(GreatBall);
                    setModal();
                }}>
                    <Image style={styles.img} source={GreatBall}></Image>
                    <Text style={styles.label}>{"Great ball"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Ultra ball");
                    setDes("An ultra-performance ball with a higher catch rate than a Great Ball.\n\nUltra Pokeballs are the best in Pokemon Go. Ultra Balls have the highest capture rate out of all the available balls.");
                    setItemimg(UltraBall);
                    setModal();
                }}>
                    <Image style={styles.img} source={UltraBall}></Image>
                    <Text style={styles.label}>{"Ultra ball"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Premier ball");
                    setDes("");
                    setItemimg(PremierBall);
                    setModal();
                }}>
                    <Image style={styles.img} source={PremierBall}></Image>
                    <Text style={styles.label}>{"Premier ball"}</Text>
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