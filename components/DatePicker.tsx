import { css } from '@emotion/react'
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
const past = moment(now).subtract(1, 'years')
const future = moment(now).add(1, 'years')

export function DatePicker({ date, setDate }) {
  // Setup slider
  const scale = scaleTime()
    .domain([past, future])
    .range(sliderRange)
    .clamp(true)
  const sliderVal = scale(date)
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
      css={css`
        /* max-width: 288px; */
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
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
          value={sliderVal}
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
