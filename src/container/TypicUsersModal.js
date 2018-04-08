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
            <div className={'modal-user-info'} onKeyPress={this._handleCloseByKey}>
                <span className={'close-modal'} onClick={this.props.closeModal}>X</span>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <ul className={'company-address'}>
                    { Object.keys(address).map(function(item, i) {
                        if (item === 'geo') {
                            let geoObj = address[item];
                            return <li key={i} className={'company-'+item}><p>{item}</p><span>-</span><p>{Object.keys(geoObj).map(function(objItem, objIdx) {
                                return <span key={objIdx}><span>{objItem}</span><span> {geoObj[objItem]}</span></span>
                            })}</p></li>
                        }
                        return <li key={i} className={'company-'+item}><p>{item}</p><span>-</span><p>{address[item]}</p></li>
                    }) }
                </ul>
            </div>
        )
    }
}

export default TypicUsersModal