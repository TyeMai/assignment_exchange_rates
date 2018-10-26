import React from 'react';

const Select = (props) => {
  const {
    options,
    handleBaseChosen,
    ...restOfProps
  } = props
  return (<select className="currency_selector" onChange={handleBaseChosen} {...restOfProps}>
    {
      Object.keys(options).map((option) => (<option key={option} value={option}>
        {option}
      </option>))
    }

  </select>)

}

export default Select
