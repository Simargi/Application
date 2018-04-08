import React from 'react';
import PropTypes from 'prop-types';


class TypicUsersModal extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        closeModal: PropTypes.func,
        closeModalByKey: PropTypes.func
    };
    componentWillMount() {
        document.addEventListener("keydown", this._handleCloseByKey);
    }
    componentWillUnmount () {
        document.removeEventListener("keydown", this._handleCloseByKey);
    }
    _handleCloseByKey = (e) => {
        this.props.closeModalByKey(e)
    };
    render() {
        const { name, email, phone, website, address } = this.props.user;
        return (
            <div className={'modal_user_info'} onKeyPress={this._handleCloseByKey}>
                <div className="modal_content">
                <span className={'close_modal'} onClick={this.props.closeModal}>x</span>
                <div className="full_info">
                    <p className="modal_user_name">Name: <span>{name}</span></p>
                    <p className="modal_user_email">Email: <span>{email}</span></p>
                    <p className="modal_user_phone">Phone: <span>{phone}</span></p>
                    <p className="modal_user_website">Website: <span>{website}</span></p>
                    <ul className={'company_address'}>
                        <p>Address:</p>
                        { Object.keys(address).map(function(item, i) {
                            if (item === 'geo') {
                                let geoObj = address[item];
                                return <li key={i} className={'company_'+item}><p>{item}</p><span>-</span><p>{Object.keys(geoObj).map(function(objItem, objIdx) {
                                    return <span key={objIdx}><span>{objItem}</span><span> {geoObj[objItem]}</span></span>
                                })}</p></li>
                            }
                            return <li key={i} className={'company_'+item}><p>{item}</p><span>-</span><p>{address[item]}</p></li>
                        }) }
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default TypicUsersModal