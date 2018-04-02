import actionType from './actionTypes';

function getUsers() {
    return {
        type: actionType.GET_USERS
    }
}
function sendUserData() {
    return {type: actionType.SEND_FORM_DATA}
}

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

export { getUsers, sendUserData, saveUsers, errorMessage }