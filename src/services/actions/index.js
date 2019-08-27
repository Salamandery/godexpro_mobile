
export default function ToggleTheme(theme, Ari) {
    console.log(theme);
    console.log(Ari);
    return {
        type: 'TOGGLE_THEME',
        theme,
        Ari
    }
}