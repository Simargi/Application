import React from 'react';
import PropTypes from 'prop-types';
import {FormInput, Button} from 'simargi-component';
import '../assets/Form.sass';

class FormContainer extends React.Component {
	static defaultProps = {
		errorMsg: ''
	};
	static propTypes = {
		formTitle: PropTypes.string.isRequired,
		errorMsg: PropTypes.string
	};
	state = {
		email: '',
		password: ''
	}
	checkFieldEmail = (e) => {
		this.setState({
			email: e.target.value
		})
	};
	checkFieldPass = (e) => {
		this.setState({
			password: e.target.value
		})
	}

	render() {
		let {email, password} = this.state;
		return (
			<div className={'form-container show'}>
				<form type="POST">
					<h2 className={'form-title'}>{this.props.formTitle}</h2>
					<FormInput name={'email'}
					           placeholder={'Please enter email'}
					           type={'email'}
					           onChange={this.checkFieldEmail}
					/>
					<FormInput name={'password'}
					           placeholder={'Please enter password'}
					           type={'password'}
					           onChange={this.checkFieldPass}
					/>
					<span className='error-tooltip'>{this.props.errorMsg}</span>
					<Button btnType={'submit'} text={'Ok'} btnSize={'md'} disabled={!(email.length && password.length)} />
				</form>
			</div>
		)
	}
}

export default FormContainer