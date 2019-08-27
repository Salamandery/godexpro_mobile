
const INITIAL_STATE = {
    theme: "false",
    Ari: "default"
};

export default function themes(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_THEME') {
        return { 
            ...state, 
            theme: action.theme, 
            Ari: action.Ari 
        };
    }
    return state;
}
