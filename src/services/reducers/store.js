
const INITIAL_STATE = {
    theme: "false",
    Ari: "default",
    lang: "en",
    dir: "left",
};

export default function themes(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_THEME') {
        return { 
            ...state, 
            theme: action.theme, 
            Ari: action.Ari,
            lang: action.lang,
            dir: action.dir,
        };
    }
    return state;
}
