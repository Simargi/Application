import React from 'react';
import { connect } from 'react-redux';
import { getUsers, sendUserData } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";
import FormContainer from "./container/FormContainer";
import { Modal } from 'simargi-component';

@connect(
    state => ({
        userslist: state.users,
        error: state.error_message,
        status: state.status
    }), {
        getUsers,
        sendUserData
    }
)

export default class App extends React.Component {
    state = {
        loading: false,
        isLoading: true
    };
    componentDidMount() {
        this.props.getUsers();
        this.setState({isLoading: false})
        //this.props.sendUserData();
    }
    render() {
        const { status, error, userslist } = this.props;
        return(
            <div className='app'>
                { status && <Modal typeModal={ status }
                       errorReqMessage={error}
                /> }
                <FormContainer formTitle={'Registration'} errorMsg={''} />
                { this.state.loading && <Hello/> }
                { userslist.length>0 && <UserList users={ userslist }/> }
            </div>
        )
    }
}