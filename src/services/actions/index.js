
export function ToggleTheme(theme, Ari, lang, dir) {
    return {
        type: 'TOGGLE_THEME',
        theme,
        Ari,
        lang,
        dir,
    }
}
export function ToggleUserInfo(username, paid, photo, email) {
    return {
        type: 'TOGGLE_USERINFO',
        username,
        photo,
        paid,
        email
    }
}