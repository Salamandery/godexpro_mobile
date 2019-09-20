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

import PokémonStorageUpgrade from './img/others/PokémonStorageUpgrade.png';
import MagneticLureModule from './img/lure/MagneticLureModule.png';
import LegendaryRaidPass from './img/passes/LegendaryRaidPass.png';
import GlacialLureModule from './img/lure/GlacialLureModule.png';
import MossyLureModule from './img/lure/MossyLureModule.png';
import NormalRaidPass from './img/passes/NormalRaidPass.png';
import TeamMedallion from './img/others/TeamMedallion.png';
import MysteryBox from './img/others/MysteryBox.png';
import BagUpgrade from './img/others/BagUpgrade.png';
import LureModule from './img/lure/LureModule.png';
import HeaderBar from '../Header';
import LuckyEgg from './img/buff/LuckyEggs.png';
import Stardust from './img/buff/Stardust.png';
import prempass from './img/passes/prempass.png';
import Incense from './img/buff/Incense.png';
import Camera from './img/others/Camera.png';
import Gift from './img/others/Gift.png';
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
            <HeaderBar theme={theme} Headertitle={translation[lang].header.other} navigation={navigation} />
            <AdSense />
            <ScrollView>
            <View style={styles.ItemItens}>   
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Gift");
                    setDes("A box that you can send to a friend. Contains a variety of useful items.\n\nDetails: A Gift is an item that can be sent to another Trainer. Gifts contain items that are of higher value than what Trainers normally obtain from spinning PokéStops, supporting the feeling that your friends are really helping you make the best of your Pokémon GO journey.\n\nOnly one gift can be sent to each Friend per day and at most 20 Gifts that can be opened in a single day.\nTrainers may have up to ten Gifts in their bag at any given time and they do not take up any space in the bag.\nIn order to obtain 7-km Egg from the received gift, trainer needs space in their eggs collection, exactly like in case of obtaining eggs from Photo Discs.\n\n(Note):There must be enough room in the Item Bag, before opening the gift.");
                    setItemimg(Gift);
                    setModal();
                }}>
                    <Image style={styles.img} source={Gift}></Image>
                    <Text style={styles.label}>{"Gift"}</Text>
                </TouchableOpacity>            
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Incense");
                    setDes("Incense with a mysterious fragrance that lures wild Pokémon to your location for 30 minutes.\n\nCoins: 80 - 1x\nCoins: 500 - 8x\n\nUnlock more at Levels: 7 – 10 – 15 – 20 – 25 – 30 – 35 – 40 they receive one Incense.\nat level 20 two of them, at level 30 three and at level 40 four Incenses.\n\nDetails: Incense, when activated, shows a pinkish aura around the Trainer. The effect will follow a trainer if the trainer continues to travel, though part of the appeal is being able to keep catching while remaining in one place. Pokémon lured by the incense will also have a pink aura.\n\nSpawns are based on the local biome the player is in.\n\nThis item cannot be obtained from a PokéStop itself. However, it can be received by reaching certain levels, or by purchasing it from the Shop for PokeCoin 80. A bundle containing eight Incenses can be purchased for PokeCoin 500 as well. It can be also rewarded for completing set of Special Research tasks.\n\n(Note): The Pokémon spawned by the incense do not exist in the \"Nearby box\". It spawns new Pokémon for a trainer to catch. The incense will spawn 1 Pokémon every 5 minutes if the trainer is standing still, and 1 Pokémon every 1 minute or 200 meters (whichever happens first) while moving. Other trainers are not affected by this item.");
                    setItemimg(Incense);
                    setModal();
                }}>
                    <Image style={styles.img} source={Incense}></Image>
                    <Text style={styles.label}>{"Incense"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Lucky Egg");
                    setDes("A Lucky Egg that's filled with happiness! Earns double XP for 30 minutes.\n\nCoins: 80 - 1x\nCoins: 500 - 8x\n\nUnlock more at Levels: 9, 10, 15, 25 and 35 they receive one Lucky Egg.\nat level 20 two of them, at level 30 three and at level 40 four Lucky Eggs.\n\nDetails: A Lucky Egg is an item that doubles gained XP for 30 minutes. After activating a Lucky Egg, its effect lasts whether the player is online or offline.\n\nThis item cannot be obtained from a PokéStop itself. However, it can be received by reaching certain levels, or by purchasing it from the Shop for PokeCoin 80. A bundle containing eight Lucky Eggs can be purchased for PokeCoin 500 as well. It can be also rewarded for completing set of Special Research tasks.\n\n(Note):  During the events at which Experience Points are being doubled Lucky Eggs still works doubling already doubled XP which results in quadruple XP for a trainer.");
                    setItemimg(LuckyEgg);
                    setModal();
                }}>
                    <Image style={styles.img} source={LuckyEgg}></Image>
                    <Text style={styles.label}>{"Lucky Egg"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Star Piece");
                    setDes("A small shard of a beautiful gem. Earns 50% more Stardust for 30 minutes.\n\nDetails: A Star Piece is an item that awards 50% more Stardust for 30 minutes. After activating a Star Piece, its effect lasts whether the player is online or offline.\n\nThis item cannot be obtained from a PokéStop itself. However, it can be received by purchasing it from the Shop. Bundles containing eight and 25 Star Pieces can be purchased as well. It can be also rewarded for completing set of Special Research tasks.");
                    setItemimg(Stardust);
                    setModal();
                }}>
                    <Image style={styles.img} source={Stardust}></Image>
                    <Text style={styles.label}>{"Star Piece"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Lure Module");
                    setDes("A Module that attracts Pokémon to a PokéStop for 30 minutes. The effect benefits other people nearby.\n\nCoins: 100 - 1x\nCoins: 680 - 8x\n\nDetails: A Lure Module is an item that trainer can use on PokéStop to attract wild Pokémon to appear near it. Unlike Incense, everyone can catch the attract Pokémon. Three advanced Lure Modules also cause certain Pokémon to evolve.\n\n(Note): Once used at a PokéStop, Pokémon of that type are more likely to spawn around that location. Note that not all creatures of those elements will appear, but to date, no Pokémon will exclusively spawn with these Lures enabled, so consider them a useful way to bulk up your collection of these types.");
                    setItemimg(LureModule);
                    setModal();
                }}>
                    <Image style={styles.img} source={LureModule}></Image>
                    <Text style={styles.label}>{"Lure"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Magnetic Lure Module");
                    setDes("An electronic Lure Module that attracts more Pokémon than usual for 30 minutes. It can also cause Evolution.\n\nCoins: 200 - 1x\n\nPokemon: Magneton / Evolution: Magnezone.\nPokemon: Nosepass / Evolution: Probopass.");
                    setItemimg(MagneticLureModule);
                    setModal();
                }}>
                    <Image style={styles.img} source={MagneticLureModule}></Image>
                    <Text style={styles.label}>{"Magnetic Lure"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Glacial Lure Module");
                    setDes("A frost Lure Module that attracts more Pokémon than usual for 30 minutes. It can also cause Evolution.\n\nCoins: 200 - 1x\n\nPokemon: Eevee / Glaceon.");
                    setItemimg(GlacialLureModule);
                    setModal();
                }}>
                    <Image style={styles.img} source={GlacialLureModule}></Image>
                    <Text style={styles.label}>{"Glacial Lure"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Mossy Lure Module");
                    setDes("A natural Lure Module that attracts more Pokémon than usual for 30 minutes. It can also cause Evolution.\n\nCoins: 200 - 1x\n\nPokemon: Eevee / Evolution: Leafeon.");
                    setItemimg(MossyLureModule);
                    setModal();
                }}>
                    <Image style={styles.img} source={MossyLureModule}></Image>
                    <Text style={styles.label}>{"Mossy Lure"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Raid Pass");
                    setDes("Pass to join a Raid Battle. You can get a free pass at Gym once per dat if you don't already have one.\n\nDetails: Trainers can receive one free Raid Pass per day by visiting a Gym, but can only hold one at a time.");
                    setItemimg(NormalRaidPass);
                    setModal();
                }}>
                    <Image style={styles.img} source={NormalRaidPass}></Image>
                    <Text style={styles.label}>{"Raid Pass"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Premium Raid pass");
                    setDes("Premium Raid Pass to join a Raid Battle. You can use this pass anytime.\n\nCoins: 100 - 1x\n\nDetails: A Premium Raid Pass that can be purchased from the in-game Shop.");
                    setItemimg(prempass);
                    setModal();
                }}>
                    <Image style={styles.img} source={prempass}></Image>
                    <Text style={styles.label}>{"Premium Pass"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("EX Raid Pass");
                    setDes("EX Raid Pass to join a special Raid Battle. You can use this pass only at the specified limited-time event.\n\nDetails: The method for obtaining one is currently unknown because this feature is undergoing beta-testing. Select Trainers will receive an EX Raid Pass via their Journal. When the user clicks on the item in the journal, an invitation will be presented and provide information as to when and where the EX Raid Battle will occur. \n\nMany reports indicate that the chosen Gym will be one that has been recently raided by the Trainer in the past couple of days.\n\n(Note): Starting on September 20, 2018, when a trainer receives a pass, they may invite one Ultra or Best Friend to participate in the raid with them.");
                    setItemimg(LegendaryRaidPass);
                    setModal();
                }}>
                    <Image style={styles.img} source={LegendaryRaidPass}></Image>
                    <Text style={styles.label}>{"EX Raid Pass"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Camera");
                    setDes("When you encounter Pokémon in the wild, you can use your camera to photograph them.\n\nDetails: The Camera is an item given to player automatically. It is essentially an easier way to take screenshots on player's mobile device - and when capturing a Pokémon, you can tap the camera icon to easily take a picture within the app. The screenshots/pictures of Pokémon encounter made in-game adds player's name in the bottom corner of the picture. It cannot be removed from bag and it takes up one slot. There is an upcoming feature called GO Snapshot that will allow Trainers to take photos of Pokémon in their collection.");
                    setItemimg(Camera);
                    setModal();
                }}>
                    <Image style={styles.img} source={Camera}></Image>
                    <Text style={styles.label}>{"Camera"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Bag Upgrade");
                    setDes("Increases the max number of items you carry by 50.\n\nCoins: 200\n\n(Note): The upgrade gives player 50 additional storage slots for any items. Players can repeat this action to continue gaining additional storage, until reaching the maximum possible inventory size of 2,000.");
                    setItemimg(BagUpgrade);
                    setModal();
                }}>
                    <Image style={styles.img} source={BagUpgrade}></Image>
                    <Text style={styles.label}>{"Bag Upgrade"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Pokémon Storage Upgrade");
                    setDes("Increases the max number of Pokémon you can carry by 50.\n\nCoins: 200\n\n(Note): Purchasing them multiple times, increases storage capacity by 50 Pokémon, up to a maximum possible size of 2,500.");
                    setItemimg(PokémonStorageUpgrade);
                    setModal();
                }}>
                    <Image style={styles.img} source={PokémonStorageUpgrade}></Image>
                    <Text style={styles.label}>{"Storage Upgrade"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Team Medallion");
                    setDes("Increases the max number of Pokémon you can carry by 50.\n\nCoins: 200\n\n(Note): Purchasing them multiple times, increases storage capacity by 50 Pokémon, up to a maximum possible size of 2,500.");
                    setItemimg(TeamMedallion);
                    setModal();
                }}>
                    <Image style={styles.img} source={TeamMedallion}></Image>
                    <Text style={styles.label}>{"Team Medallion"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_item} onPress={()=>{
                    setModal();
                    setTitle("Mystery Box");
                    setDes("A mysterious old box. Opening it causes a certain Pokémon to appear for a limited time.\n\nDetails: Mystery Boxes are mysterious old boxes that Trainers will receive upon transferring a Pokémon to Pokémon: Let's Go for the Nintendo Switch. \n\nOpening it releases a scent which attracts Meltan for 30 minutes. Once the box has been activated, the Trainer must wait 3 days to transfer Pokémon and receive another box. There is a visible countdown that starts at 3 and decreases by one each day, until it reaches zero.\n\n(Note): Before April 24th, 2019, the cooldown of Mystery Box was 7 days.");
                    setItemimg(MysteryBox);
                    setModal();
                }}>
                    <Image style={styles.img} source={MysteryBox}></Image>
                    <Text style={styles.label}>{"Mystery Box"}</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <MyModa Visibility={ModalState} Title={Title} Des={Des} Itemimg={Itemimg} />
        </View>
    );
}

export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(ItemList);