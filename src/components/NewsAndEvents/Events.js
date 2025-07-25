import AsyncStorage from '@react-native-community/async-storage';
import axios from '../../services/api';

import {
    parseISO, 
    formatDistance
} from 'date-fns';

import en_us from 'date-fns/locale/en-US';
import pt_br from 'date-fns/locale/pt-BR';

import HeaderBar from '../Header';
import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Text,
    Modal,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { StyleTheme } from './style';
import { connect } from 'react-redux';
import Loading from '../../Views/Loading';
import { translate } from '../StringTrataments';
import AdSense from '../AdSense';

var translation = translate("News");

const Events = ({navigation, theme, Ari, lang}) => {
    const [events, setEvents] = useState([]); 
    const [base, setBase] = useState([]); 
    const [load, setLoad] = useState(true);  
    const [modalTitle, setModalTitle] = useState('');
    const [modalDesc, setModalDesc] = useState('');
    const [modalTime, setModalTime] = useState('');
    const [modalDate, setModalDate] = useState('');
    const [modalHint, setModalHint] = useState('');
    const [posted, setPosted] = useState('');
    const [items, setItems] = useState([]);
    const [ModalState, setModalState] = useState(false);

    if (Ari === "minimichelle") {
        var styles = StyleTheme(theme, "ari");
    } else {
        var styles = StyleTheme(theme, "default");
    }
    async function loadnews() {
        try {
            const res = await axios.get('/events');
            const data = res.data.map(n =>({
                ...n,
                timeDistance: formatDistance(
                    parseISO(n.createdAt),
                    new Date(),
                    { addSuffix: true, locale: lang === "en" ? en_us : pt_br }
                )
            }));
            await AsyncStorage.setItem('events', JSON.stringify(data));
            await setEvents(data);
            await setBase(data);
            if (res.data.length > 0) setLoad(false);
        } catch (err) {
            await AsyncStorage.getItem('events').then(Locallist => {
                if (Locallist) {
                    setLoad(false);
                    setEvents(JSON.parse(Locallist));
                    setBase(JSON.parse(Locallist));
                }
            })
        }
    }
    useEffect(()=> {
        loadnews();
    }, []);
    function closeModal(){
        setModalState(false);
    }
    function setModal(){
        setModalState(true);
    }
    function renderItem({item}) {
        
        return(
            <TouchableOpacity key={item._id} onPress={()=>{
                setModal();
                setModalDate(item.date[lang]);
                setModalTime(item.timeDistance);
                setModalTitle(item.title[lang]);
                setModalDesc(item.description[lang]);
                setModalHint(item.hint[lang]);
                setItems(item.item_list[lang]);
                setPosted(item.user_create);
            }} activeOpacity={.5}>
                <View style={styles.NewItem}>
                    <Text style={styles.new_date}>{item.date_lb[lang]}</Text> 
                    <Text style={styles.new_label}>{item.label[lang]}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    const MyModa = ({Visibility, Title, Desc, Dating, time, Hint, Items, Posted}) => {
        return(
            <Modal style={styles.modalContainer} animationType={"slide"} visible={Visibility} transparent={true} onRequestClose={closeModal} onDismiss={closeModal}>
                <AdSense />
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeModal} onPress={closeModal}>
                        <Text style={styles.txtCloseModal}>{translation[lang].modal.close}</Text>
                    </TouchableOpacity>
                    <View style={styles.MyitemModal}>
                        <View style={styles.imgWrapper}>
                            {/*<Image source={Itemimg} style={styles.img}></Image>*/}
                            <Text style={styles.titleDate}>{Dating}</Text>
                            <Text style={styles.createdAt}>{time}</Text>
                        </View>
                        <ScrollView>
                            <Text style={styles.titleModal}>{Title}</Text>
                            <Text style={styles.desModal}>{Desc}</Text>
                            <View style={styles.itemContainer}>
                                {Items.length > 0 ? (Items.map((Item, idx)=><Text key={idx} style={styles.Item_list}>{Item}</Text>)) : null }
                            </View>
                            <Text style={styles.desHint}>{Hint}</Text>
                            <Text style={styles.Posted}>{translation[lang].createdby} {Posted}</Text>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        );
    }
    return(
        <View style={styles.container}>
            <HeaderBar Headertitle={translation[lang].header.event} navigation={navigation} theme={theme}/>
            <View style={styles.NewsItens}>
                {
                    load ? <Loading /> : (
                        <View style={styles.new_list}>
                            <FlatList
                                contentContainerStyle={styles.list}
                                data={events}
                                keyExtractor={item => item._id}
                                renderItem={renderItem}
                                onEndReachedThreshold={.1}
                            />
                            <MyModa Visibility={ModalState} 
                                    Title={modalTitle} 
                                    Desc={modalDesc} 
                                    time={modalTime}
                                    Dating={modalDate} 
                                    Hint={modalHint}
                                    Items={items} 
                                    Posted={posted}
                            />
                        </View>
                    )
                }
            </View>
        </View>
    );
}
export default connect(state => ({ theme: state.themes.theme, Ari: state.themes.Ari, lang: state.themes.lang }))(Events);