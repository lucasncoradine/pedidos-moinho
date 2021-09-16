import { RadioButton } from '@components'
import { Grid } from 'components/Grid/Grid'
import { GridItem } from 'components/Grid/GridItem'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const RadioGroup = ({ options, onChange }) => {
  const [selected, setSelected] = useState('')

  const handleOptionChange = (value) => {
    setSelected(value)

    onChange?.(value)
  }

  const renderOptions = () => {
    return options.map((opt, index) => (
      <GridItem key={index}>
        <RadioButton
          value={opt.value}
          label={opt.label}
          checked={selected === opt.value}
          onClick={(val) => handleOptionChange(val)}
        />
      </GridItem>
    ))
  }

  return (
    <Grid direction="column" spacing={2}>
      {renderOptions()}
    </Grid>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
  ),
  onChange: PropTypes.func,
}
