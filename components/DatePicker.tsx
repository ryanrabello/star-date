import { css } from '@emotion/react'
import {
  DatePicker as DatePickerCarbon,
  DatePickerInput,
} from 'carbon-components-react'
import { useCallback } from 'react'

export function DatePicker({ date, setDate }) {
  const handleChange = useCallback((event) => {
    const newDate = event[0]
    if (newDate) {
      setDate(newDate)
    }
  }, [])
  return (
    <div
      css={css`
        max-width: 288px;
      `}
    >
      <DatePickerCarbon
        datePickerType="single"
        value={date}
        onChange={handleChange}
      >
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText=""
          id="date-picker-single"
          onChange={handleChange}
        />
      </DatePickerCarbon>
    </div>
  )
}
