import users from '../data/users';
import role_group from '../data/role_grants'

// actions
const USER_LOG_IN = 'user/USER_LOG_IN';
const USER_LOG_OUT = 'user/USER_LOG_OUT';

// reducer
const initialState = {
    logged: false,
    username: "",
    userInfo: { options: []}
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {
        case USER_LOG_IN:
            return handleValidate(state, action.payload);
        case USER_LOG_OUT:
            return handleLogOut(state, action.payload);
        default:
            return state;
    }
}

export function handleValidate(state, payload) {
    let logged = false
    let userInfo = {}
    users.forEach(user => {
        const { username, password } = user
        if (username === payload.user && password === payload.password) {
            logged = true
            role_group.forEach(item =>{
                if (item.role === user.role){
                    userInfo = {role: item.role, options: item.modules.map(elem => elem.option)}
                }
            })
        }
    })
    return {
        ...state,
        logged,
        username: payload.user,
        userInfo
    };
}

export function handleLogOut(state, payload) {
    return {
        ...state,
        logged: false,
        username: "",
        userINfo: {}
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

// action creators
export function logOut() {
    return {
        type: USER_LOG_OUT,
        payload: {}
    }
}
