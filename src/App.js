import React from 'react';
import { connect } from 'react-redux';
import { getUsers, sendUserData } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";
import { SuccessModal, ErrorModal, Modal, FormContainer } from 'simargi-component';

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
        loading: false
    };
    componentDidMount() {
        this.props.getUsers();
        this.props.sendUserData();
    }
    render() {
        const { status, error, userslist } = this.props;
        return(
            <div className='app'>
                <Modal typeModal={status ? 'succ' : error ? 'fail' : ''}
                       errorReqMessage={error}
                       showModal={true}
                />
                <FormContainer formTitle={'Registration'} errorMsg={''} />
                {/*{ status && <SuccessModal closeBtn={true} showModal={true} /> }*/}
                {/*{ error && <ErrorModal closeBtn={false} showModal={true} errorReq={error} /> }*/}
                { this.state.loading && <Hello/> }
                { userslist.length>0 && <UserList users={ userslist }/> }
            </div>
        )
    }
}