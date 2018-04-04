import actionType from '../action/actionTypes';

let initialState = {
    status: false,
    error_message: '',
    users: [],
    table_headers: [],
    table_data: [],
    country_list: []
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
        case actionType.SAVE_SERVER_DATA:
            return {
                ...state,
                table_headers: [...state.table_headers, ...action.serverData.headers],
                table_data: [...state.table_data, ...action.serverData.takeData]
            };
            break;
        case actionType.SAVE_COUNTRY_LIST:
            return {
                ...state,
                country_list: [...state.country_list, ...action.countryList]
            };
        default:
            return state
    }
}