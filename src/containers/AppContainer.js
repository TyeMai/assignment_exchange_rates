import React from 'react';
import App from '../components/App';

class AppContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      currencies: [],
      histCurrencies: [],
      isFetching: false,
      baseCurrency: 'EUR',
      histBaseCurrency: 'EUR',
      date:"2013-03-16",
      value: 1,
      histValue: 1
    }
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    fetch('http://data.fixer.io/api/latest?access_key=98d3d1007f2f4c291b0e1b20ce60a4ec&symbols=EUR,USD,AUD,CAD,GBP,JPY&format=1').then((response) =>
    response.json()).then((json) => {
      this.setState({currencies: json.rates, isFetching: false})
    })
    fetch('http://data.fixer.io/api/2013-03-16?access_key=98d3d1007f2f4c291b0e1b20ce60a4ec&symbols=EUR,USD,AUD,CAD,GBP,JPY&format=1').then((response) =>
    response.json()).then((json) => {
      this.setState({histCurrencies: json.rates, isFetching: false})
    })

  }


  handleBaseChosen = (e) => {
    this.setState({
      baseCurrency: e.target.value,
    })
  }

  handleHistBaseChosen = (e) => {
    this.setState({
      histBaseCurrency: e.target.value,
    })
  }

  onChangeHist = (e) =>{
    this.setState({
      histValue: e.target.value
    })
  }

  onChange = (e)=>{
    this.setState({
      value: e.target.value
    })
  }


  render() {
    return (<App handleBaseChosen={this.handleBaseChosen} handleHistBaseChosen={this.handleHistBaseChosen} onChangeHist={this.onChangeHist} onChange={this.onChange} baseCurrency={this.baseCurrency} {...this.state}/>)
  }
}

export default AppContainer
