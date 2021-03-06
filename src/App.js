import React from 'react';
import { connect } from 'react-redux';
import { getUsers, sendUserData, getCompanyHostData, getCountryList } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";
import FormContainer from "./container/FormContainer";
import { Modal, TableContainer } from 'simargi-component';
import { filterTableVersion } from './selectors/select';
import ChoiceCountry from "./container/ChoiceCountry";

@connect(
    state => ({
        userslist: state.users,
        error: state.error_message,
        status: state.status,
        company_headers: state.company_headers,
        company_host_data:filterTableVersion(state),
        country_list: state.country_list
    }), {
        getUsers,
        getCompanyHostData,
        sendUserData,
        getCountryList
    }
)

export default class App extends React.Component {
    state = {
        loading: false
    };
    componentDidMount() {
        this.props.getUsers();
        this.props.getCompanyHostData();
        this.props.getCountryList();
    }
    render() {
        const { status, error, userslist, company_headers, company_host_data, country_list } = this.props;
        const { loading } =this.state;
        return(
            <div className='app'>
                <ChoiceCountry country_list={country_list} />
                <TableContainer theadData={company_headers} tbodyData={company_host_data} />
                { loading && status && <Modal typeModal={ status }
                       errorReqMessage={error}
                /> }
                {/*<FormContainer formTitle={'Registration'} errorMsg={''} />*/}
                {/*{ loading && <Hello/> }*/}
                { userslist.length>0 && <UserList users={ userslist }/> }
            </div>
        )
    }
}