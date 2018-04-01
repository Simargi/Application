import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from './action/action';
import Hello from "./container/Hello";
import UserList from "./container/Users";

@connect(
    state => ({
        userslist: state.users
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
        return(
            <div className='app'>
                {this.state.loading && <Hello/> }
                <UserList users={this.props.userslist}/>
            </div>
        )
    }
}