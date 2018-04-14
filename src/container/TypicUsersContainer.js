import React from 'react';
import PropTypes from 'prop-types';
import TypicUsersModal from "./TypicUsersModal";
import './../assets/TypicUsers.sass';
import TypicPost from "./TypicPost";
import TypicUsersList from "./TypicUsersList";

class TypicUsersContainer extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        post: PropTypes.array.isRequired,
        comment: PropTypes.array.isRequired,
        idUserBlog: PropTypes.func
    };
    state = {
        showModal: false,
        objectId: null
    };
    handleShowModal = (objId, userId) => {
        this.setState({objectId: objId, showModal: true})
        this.props.idUserBlog(userId)
    };
    handleShowPost = (userId) => {
        this.props.idUserBlog(userId)
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
    render() {
        const { users, post, comment, filterUser, filterBlogUser } = this.props;
        return (
            <div className={'user_list_container'}>
                <TypicUsersList users={users} showPost={this.handleShowPost} showModal={this.handleShowModal} />
                { this.state.showModal && <TypicUsersModal closeModalByKey={this.closeModalByKey}
                                                           closeModal={this.closeModal}
                                                           user={users[this.state.objectId]} />}
                <TypicPost allPost={post}
                           userComments={comment}
                           filterUser={filterUser}
                           filterBlogUser={filterBlogUser}/>
            </div>
        )
    }
}

export default TypicUsersContainer