import React from 'react';

export default class UserList extends React.Component {
    render() {
        return(
            <div className='user-list'>
                {this.props.users.map((item) => {
                    return <p key={item.id}>{item['first_name']} {item['last_name']} <img src={item.avatar} alt=""/></p>
                })
                }
            </div>
        )
    }
}