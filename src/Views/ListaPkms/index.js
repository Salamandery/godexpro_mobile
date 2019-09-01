import AsyncStorage from '@react-native-community/async-storage';
import axios from '../../services/api';
import HeaderBar from '../../components/Header/';
import React, { 
    useState, 
    useEffect 
} from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    Modal,
    TextInput,
    ProgressBarAndroid,
    TouchableOpacity,
    Animated
} from 'react-native';
import { StyleTheme } from './style';
import Loading from '../Loading';
import { percent, translate } from '../../components/StringTrataments';
import { connect } from 'react-redux';

var translation = translate("ListaPkms");

const ListaPkms = ({navigation, theme, Ari, lang}) => {
    const [stAtk, setstAtk] = useState(0);
    const [stDef, setstDef] = useState(0);
    const [stStm, setstStm] = useState(0);
    const [base, setBase] = useState([]);
    const [pkms, setPkms] = useState([]);
    const [load, setLoad] = useState(true);
    const [modalState, setModal] = useState(false);
    const [modalItem, setModalItem] = useState([]);
    const [VisAri, setVisAri] = useState(false);
    const [tpSearch, setTpSearch] = useState("default");
    const [openedName, setOpenName] = useState(5);
    const [openedGen, setOpenGen] = useState(5);
    const [openedN, setOpenN] = useState(5);
    const [openedTypes, setOpenTypes] = useState(5);
    const [lbl, setLbl] = useState(0);
    const [placeholderSearch, setPlaceholder] = useState(translation[lang].placeholder.name);
    var animation = new Animated.Value(0);

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }

    useEffect(()=>{
        loadPkm();
    }, []);
    function minimichelle() {
        setVisAri(true);
    }
    function setAri() {
        AsyncStorage.setItem('ari', "minimichelle");
        setLoad(true);
        setTimeout(()=>{
            navigation.navigate('Login');
        }, 2000);
    }
    function unsetAri() {
        AsyncStorage.removeItem('ari');
        setLoad(true);
        setTimeout(()=>{
            navigation.navigate('Login');
        }, 2000);
    }
    function typeSearch(type, text) {
        const items = pkms;
        switch(type) {
           default: 
                translation[lang].placeholder = placeholderSearch;
                var filteredName = items.filter((item) => {
                    return item.name.toLowerCase().match(text);
                });
            break;
            case "types":
                translation[lang].placeholder = placeholderSearch;
                var filteredName = items.filter((item) => {
                    return item.types.join().toLowerCase().match(text);
                });
            break;
            case "n":
                translation[lang].placeholder = placeholderSearch;
                var filteredName = items.filter((item) => {
                    return item.n.toLowerCase().match(text);
                });
            break;
            case "gen":
                var filteredName = items.filter((item) => {
                    return item.gen.toLowerCase().match(text);
                });
            break;
        }
        
        if (!text || text === '') {
            setPkms(base);
        } else if (!Array.isArray(filteredName) && !filteredName.length) {
            setPkms(filteredName);
        } else if (Array.isArray(filteredName)) {
            setPkms(filteredName);
        }
    }
    function searchText(e) {
        let text = e.toLowerCase();
        if (text === "momozinho") minimichelle();
        typeSearch(tpSearch, text);

    }
    function pkmHandler(pkm) {
        setModal(false);
        setLoad(true);
        setTimeout(()=>{
            setLoad(false);
            navigation.navigate('PkmInfo', {Pkm: pkm, theme, Ari});
        }, 100)
    }
    async function loadPkm() {
        try {
            const res = await axios.get('/pkms', null);
            await AsyncStorage.setItem('pkms', JSON.stringify(res.data));
            await setPkms(res.data);
            await setBase(res.data);
            if (res.data.length > 0) setLoad(false);
        } catch (err) {
            await AsyncStorage.getItem('pkms').then(Locallist => {
                if (Locallist) {
                    setLoad(false);
                    setPkms(JSON.parse(Locallist));
                    setBase(JSON.parse(Locallist));
                }
            })
        }
    }

    const ModalAri = ({Vis})=>{
        return(
        <Modal style={styles.modalAri} transparent={true} visible={Vis} onDismiss={closeAriHandler} onRequestClose={closeAriHandler}>
            <View style={styles.modalAri}>
                <View style={styles.ariContainer}>
                    <Text style={styles.ariTitle}>{translation[lang].modal.title}</Text>
                    <View style={styles.ModalAriClose}>
                        <TouchableOpacity onPress={closeAriHandler} activeOpacity={.3}>
                                <Text style={styles.txtModalGo}>{translation[lang].modal.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={setAri} activeOpacity={.3}>
                                <Text style={styles.txtModalGo}>{translation[lang].modal.set}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={unsetAri} activeOpacity={.3}>
                                <Text style={styles.txtModalGo}>{translation[lang].modal.reset}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        );
    }
    const MyModal = ({selectedItem, Visibility = false}) => {
        return(
            <Modal style={styles.modalContainer} animationType="slide" transparent={true} visible={Visibility} onDismiss={closeHandler} onRequestClose={closeHandler}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.ModalClose} onPress={closeHandler} activeOpacity={.3}>
                        <Text style={styles.txtModalClose}>{translation[lang].modal.close}</Text>
                    </TouchableOpacity>
                    <View style={styles.pkmModalInfo}>
                            <View style={styles.ModalImgWrapper}>
                                <Image style={styles.ModalItemImg}source={{uri: selectedItem.img}}></Image>
                                <TouchableOpacity style={styles.ModalNextInfo} onPress={()=>{pkmHandler(selectedItem);}} activeOpacity={.3}>
                                    <Text style={styles.lblModalNext}>{translation[lang].modal.readmore}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.ModalTitle}>#{selectedItem.n} {selectedItem.name}</Text>
                            <View style={styles.status}>
                                <View style={styles.grpStat}>
                                    <View style={styles.lblStatWrapper}>
                                        <Text style={styles.atk}>ATK: {selectedItem.atk}</Text>
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
                                        <Text style={styles.def}>DEF: {selectedItem.def}</Text>
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
                                        <Text style={styles.stm}>STM: {selectedItem.stm}</Text>
                                    </View>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        color="#B8860B"
                                        indeterminate={false}
                                        style={styles.progress}
                                        progress={percent(stStm, 'stm')}
                                    />
                                </View>
                            </View>
                    </View>
                </View>
            </Modal>
        );
    }
    function closeAriHandler() {
        setVisAri(false);
    }
    function closeHandler() {
        setModal(false);
    }
    function modalHandler(item){
        setstAtk(item.atk);
        setstDef(item.def);
        setstStm(item.stm);
        setModal(true);
        setModalItem(item);
    }
    function renderItem({item}) {
        return(
            <TouchableOpacity key={item._id} onPress={()=>{
                modalHandler(item);
            }} activeOpacity={.5}>
                <View style={styles.PkmItem}>
                    <View style={styles.pkm_imgWrap}>
                        <Image style={styles.pkm_img} source={{ uri: item.img}}></Image>
                    </View>
                    <Text style={styles.pkm_num}>Nº: {item.n}</Text> 
                    <Text style={styles.pkm_name}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    function ToggleSearch(type) {
        if (type === "types") setPlaceholder(translation[lang].placeholder.type);
        else if (type === "n") setPlaceholder(translation[lang].placeholder.n);
        else if (type === "name") setPlaceholder(translation[lang].placeholder.name);
        else if (type === "gen") setPlaceholder(translation[lang].placeholder.gen);
        setTpSearch(type);
        ToggleOpen();
    }
    function ToggleOpen() {
        var toValue = lbl ? 0 : 1;
        Animated.timing(animation, {
            toValue,
            duration: 200
        }).start();
        setLbl(!lbl);
        if (openedTypes === 5) {
            setOpenTypes(250)
        } else {
            setOpenTypes(5);
        }
        
        Animated.timing(animation, {
            toValue,
            duration: 200
        }).start();
        if (openedN === 5) {
            setOpenN(190)
        } else {
            setOpenN(5);
        }

        Animated.timing(animation, {
            toValue,
            duration: 200
        }).start();
        if (openedGen === 5) {
            setOpenGen(130)
        } else {
            setOpenGen(5);
        }
        
        Animated.timing(animation, {
            toValue,
            duration: 200
        }).start();
        if (openedName === 5) {
            setOpenName(70)
        } else {
            setOpenName(5);
        }
    }
    return(
        <View style={styles.container}>
            <HeaderBar navigation={navigation} theme={theme}/>
            <View style={styles.searchBox}>
                <TextInput 
                    style={styles.searchInput}
                    placeholderTextColor={theme === 'false' ? "#333333" : "#cccccc"}
                    placeholder={placeholderSearch}
                    onChangeText={searchText}
                />
            </View>
            <View style={styles.pkm_list}>
                { load ? (
                    <Loading />
                ) : (
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={pkms}
                        keyExtractor={item => item._id}
                        renderItem={renderItem}
                        onEndReachedThreshold={.1}
                    />
                )}
            </View>
            <MyModal selectedItem={modalItem} Visibility={modalState} />
            <ModalAri Vis={VisAri} />
            <View style={styles.floatingWrapper}>
            <Animated.View style={[styles.bgFloating]}/>
            <TouchableOpacity style={[styles.otherButton, {bottom: openedTypes}]} onPress={e=>{ToggleSearch("types")}}>
                <Text style={styles.lblTxtName}>{translation[lang].toggle.type}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.otherButton, {bottom: openedN}]} onPress={e=>{ToggleSearch("n")}}>
                <Text style={styles.lblTxtName}>{translation[lang].toggle.n}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.otherButton, {bottom: openedGen}]} onPress={e=>{ToggleSearch("gen")}}>
                <Text style={styles.lblTxtName}>{translation[lang].toggle.gen}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.otherButton, {bottom: openedName}]} onPress={e=>{ToggleSearch("name")}}>
                <Text style={styles.lblTxtName}>{translation[lang].toggle.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={ToggleOpen} style={[styles.floatButton, styles.searchButton]}>
                <Text style={styles.searchTitle}>{translation[lang].toggle.menu}</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default connect(state =>({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(ListaPkms);