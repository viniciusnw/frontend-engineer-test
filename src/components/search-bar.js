import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPress } from './../actions/index';

import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(){
        super();
        this._onChange = this._onChange.bind(this);

    }

    _onChange(e){
        this.props.keyPress(e.target.value)
    }

    render () {
        return (
            <section className='search-bar'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <div className='search-bar-form'>
                                <div className='form-item'>
                                    <form action='' className='search-bar-form' onSubmit={this.props.getDataList}>
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
                                    
                                    <form action='' className='search-bar-form' onSubmit={this.props.getDataSymbol}>
                                        <div className='form-item form-item--submit'>
                                            <div className='vertical-align'>
                                                
                                                <div className='vertical-align-item'>
                                                    <input className="input-text" onChange={this._onChange} type="text" />
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
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ keyPress }, dispatch);
export default connect(null, mapDispatchToProps)(SearchBar);

// SearchBar.propTypes = {
//     getDataSymbol: PropTypes.func.isRequired,
//     handleChange: PropTypes.func.isRequired,
// };

// export default SearchBar;
