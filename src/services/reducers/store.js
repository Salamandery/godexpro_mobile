
const INITIAL_STATE = {
    theme: "false",
    Ari: "default",
    lang: "en"
};

export default function themes(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_THEME') {
        return { 
            ...state, 
            theme: action.theme, 
            Ari: action.Ari,
            lang: action.lang 
        };
    }
    return state;
}
