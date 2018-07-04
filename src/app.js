'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPress } from './actions/index';
import axios from 'axios';
import style from './styles/styles.scss';

// containers
import AppContent from './containers/app-content';

class App extends Component {
    constructor () {
        super();
        this.state = {
            symbol: '',
            data: []
        };
    }

    // load airports data
    componentWillMount () {
        this.getDataList(document.createEvent('Event'));
        // console.log(this);
    }

    // get data from api
    getDataSymbol = (e) => {
        e.preventDefault();

        // XhttpRequest CONFIGS
        const API = 'https://api.iextrading.com/1.0/';

        axios.all([
            axios.get(`${API}/stock/${this.props.symbol}/quote`),
            axios.get(`${API}/stock/${this.props.symbol}/logo`)
        ])
        .then(axios.spread((quoteRes, logoRes) => {
            this.setState({
                data: [{
                    quote: quoteRes.data,
                    logo: logoRes.data.url
                }]
            });
        })).catch(err=>{});
    }
    getDataList = (e) => {
        e.preventDefault();

        const API = 'https://api.iextrading.com/1.0/';
        axios.get(`${API}/stock/market/list/gainers`)
            .then(res => {
                
                let newData = [];
                res.data.map(item =>{
                    newData.push({
                        quote: item,
                        logo: false
                    });
                    // console.log(item)
                });
                // console.log(newData)

                this.setState({
                    data: newData
                });

            })
            .catch(err =>{})
    }

    // render Item
    renderItem () {
        return this.state.data.map(item => {
            // console.log(item);
            return (
                <div className='row table-data-row'>
                    {/* SYMBOL */}
                    <div className='col-md-2 column-center'>
                        <span> 
                            <span className='btn btn--primary'>
                                {item.quote.symbol}
                            </span>
                        </span>
                    </div>

                    {/* PHOTO */}
                    <div className='col-md-2 column-center'>
                        <span className='btn btn--line'>
                            { item.logo ? <img src={item.logo} /> : '--' }
                        </span>
                    </div>
                    
                    {/* NOME */}
                    <div className='col-md-2 column-center'>
                        <p className='flight-data'>
                            {item.quote.companyName}
                        </p>
                    </div>

                    {/* SETOR */}
                    <div className='col-md-2 column-center'>
                        <p className='flight-data'>
                            {item.quote.sector}
                        </p>
                    </div>

                    {/* LASTPRICE */}
                    <div className='col-md-2 column-center'>
                        <p className='flight-data'>
                        {item.quote.latestPrice}
                        </p>
                    </div>

                    {/* OPEN */}
                    <div className='col-md-2 column-center'>
                        <p className='flight-data'>
                        {item.quote.open}
                        </p>
                    </div>
                </div>
            );
        });
    }

    // render
    render () {
        return (
            <AppContent
                getDataSymbol={this.getDataSymbol}
                getDataList={this.getDataList}
                renderItem={this.renderItem()}
            />
        );
    }
}

const mapStateToProps = store => ({ symbol: store.symbolState.symbol});
const mapDispatchToProps = dispatch => bindActionCreators({ keyPress }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
