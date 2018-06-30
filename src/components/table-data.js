import React from 'react';

const TableData = ({ renderItem }) => {
  return (
    <div className='table-data'>
      <div className='container-fluid'>
        <div className='row table-data-row table-data-head'>
          <div className='col-md-2 column-center'>
            <p className='table-data-head-title'>
              Symbol
            </p>
          </div>
          <div className='col-md-2 column-center'>
            <p className='table-data-head-title'>
              Logo
            </p>
          </div>
          <div className='col-md-2 column-center'>
            <p className='table-data-head-title'>
            Companhia
            </p>
          </div>
          <div className='col-md-2 column-center'>
            <p className='table-data-head-title'>
              Setor
            </p>
          </div>
          <div className='col-md-2 column-center'>
            <p className='table-data-head-title'>
              Ultimo preço
            </p>
          </div>
          <div className='col-md-2 column-center'>
            <p className='table-data-head-title'>
              Preço de abertura
            </p>
          </div>
        </div>
        
        {renderItem}
      </div>
    </div>
  );
};

export default TableData;
