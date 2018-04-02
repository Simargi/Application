import actionType from '../action/actionTypes';

let initialState = {
    status: true,
    error_message: '',
    users: []
};
export default function reducerApp(state = initialState, action) {
    switch (action.type) {
        case actionType.SAVE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users.data]
            };
            break;
        case actionType.FAIL_REQUEST:
            //console.log(state)
            return {
                ...state,
                error_message: action.errors.message,
                status: !state.status
            };
            break;
        default:
            return state
    }
}