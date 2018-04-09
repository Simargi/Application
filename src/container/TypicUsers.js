import React from 'react';
import PropTypes from 'prop-types';
import TypicUsersModal from "./TypicUsersModal";
import './../assets/TypicUsers.sass';
import TypicPost from "./TypicPost";

class TypicUsers extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        post: PropTypes.array.isRequired
    };
    state = {
        showModal: false,
        objectId: 0,
        userId: 1
    };
    handleShowModal = (objId, userId) => {
        this.setState({objectId: objId, userId: userId, showModal: true})
    };
    handleShowPost = (userId) => {
        this.setState({userId: userId})
    };
    closeModal = () => {
        this.setState({showModal: false})
    };
    /*closeModalOverlay = (e) => {
        if (e.target == '......') {
            this.setState({showModal: false})
        }
    };*/
    closeModalByKey = (e) => {
        if (e.type === 'keydown' && e.keyCode == 27) {
            this.setState({showModal: false})
        }
    };
    postOwnedUser = () => {
        let newObj = [],
            posts = this.props.post,
            uId = this.state.userId;
        for (let key in posts) {
            if (posts[key]['userId'] === uId) {
                newObj.push(posts[key])
            }
        }
        return newObj
    };
    render() {
        const { users, post } = this.props;
        return (
            <div className={'user_list_container'}>
                <ul className="user_list">
                    {users.map((user, idx) => {
                        return <li key={idx}>
                            <div className={'about_user'}>
                                <p className="user_img"></p>
                                <p className={'user_name'} onClick={() => this.handleShowPost(user.id)}>{user.username}</p>
                                <a href="#" onClick={() => this.handleShowModal(idx, user.id)}><p className={'user_more_info'}>More...</p></a>
                            </div>
                        </li>
                    })
                    }
                </ul>
                { this.state.showModal && <TypicUsersModal closeModalByKey={this.closeModalByKey}
                                                           closeModal={this.closeModal}
                                                           user={users[this.state.objectId]} />}
                <TypicPost post={this.postOwnedUser()} />
            </div>
        )
    }
}

export default TypicUsers