    import { Dimensions, Platform, PixelRatio } from 'react-native';

    const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    } = Dimensions.get('window');

    const scale = SCREEN_WIDTH / 380;

    export function normalize(size) {
        const newSize = size * scale 
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
    }
    export function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    export function FindString(str, toFind) {
       return str.search(toFind);
    }
    export function percent(value, opt) {
        const MaxAtk = 414;
        const MaxDef = 396;
        const MaxStm = 496;
        const MaxCP  = 5441;
        
        switch(opt) {
            case 'CP': {
                if (value <= 0) return 0;
                return ((value)/MaxCP);
            }
            case 'atk': {
                if (value <= 0) return 0;
                return ((value)/MaxAtk);
            }
            case 'def': {
                if (value <= 0) return 0;
                return ((value)/MaxDef);
            }
            case 'stm': {
                if (value <= 0) return 0;
                return ((value)/MaxStm);
            }
        }
    }
