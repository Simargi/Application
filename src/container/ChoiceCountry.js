import React from 'react';
import PropTypes from 'prop-types';

export default class ChoiceCountry extends React.Component {
    state = {
        selectValue: 'Choice country...'
    };
    componentWillMount() {
        let cache = localStorage.getItem('country');
        cache = JSON.parse(cache);
        const time_now = new Date().getTime();
        const life_cycle = 1000 * 60;
        if (cache) {
            if ((time_now - cache.time) > life_cycle) {
                localStorage.clear();
            } else {
                this.setState({ selectValue: cache.name });
            }
        }
    }
    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value
        });
        localStorage.setItem('country', JSON.stringify({'name': e.target.value, time: new Date().getTime()}) );
    };
    render() {
        const { country_list } = this.props;
        return(
            <div className='select-country'>
                <select name="country_list" id="country_list" value={this.state.selectValue} onChange={this.handleChange}>
                    <option value={'Choice country...'}>Choice country...</option>
                    {country_list.map((item, i) => {
                        return <option key={i} value={item.name}>{item.name}</option>
                    })}
                </select>
            </div>
        )
    }
}