import actionType from '../action/actionTypes';
import { saveUsers, errorMessage } from '../action/action';

const middleware = ({dispatch, getState}) => next => action => {
    switch (action.type) {
        case actionType.GET_USERS:
            fetch('https://reqres.in/api/users')
                .then(function(response) {
                    return response.json()
                })
                .then(
                    json => {
                        return (
                            dispatch(saveUsers(json))
                        )
                    }
                )
                .catch(error => {
                    return (
                        dispatch(errorMessage(error))
                    )
                })
            break;
        default:
            return next(action)
    }
};

export default middleware