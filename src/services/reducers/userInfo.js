
const INITIAL_STATE = {
    username: "atomiccodes",
    paid: "false",
    photo: "none",
    email: "suporte@atomiccodes.org"
};

export default function themes(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_USERINFO') {
        return { 
            ...state, 
            username: action.username,
            paid: action.paid,
            photo: action.photo,
            email: action.email,
        };
    }
    return state;
}
