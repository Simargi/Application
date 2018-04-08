import { createSelector } from 'reselect';

const getTableData = (state) => state.company_host_data;

export const filterTableVersion = createSelector(
    getTableData,
    (data) => data.filter((item) => {
        return item['version']>5
    })
);
