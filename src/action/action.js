import C from './constans';

function getUsers() {
    return {
        type: C.GET_USERS
    }
}

function saveUsers(data) {
    return {
        type: C.SAVE_USERS,
        users: data
    }
}

export { getUsers, saveUsers }