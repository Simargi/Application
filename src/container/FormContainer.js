import React from 'react';
import PropTypes from 'prop-types';
import { FormInput, Button } from 'simargi-component';
import '../assets/Form.sass';

class FormContainer extends React.Component {
    static defaultProps = {
        errorMsg: '',
        formTitle: 'Registration'
    };
    static propTypes = {
        formTitle: PropTypes.string.isRequired,
        errorMsg: PropTypes.string
    };
    submitForm = (e) => {
        //e.preventDefault();
        console.log(1)
    }
    render() {
        return(
            <div className={'form-container show'}>
                <form onClick={this.submitForm}>
                    <h2 className={'form-title'}>{this.props.formTitle}</h2>
                    <FormInput name={'email'}
                               placeholder={'Please enter email'}
                               type={'email'}
                    />
                    <FormInput name={'password'}
                               placeholder={'Please enter password'}
                               type={'password'}
                    />
                    <span className='error-tooltip'>{this.props.errorMsg}</span>
                    <Button btnType={'submit'} value={'Ok'} btnSize={'md'} /*onClick={this.submitForm}*/ />
                </form>
            </div>
        )
    }
}

export default FormContainer