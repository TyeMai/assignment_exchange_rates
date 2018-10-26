import React from "react"
import CurrencyCard from "./CurrencyCard"

const HistCurrencyList = (props) => {
  const {currencies, isFetching, baseCurrency, title} = props
  const currencyList = Object.keys(currencies).map(key => <CurrencyCard currencyName={key} currencies={currencies} key={key} baseCurrency={baseCurrency}/>
  //console.log(currencies))

  //}

  // card-group is the layout wrapper for Bootstrap
  // 4 cards. Add ternary operator to conditionally
  // show Loading... if in the process of fetching.
  return (<div className="container">
    <h1>{title}</h1>
    <h3>
      1 {baseCurrency}
      =
    </h3>
    <div className="card-group">
      {
        isFetching
          ? <p>Loading...</p>
          : currencyList
      }
    </div>

  </div>)
}

export default HistCurrencyList
