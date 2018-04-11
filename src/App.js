import React from 'react';
import { connect } from 'react-redux';
import { getUsers, sendUserData, getCompanyHostData, getCountryList, getTypicodeUsers, getTypicodePost,
    getTypicodeComment } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";
import FormContainer from "./container/FormContainer";
import { Modal, TableContainer } from 'simargi-component';
import { filterTableVersion } from './selectors/select';
import ChoiceCountry from "./container/ChoiceCountry";
import {isMobile} from "./utils";
import TypicUsersContainer from "./container/TypicUsersContainer";
import './assets/Base.sass';

@connect(
    state => ({
        userslist: state.users,
        error: state.error_message,
        status: state.status,
        company_headers: state.company_headers,
        company_host_data: filterTableVersion(state),
        country_list: state.country_list,
        typicodeUsers: state.typicodeUsers,
        typicodePost: state.typicodePost,
        typicodeComment: state.typicodeComment,
        typicodeFilterUsers: state.typicodeFilterUsers
    }), {
        getUsers,
        getCompanyHostData,
        sendUserData,
        getCountryList,
        getTypicodeUsers,
        getTypicodePost,
        getTypicodeComment,
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
        this.props.getTypicodeUsers();
        this.props.getTypicodePost();
        this.props.getTypicodeComment();
        window.addEventListener('resize', () => {
            //this.setState({loading: isMobile()})
        })
    }
    render() {
        const { status, error, userslist, company_headers, company_host_data, country_list } = this.props;
        const { loading } = this.state;
        return(
            <div className='app'>
                <TypicUsersContainer users={this.props.typicodeUsers}
                                     post={this.props.typicodePost}
                                     comment={this.props.typicodeComment}
                                     filterUser={this.props.typicodeFilterUsers}/>
                {/*<ChoiceCountry country_list={country_list} />*/}
                {/*<TableContainer theadData={company_headers} tbodyData={company_host_data} />*/}
                {/*{ loading && status && <Modal typeModal={ status } errorReqMessage={error}/> }*/}
                {/*<FormContainer formTitle={'Registration'} errorMsg={''} />*/}
                {/*{ loading && <Hello/> }*/}
                {/*{ userslist.length>0 && <UserList users={ userslist }/> }*/}
            </div>
        )
    }
}