import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerForm = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='date-container'>
            <p className='date-info'>Enter list Date</p>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={Date.now()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Click to select a date"
                className="date-picker"
            />
        </div>
    )
}

export default DatePickerForm