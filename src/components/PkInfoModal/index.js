import React, { 
    useState, 
    useEffect 
} from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    ProgressBarAndroid,
    TouchableOpacity
} from 'react-native';
import {StyleTheme} from './style';
const MyModal = ({selectedItem, Visibility = false, theme = 'false', setAtk, setDef, setStm}) => {
    const maxVal = 350;
    var styles = StyleTheme(theme);
    function pkmHandler(pkm) {
        closeHandler();
        setLoad(true);
        setTimeout(()=>{
            setLoad(false);
            navigation.navigate('PkmInfo', {Pkm: pkm});
        }, 100)
    }
    function percent(value) {
        if (value <= 0) return 0;
        return ((value)/maxVal);
    }
    function closeHandler() {
        Visibility = false;
    }
    return(
        <Modal style={styles.modalContainer} animationType="slide" transparent={true} visible={Visibility} onDismiss={closeHandler} onRequestClose={closeHandler}>
            <View style={styles.modalContainer}>
                <View style={styles.ModalClose}>
                    <TouchableOpacity onPress={()=>{Visibility= false}} activeOpacity={.3}>
                        <Text style={styles.txtModalClose}>Close</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pkmModalInfo}>
                        <View style={styles.ModalImgWrapper}>
                            <Image style={styles.ModalItemImg}source={{uri: selectedItem.img}}></Image>
                        </View>
                        <Text style={styles.ModalTitle}>{selectedItem.n} {selectedItem.name}</Text>
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
                                    progress={percent(setAtk)}
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
                                    progress={percent(setDef)}
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
                                    progress={percent(setStm)}
                                />
                            </View>
                        </View>
                        <View style={styles.ModalNextInfo}>
                            <TouchableOpacity  onPress={()=>{pkmHandler(selectedItem);}} activeOpacity={.3}>
                                <Text style={styles.lblModalNext}>Ler mais..</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </Modal>
    );
}

export default MyModal;