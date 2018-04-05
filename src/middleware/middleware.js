import actionType from '../action/actionTypes';
import { saveUsers, errorMessage, saveCompanyHostData, saveCountryList } from '../action/action';

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
                .then( json => dispatch(saveUsers(json)) )
                .catch( error => dispatch(errorMessage(error)) );
            break;
        case actionType.GET_COMPANY_HOST_DATA:
            fetch('https://connection.keboola.com/v2/storage').then(res => {
                return res.json();
            }).then((json) => {
                var modificationData = json.components.splice(0, 30);
                let companyData = modificationData.map(function(item) {
                    return {
                        id: item.id,
                        name: item.name,
                        version: item.version
                    }
                });
                let headers = [];
                for (let key in companyData[0]) {
                    headers.push(key)
                }
                let obj = {
                    headers: headers,
                    companyData: companyData
                };
                return obj
            }).then((json) => dispatch(saveCompanyHostData(json)));
            break;
        case actionType.GET_COUNTRY_LIST:
            fetch('https://restcountries.eu/rest/v1/all')
                .then(response => response.json())
                .then(json => dispatch(saveCountryList(json)))
                .catch(error => console.warn(error));
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