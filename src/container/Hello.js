import React from 'react';
import { Textarea, Button, Input } from 'simargi-component';

export default class Hello extends React.Component {
    state = {
        value: 0,
        userValue: ''
    };
    handleChangeValue = (e) => {
        this.setState({value: e.target.value.length});
    };
    changeName = (e) => {
        this.setState({
            userValue: e.target.value
        });
    };
    render() {
        return(
            <div className='app'>
                <Textarea maxlength={10} disable={false} onChange={this.handleChangeValue} />
                <p>You entered <Button btnSize={'lg'} value={this.state.value} /> symbol</p>
                <p>Enter your name <Input onHandler={this.changeName} /></p>
                <p>You entered {this.state.userValue}</p>
            </div>
        )
    }
}