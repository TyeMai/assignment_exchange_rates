import React from 'react';
import Button from './Button'

const CurrencyCard = (props) => {
  const {currencyName, currencies, baseCurrency, value, histValue} = props

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (<div className="CurrencyCard card" style={{
      maxWidth: '130px'
    }}>

    <div className="card-block">
      {/* <h4>{first_name} {last_name}</h4> */}
      <h4>{currencyName}
        {(Math.round(currencies[currencyName] / currencies[baseCurrency] * 100)) / 100 * value}
      </h4>
    </div>

  </div>)
}

export default CurrencyCard
