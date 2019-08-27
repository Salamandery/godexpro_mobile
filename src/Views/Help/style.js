import {
    StyleSheet
} from 'react-native';

export function StyleTheme(theme) {
    if (theme === "false") {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: "#e6e6e6"
                },
                AjudaItens: {
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    alignSelf: "stretch",
                    justifyContent: "center",
                }
            })
        );
    } else {
        return (
            StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: "#262626"
                },
                AjudaItens: {
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    alignSelf: "stretch",
                    justifyContent: "center",
                }
            })
        ); 
    }
}