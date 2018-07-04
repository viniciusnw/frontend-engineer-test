import React from 'react';
import PropTypes from 'prop-types';

// components
import NavBar from './../components/navbar';
import SearchBar from './../components/search-bar';
import TableData from './../components/table-data';
import { Store } from './../store/index';

const AppContent = ({
    getDataSymbol,
    getDataList,
    renderItem
}) => {
  return (
    <div>
        <NavBar />
        <SearchBar
            store={Store}
            getDataSymbol={getDataSymbol}
            getDataList={getDataList}
        />

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <TableData renderItem={renderItem} />
                </div>
            </div>
        </div>
    </div>
  );
};

AppContent.propTypes = {
    getDataSymbol: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default AppContent;
