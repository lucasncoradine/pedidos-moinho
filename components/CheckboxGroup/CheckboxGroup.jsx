import { Checkbox } from '@components'
import { Grid } from 'components/Grid/Grid'
import { GridItem } from 'components/Grid/GridItem'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const CheckboxGroup = ({ options, maxItems, onChange }) => {
  const [selected, setSelected] = useState([])

  const handleOptionChange = (isChecked, value) => {
    let currentSelection = [...selected]

    if (isChecked) currentSelection.push(value)
    else currentSelection = currentSelection.filter((x) => x !== value)

    onChange?.(currentSelection)

    return setSelected(currentSelection)
  }

  const renderOptions = () => {
    return options.map((opt, index) => {
      const checked = selected.includes(opt)
      const maxReached = maxItems && selected.length === maxItems

      return (
        <GridItem key={index}>
          <Checkbox
            label={opt}
            checked={checked}
            disabled={maxReached && !checked}
            onChange={handleOptionChange}
          />
        </GridItem>
      )
    })
  }

  return (
    <Grid direction="column" spacing={2}>
      {renderOptions()}
    </Grid>
  )
}

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  maxItems: PropTypes.number,
}
