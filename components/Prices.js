import { Component } from 'react';

class Prices extends Component {
    state = {
        currency: "USD"
    }
    onChangeHandler = (e) => {
        this.setState({
            currency: e.target.value
        })
    }

    render(){
        let output = "";
        if(this.state.currency === "USD"){
           output = <h1>Bitcoin rate for <span className="badge badge-primary">{this.props.bpi.bpi.USD.code} </span>  is <b>{this.props.bpi.bpi.USD.rate}</b> </h1>
        }
        else if(this.state.currency === "EUR"){
           output =  <h1>Bitcoin rate for <span className="badge badge-primary">{this.props.bpi.bpi.EUR.code} </span> is <b>{this.props.bpi.bpi.EUR.rate}</b></h1>
        }
        else if(this.state.currency === "GBP"){
           output =  <h1>Bitcoin rate for <span className="badge badge-primary">{this.props.bpi.bpi.GBP.code} </span> is <b>{this.props.bpi.bpi.GBP.rate} </b></h1>
        }
        return (
            <div className="container">
                {output}
                <select className="form-control" onChange={this.onChangeHandler }>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
        )
    }
}

export default Prices;