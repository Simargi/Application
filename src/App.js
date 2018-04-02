import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";
import { SuccessModal, ErrorModal } from 'simargi-component';

@connect(
    state => ({
        userslist: state.users,
        error: state.error_message,
        status: state.status
    }), {
        getUsers
    }
)

export default class App extends React.Component {
    state = {
        loading: false
    };
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        const { status, error, userslist } = this.props;
        console.log(this.props)
        return(
            <div className='app'>
                { status && <SuccessModal closeBtn={true} showModal={true} /> }
                { error && <ErrorModal closeBtn={false} showModal={true} errorReq={error} /> }
                { this.state.loading && <Hello/> }
                { userslist.length>0 && <UserList users={ userslist /*this.props.userslist*/}/> }
            </div>
        )
    }
}