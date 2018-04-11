import React from 'react';
import PropTypes from 'prop-types';
import defaultImgProfile from './../images/user-default.png';

class TypicUsersList extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        showPost: PropTypes.func,
        showModal: PropTypes.func
    };
    render() {
        const { users, showPost, showModal } = this.props;
        return(
            <ul className="user_list">
                {users.map((user, idx) => {
                    return <li key={idx}>
                        <div className={'about_user'}>
                            <p className="user_img"><img src={defaultImgProfile} alt=""/></p>
                            <div className='user_info'>
                                <p className={'user_name'} onClick={() => showPost(user.id)}>{user.username}</p>
                                <a href="#" onClick={() => showModal(idx, user.id)}><p className={'user_more_info'}>More...</p></a>
                            </div>
                        </div>
                    </li>
                })
                }
            </ul>
        )
    }
}

export default TypicUsersList