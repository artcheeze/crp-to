import React, { Component } from 'react';
import './Crypto.css';
import sound from './a.mp3'
class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    render() {
        var {

            primary_currency,
            secondary_currency,
            last_price,
            volume_24hours,
            change,


        } = this.props.data;
        if (last_price < this.state.num && this.state.num != null) {
            var audio = new Audio(sound);
            audio.play();
        }
        console.log()
        return (

            <li className={"cryptocurrency "}>
                <input className="input is-info" type="text" onChange={e => this.setState({ num: e.target.value })} placeholder="ซื้อมาเท่าไหร่?" />
                <p className="cryptocurrency-name">{secondary_currency}/{primary_currency}</p>
                <h1 className="title is-1" style={last_price < this.state.num ? { color: "red" } : { color: "green" }}>${(+last_price).toFixed(2)}</h1>
                <p className="title is-4" style={Math.sign(change) === -1 ? { color: "red" } : { color: "green" }}>Change {change}%</p>
                <p className="title is-4">Volume {(+volume_24hours).toFixed(1)} </p>
                <div className="columns">
                    <div className="column">
                    <p style={{color:"red"}} className="subtitle is-5"> Sell <br/> {(+this.props.bids).toFixed(2)}</p>
                     </div>
                    <div className="column">
                    <p style={{color:"green"}} className="subtitle is-5"> Buy <br/> {(+this.props.asks).toFixed(2)}</p>
                     </div>
                     </div>
                    
                    
           
            
            </li>
                );
            }
        }
        
export default Crypto;