import React, { memo } from 'react'
import { NepaliDatePicker } from "nepali-datepicker-reactjs"

const DatePicker=({date,handleDateChange})=>{
    console.log('date',date)
    return(
        <div>
         <NepaliDatePicker
          inputClassName="form-control"
          
          value={date}
          onChange={(e)=>handleDateChange(e)}
          options={{ calenderLocale: "ne", valueLocale: "en"}}
        />
      
        </div>
    )
}
export default memo(DatePicker)



