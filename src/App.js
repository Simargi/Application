import React from 'react';
import { connect } from 'react-redux';
import { getUsers, sendUserData, getServerData, getCountryList } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";
import FormContainer from "./container/FormContainer";
import { Modal } from 'simargi-component';
import TableContainer from "./container/TableContainer";
import { filterTableVersion } from './selectors/select';
import ChoiceCountry from "./container/ChoiceCountry";
@connect(
    state => ({
        userslist: state.users,
        error: state.error_message,
        status: state.status,
        table_headers: state.table_headers,
        table_data:filterTableVersion(state),
        country_list: state.country_list
    }), {
        getUsers,
        getServerData,
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
        this.props.getServerData();
        this.props.getCountryList();
    }
    render() {
        const { status, error, userslist, table_headers, table_data, country_list } = this.props;
        const { loading } =this.state;
        return(
            <div className='app'>
                <ChoiceCountry country_list={country_list} />
                <TableContainer headers={table_headers} tableData={table_data} />
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