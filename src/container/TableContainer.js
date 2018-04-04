import React from 'react';
import PropTypes from 'prop-types';

class TableContainer extends React.Component {
    static defaultProps = {
    };
    static propTypes = {
        headers: PropTypes.array,
        tableData: PropTypes.arrayOf(PropTypes.object)
    };
    render() {
        const { headers, tableData } = this.props;
        //console.log(tableData)
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            {headers.map((item, idx) => {
                                return <th key={idx}>{item}</th>
                            })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((obj, irow) => {
                            return <tr key={irow} data-id={obj['id']}>{Object.keys(obj).map((objKey, icell) => {
                                return <td key={icell}>{obj[objKey]}</td>
                            })
                            }</tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableContainer