import C from './../action/constans';

let initialState = {
    users: []
};
export default function reducerApp(state = initialState, action) {
    switch (action.type) {
        case C.SAVE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users.data]
            };
            break;
        default:
            return state
    }
}