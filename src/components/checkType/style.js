import {
    StyleSheet
} from 'react-native';

export function StyleTheme(theme, mode = "default") {
    if (theme === "false") {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                },
                img: {
                    alignSelf: "center",
                    margin: 3,
                    padding: 3,
                },
                lbl: {
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                    fontSize: 18,
                    color: "#333333",
                }
            })
        );
    } else {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                },
                lbl: {
                    alignSelf: "center",
                    margin: 5,
                    padding: 5,
                    fontSize: 18,
                    color: "#cccccc",
                },
                img: {
                    alignSelf: "center",
                    margin: 3,
                    padding: 3,
                }
            })
        ); 
    }
}