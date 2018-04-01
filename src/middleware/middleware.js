import C from './../action/constans';
import { saveUsers } from '../action/action';

const middleware = ({dispatch, getState}) => next => action => {
    switch (action.type) {
        case C.GET_USERS:
            fetch('https://reqres.in/api/users')
                .then(function(response) {
                    return response.json()
                })
                .then(
                    json => dispatch(saveUsers(json))
                )
            break;
        default:
            return next(action)
    }
};

export default middleware