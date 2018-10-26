import React, {Component} from 'react';
//import './App.css';
import CurrencyList from "./CurrencyList"
import Select from "./Select"
import Input from "./Input"

class App extends Component {

  render() {
    const {
      currencies,
      isFetching,
      baseCurrency,
      handleBaseChosen,
      handleHistBaseChosen,
      histBaseCurrency,
      histCurrencies,
      date,
      value,
      histValue,
      onChange,
      onChangeHist
    } = this.props
    return (<div className="App">
      <CurrencyList baseCurrency={baseCurrency} isFetching={isFetching} currencies={currencies} value={value} title="Currency List"/>
      <Input type='number' placeholder='Amount to convert to desired currency' onChange={onChange}/>
      <Select options={currencies} handleBaseChosen={handleBaseChosen}/>
      <CurrencyList baseCurrency={histBaseCurrency} isFetching={isFetching} currencies={histCurrencies} value={histValue} title="Historial Currency Conversions">
        On date {date}
      </CurrencyList>
      <Select options={currencies} handleBaseChosen={handleHistBaseChosen}/>
      <Input type='number' placeholder='Amount to convert to desired currency' onChange={onChangeHist}/>
    </div>);
  }
}

export default App;
