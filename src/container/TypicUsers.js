import React from 'react';
import PropTypes from 'prop-types';
import TypicUsersModal from "./TypicUsersModal";

class TypicUsers extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };
    state = {
        showModal: false,
        userId: 0
    };
    handleShowModal = (idx) => {
        //this.setState({ showModal: this.state.showModal ? false : true })
        this.setState({userId: idx, showModal: /*this.state.showModal ? false :*/ true})
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
        const { users } = this.props;
        return (
            <div className={'users-list'}>
                <ul>
                    {users.map((user, idx) => {
                        return <li key={idx}>
                            <a href="#" onClick={() => this.handleShowModal(idx)}>
                                <p className={'user-name'}>{user.username}</p>
                            </a>
                        </li>
                    })
                    }
                </ul>
                { this.state.showModal && <TypicUsersModal closeModalByKey={this.closeModalByKey}
                                                           closeModal={this.closeModal}
                                                           user={users[this.state.userId]} />}
            </div>
        )
    }
}

export default TypicUsers