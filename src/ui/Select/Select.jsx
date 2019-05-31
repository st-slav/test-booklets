import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

export const Select = ({ options, id = '', ...restProps }) => {
  const [inputValue, handleChange] = useState('')
  const renderedOptions = useMemo(() => options.map(({ label, value }) => <option key={`select-datalist-option-${value}`} value={value}>{label}</option>), [options])
  
  return (
    <>
      <input id={`select-input-${id}`} list={`select-datalist-${id}`} {...restProps} onChange={handleChange} />
      <datalist id={`select-datalist-${id}`}>
        {renderedOptions}
      </datalist>
    </>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
}