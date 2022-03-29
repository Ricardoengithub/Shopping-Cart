import users from '../data/users';

// actions
const USER_LOG_IN = 'user/USER_LOG_IN';

// reducer
const initialState = {
    logged: false,
    username: "",
    role: ""
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {
        case USER_LOG_IN:
            return handleValidate(state, action.payload);
        default:
            return state;
    }
}

export function handleValidate(state, payload) {
    let logged = false
    users.forEach(user => {
        const { username, password } = user
        if (username === payload.user && password === payload.password) {
            logged = true
        }
    })
    return {
        ...state,
        logged,
        username: payload.user
    };
}


// selectors
export function getUserStatus(state, props) {
    return state.user.logged;
}

// action creators
export function validateData(user, password) {
    return {
        type: USER_LOG_IN,
        payload: {
            user: user,
            password: password
        }
    }
}
