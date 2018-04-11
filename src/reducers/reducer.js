import actionType from '../action/actionTypes';

let initialState = {
    status: false,
    error_message: '',
    users: [],
    company_headers: [],
    company_host_data: [],
    country_list: [],
    typicodeUsers: [],
    typicodePost: [],
    typicodeComment: [],
    typicodeFilterUsers: []
};
export default function reducerApp(state = initialState, action) {
    switch (action.type) {
        case actionType.SAVE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users.data],
                status: 'success'
            };
            break;
        case actionType.FAIL_REQUEST:
            return {
                ...state,
                error_message: action.errors.message,
                status: 'fail'
            };
            break;
        case actionType.SAVE_COMPANY_HOST_DATA:
            return {
                ...state,
                company_headers: [...state.company_headers, ...action.companyHost.headers],
                company_host_data: [...state.company_host_data, ...action.companyHost.companyData]
            };
            break;
        case actionType.SAVE_COUNTRY_LIST:
            return {
                ...state,
                country_list: [...state.country_list, ...action.countryList]
            };
        case actionType.SAVE_TYPICODE_USERS:
            return {
                ...state,
                typicodeUsers: [...state.typicodeUsers, ...action.users],
                typicodeFilterUsers: [...action.users.map(item => {
                    return {
                        id: item.id,
                        username: item.username
                    }
                })]

            };
            break;
        case actionType.SAVE_TYPICODE_POST:
            return {
                ...state,
                typicodePost: [...state.typicodePost, ...action.posts]
            };
            break;
        case actionType.SAVE_TYPICODE_COMMENT:
            return {
                ...state,
                typicodeComment: [...state.typicodeComment, ...action.comments]
            };
            break;
        default:
            return state
    }
}