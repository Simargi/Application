import actionType from './actionTypes';
//middleware
function getUsers() {
    return {type: actionType.GET_USERS}
}
function sendUserData() {
    return {type: actionType.SEND_FORM_DATA}
}
function getServerData() {
    return {type: actionType.GET_SERVER_DATA}
}
function getCountryList() {
    return {type: actionType.GET_COUNTRY_LIST}
}
//reducer
function saveUsers(data) {
    return {
        type: actionType.SAVE_USERS,
        users: data
    }
}
function errorMessage(error) {
    return {
        type: actionType.FAIL_REQUEST,
        errors: error
    }
}
function saveServerData(data) {
    return {
        type: actionType.SAVE_SERVER_DATA,
        serverData: data
    }
}
function saveCountryList(country) {
    return {
        type: actionType.SAVE_COUNTRY_LIST,
        countryList: country
    }
}

export { getUsers, sendUserData, saveUsers, errorMessage, getServerData, saveServerData, getCountryList, saveCountryList }