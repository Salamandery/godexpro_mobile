
export default function ToggleTheme(theme, Ari, lang, dir) {
    return {
        type: 'TOGGLE_THEME',
        theme,
        Ari,
        lang,
        dir
    }
}