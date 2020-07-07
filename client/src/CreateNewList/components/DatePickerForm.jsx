import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerForm = (props) => {

    return (
        <div className='date-container'>
            <p className='date-info'>Enter list Date</p>
            <DatePicker
                selected={props.expDate}
                onChange={date => props.setExpDate(date)}
                minDate={Date.now()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Click to select a date"
                className="date-picker"
            />
        </div>
    )
}

export default DatePickerForm