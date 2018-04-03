import actionType from '../action/actionTypes';

let initialState = {
    status: false,
    error_message: '',
    users: []
};
export default function reducerApp(state = initialState, action) {
    switch (action.type) {
        case actionType.SAVE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users.data],
                status: state.status = 'success'
            };
            break;
        case actionType.FAIL_REQUEST:
            return {
                ...state,
                error_message: action.errors.message,
                status: state.status = 'fail'
            };
            break;
        default:
            return state
    }
}