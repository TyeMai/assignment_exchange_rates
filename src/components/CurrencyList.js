import React from "react"
import CurrencyCard from "./CurrencyCard"

const CurrencyList = (props) => {
  const {
    currencies,
    isFetching,
    baseCurrency,
    title,
    children,
    value
  } = props
  // Generate the UserCard for each user

  const currencyList = Object.keys(currencies).map(key => <CurrencyCard currencyName={key} currencies={currencies} key={key} baseCurrency={baseCurrency} value={value}/>)

  // card-group is the layout wrapper for Bootstrap
  // 4 cards. Add ternary operator to conditionally
  // show Loading... if in the process of fetching.
  return (<div className="container">
    <h1>{title}</h1>
    <h2>{children}</h2>
    <h3>
      {value}  
      {baseCurrency}
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

export default CurrencyList
