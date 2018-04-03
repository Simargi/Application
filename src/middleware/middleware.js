import actionType from '../action/actionTypes';
import { saveUsers, errorMessage } from '../action/action';

const middleware = ({dispatch, getState}) => next => action => {
    switch (action.type) {
        case actionType.GET_USERS:
            fetch('https://reqres.in/api/users')
                .then(function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
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
        case actionType.SEND_FORM_DATA:
            let xhr = new XMLHttpRequest();
            let params = JSON.stringify({
                "email": "",
                "password": ""
            });
            xhr.open('POST', 'https://reqres.in/api/register', true);
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 201) {
                    alert(xhr.responseText);
                }
            };
            xhr.send(params);
            break;
        default:
            return next(action)
    }
};

export default middleware