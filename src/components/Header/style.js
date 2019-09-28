import {
    StyleSheet
} from 'react-native';
import { normalize } from '../StringTrataments';
export function StyleTheme(theme) {
    if (theme === "false") {
        return (
            StyleSheet.create({
                header: {
                    backgroundColor: "#cc0000",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: normalize(5),
                    height: normalize(55)
                },
                Title: {
                    fontWeight: "bold",
                    fontSize: normalize(32),
                    color: "#e6e6e6",
                    marginTop: normalize(3),
                },
                menu: {
                    height: normalize(50),
                    width: normalize(56),
                    justifyContent: "center",
                    alignItems: "center",
                },
                logo: {
                    height: normalize(30),
                    width: normalize(120)
                },
                appid: {
                    fontSize: normalize(18),
                    color: "#e6e6e6",
                },
                btn_menu: {
                    width: normalize(40),
                    height: normalize(40)
                }
            })
        );
    } else {
        return (
            StyleSheet.create({
                header: {
                    backgroundColor: "#800000",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: normalize(5),
                    height: normalize(55)
                },
                Title: {
                    fontWeight: "bold",
                    fontSize: normalize(32),
                    color: "#e6e6e6",
                    marginTop: normalize(3),
                },
                menu: {
                    height: normalize(50),
                    width: normalize(56),
                    justifyContent: "center",
                    alignItems: "center",
                },
                logo: {
                    height: normalize(30),
                    width: normalize(120)
                },
                appid: {
                    fontSize: normalize(18),
                    color: "#e6e6e6",
                },
                btn_menu: {
                    width: normalize(40),
                    height: normalize(40)
                }
            })
        ); 
    }
}