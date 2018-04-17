import actionType from '../action/actionTypes';
import { userList, countryList, companyHostData, typicodeUsers, typicodePost, typiccodeComment } from '../constans/constans';
import { saveUsers, errorMessage, saveCompanyHostData, saveCountryList, saveTypicodeUsers, saveTypicodePost,
    saveTypicodeComment } from '../action/action';

const middleware = ({dispatch, getState}) => next => action => {
    switch (action.type) {
        case actionType.GET_USERS:
            fetch(userList)
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
            fetch(companyHostData).then(res => {
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
            fetch(countryList)
                .then(response => response.json())
                .then(json => dispatch(saveCountryList(json)))
                .catch(error => console.warn(error));
            break;
        case actionType.GET_USERS_BLOG_DATA:
            async function usersBlogData() {
                const first = await fetch(typicodeUsers);
                const two = await fetch(typicodePost);
                const third = await fetch(typiccodeComment);
                const firstvalue = await first.json();
                dispatch(saveTypicodeUsers(firstvalue));
                const secondvalue = await two.json();
                dispatch(saveTypicodePost(secondvalue));
                const thirdvalue = await third.json();
                dispatch(saveTypicodeComment(thirdvalue));
            }
            usersBlogData();
            break;
        default:
            return next(action)
    }
};

export default middleware