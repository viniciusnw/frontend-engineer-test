import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
    getDataSymbol,
    getDataList,
    handleChange
}) => {
    return (
        <section className='search-bar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='search-bar-form'>
                            <div className='form-item'>
                                <form action='' className='search-bar-form' onSubmit={getDataList}>
                                    <div className='form-item form-item--submit'>
                                        <div className='vertical-align'>
                                            <div className='vertical-align-item'>
                                                <button className='btn btn--primary'>Mais Negociadas</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <div className='form-item'>
                                
                                <form action='' className='search-bar-form' onSubmit={getDataSymbol}>
                                    <div className='form-item form-item--submit'>
                                        <div className='vertical-align'>
                                            
                                            <div className='vertical-align-item'>
                                                <input className="input-text" onChange={handleChange} type="text" />
                                            </div>

                                            <div className='vertical-align-item'>
                                                <button className='btn btn--primary'>Pesquisar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

SearchBar.propTypes = {
    getDataSymbol: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
