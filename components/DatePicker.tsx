import { css } from '@emotion/react'
import React from 'react'
import {
  DatePicker as DatePickerCarbon,
  DatePickerInput,
  Slider,
} from 'carbon-components-react'
import { useCallback, useState } from 'react'
import { scaleTime } from 'd3'
import moment from 'moment'
import { debounce } from 'lodash'

const sliderRange = [0, 1000]
const now = new Date(Date.now())
const past = moment(now).subtract(5, 'years').toDate()
const future = moment(now).add(5, 'years').toDate()
const scale = scaleTime().domain([past, future]).range(sliderRange).clamp(true)

export function DatePicker({ date, setDate }) {
  // Setup slider
  const handleSliderChange = useCallback(
    debounce(({ value }) => {
      setDate(scale.invert(value))
    }, 500),
    [setDate],
  )

  // Date picker
  const handleDatePickerChange = useCallback((event) => {
    const newDate = event[0]
    if (newDate) {
      setDate(newDate)
    }
  }, [])
  return (
    <div
      //@ts-ignore
      css={wrapperStyles}
    >
      <div>
        <DatePickerCarbon
          datePickerType="single"
          value={date}
          onChange={handleDatePickerChange}
        >
          <DatePickerInput
            placeholder="mm/dd/yyyy"
            labelText=""
            id="date-picker-single"
            onChange={handleDatePickerChange}
          />
        </DatePickerCarbon>
      </div>
      <div>
        <Slider
          labelText=""
          // <Slider /> only update the slider when this value changes so we'll leave it this way
          value={(sliderRange[1] - sliderRange[0]) / 2}
          onChange={handleSliderChange}
          min={sliderRange[0]}
          max={sliderRange[1]}
          minLabel={() => 'Past'}
          maxLabel={() => 'Future'}
          step={1}
          stepMultiplier={10}
          novalidate
          hideTextInput
        />
      </div>
    </div>
  )
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
