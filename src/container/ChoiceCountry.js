import React from 'react';
import PropTypes from 'prop-types';


export default class ChoiceCountry extends React.Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    state = {
        value: 'Choice country...'
    };
    componentWillMount() {
        const cache = localStorage.getItem('country');
        const time_now = new Date().getTime();
        const life_cycle = 1000 * 60 * 2;
        if (cache) {
            this.setState({ value: cache });
            return;
        }
        /*if ((time_now - cache) > life_cycle) {
            localStorage.clear();

        }*/
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        localStorage.setItem('country', e.target.value);
    }
    render() {
        const { country_list } = this.props;
        console.log(this.state.value)
        return(
            <div className='select-country'>
                <select name="country_list" id="country_list" value={this.state.value} onChange={this.handleChange}>
                    <option value={'Choice country...'}>Choice country...</option>
                    {country_list.map((item, i) => {
                        return <option key={i} value={item.name}>{item.name}</option>
                    })}
                </select>
            </div>
        )
    }
}