import actionType from './actionTypes';
//middleware
function getUsers() {
    return {type: actionType.GET_USERS}
}
function sendUserData() {
    return {type: actionType.SEND_FORM_DATA}
}
function getCompanyHostData() {
    return {type: actionType.GET_COMPANY_HOST_DATA}
}
function getCountryList() {
    return {type: actionType.GET_COUNTRY_LIST}
}
function getTypicodeUsers() {
    return {type: actionType.GET_TYPICODE_USERS}
}
function getTypicodePost() {
    return {type: actionType.GET_TYPICODE_POST}
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
function saveCompanyHostData(data) {
    return {
        type: actionType.SAVE_COMPANY_HOST_DATA,
        companyHost: data
    }
}
function saveCountryList(country) {
    return {
        type: actionType.SAVE_COUNTRY_LIST,
        countryList: country
    }
}
function saveTypicodeUsers(user) {
    return {
        type: actionType.SAVE_TYPICODE_USERS,
        typicodeUsers: user
    }
}
function saveTypicodePost(posts) {
    return {
        type: actionType.SAVE_TYPICODE_POST,
        typicodePost: posts
    }
}
export {
    getUsers, sendUserData, saveUsers, errorMessage, getCompanyHostData, saveCompanyHostData, getCountryList,
    saveCountryList, getTypicodeUsers, saveTypicodeUsers, getTypicodePost, saveTypicodePost
}