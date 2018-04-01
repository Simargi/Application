import actionType from './constans';

function getUsers() {
    return {
        type: actionType.GET_USERS
    }
}

function saveUsers(data) {
    return {
        type: actionType.SAVE_USERS,
        users: data
    }
}

export { getUsers, saveUsers }