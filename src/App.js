import React from 'react';
import { Textarea } from 'simargi-component';

export default class App extends React.Component {
    state = {
        value: null
    };
    handleChangeValue = (e) => {
        this.setState({value: e.target.value.length});
    };
    render() {
        return(
            <div className='app'>
                <Textarea maxlength={10} disable={false} onChange={this.handleChangeValue} />
                <p>You entered {this.state.value} symbol</p>
            </div>
        )
    }
}