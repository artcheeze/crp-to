import React, { Component } from 'react';
import './Tickers.css';
import Crypto from './Crypto';
import axios from 'axios';

class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { }
               ],
            bids:0,
            asks:0,
        };
    }
    fetchCryptocurrencyData() {
        axios.get("https://bx.in.th/api/")
            .then(response => {
                var obj = response; 
                this.setState({ data: obj.data[25]});
                this.setState({ bids: obj.data[25].orderbook.bids.highbid});
                this.setState({ asks: obj.data[25].orderbook.asks.highbid});
               
            })
          
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 1000);
    }


    render() {
        var tickers = <Crypto data={this.state.data} bids={this.state.bids} asks={this.state.asks} />
       
       
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>อย่ามัวแต่เล่นเกมส์ ตั้งใจดูด้วย !!</p>
            </div>
        );
    }
}

export default Tickers;