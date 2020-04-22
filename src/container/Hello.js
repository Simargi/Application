import React from 'react';
import {Textarea, Button, FormInput} from 'simargi-component';

export default class Hello extends React.Component {
	state = {
		value: 0,
		userValue: '',
		btnValue: ''
	};
	handleChangeValue = (e) => {
		this.setState({value: e.target.value.length});
	};
	changeName = (e) => {
		this.setState({
			userValue: e.target.value
		});
	};
	enterSymbols = () => {
		this.setState({
		btnValue: this.state.userValue})
	};

	render() {
		console.log(this.state)
		return (
			<div className='app'>
				<Textarea name="textarea" maxlength={10} disable={false} onChange={this.handleChangeValue}/>
				<p>You entered {this.state.value} symbol</p>
				<p>Enter your name <FormInput name="someText"  onChange={this.changeName} /><Button text={'Button'} btnSize={'md'} onClick={this.enterSymbols} /></p>
				<p>You entered {this.state.userValue}</p>
				<p>Click btn value {this.state.btnValue.length ?this.state.btnValue : ''}</p>
			</div>
		)
	}
}