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
function getTypicodeComment() {
    return {type: actionType.GET_TYPICODE_COMMENT}
}
function getUsersBlogData() {
    return {type: actionType.GET_USERS_BLOG_DATA}
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
        users: user
    }
}
function saveTypicodePost(post) {
    return {
        type: actionType.SAVE_TYPICODE_POST,
        posts: post
    }
}
function saveTypicodeComment(comment) {
    return {
        type: actionType.SAVE_TYPICODE_COMMENT,
        comments: comment
    }
}
function takeIdUserBlog(id) {
    return {
        type: actionType.TAKE_ID_USER_BLOG,
        id: id
    }
}
export {
    getUsers, sendUserData, saveUsers, errorMessage, getCompanyHostData, saveCompanyHostData, getCountryList,
    saveCountryList, getTypicodeUsers, saveTypicodeUsers, getTypicodePost, saveTypicodePost, getTypicodeComment,
    saveTypicodeComment, getUsersBlogData, takeIdUserBlog
}