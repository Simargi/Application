import { createSelector } from 'reselect';

const getTableData = (state) => state.table_data;

export const filterTableVersion = createSelector(
    getTableData,
    (data) => data.filter((item) => {
        //debugger
        return item['version']>5
    })
);
