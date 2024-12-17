import React, { useRef} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss'

const DateSelector = ({ labelText, selected, onChange, noMinDate, includeTime = false, isTodayMaxDate = false, ...rest }) => {
   const datePickerRef = useRef(null)
   return (
      <>
         <div className="input-wrapper">
            <label className="input-label">
               {labelText} {rest?.required ? '*' : ''}
            </label>
            <DatePicker
               ref={datePickerRef}
               className={`${(!selected && rest?.required ? ' error' : '')} control ${rest.disabled ? 'disabled' : ''}`}
               selected={selected}
               minDate={noMinDate ? false : rest?.minDate ? rest?.minDate : moment().add(0, 'days').toDate()}
               maxDate={isTodayMaxDate ? new Date() : isTodayMaxDate}
               dateFormat={includeTime ? "yyyy-MM-dd h:mm aa" : "yyyy-MM-dd"}
               onChange={onChange}
               useWeekdaysShort={true}
               scrollableYearDropdown
               peekNextMonth
               showMonthDropdown
               showYearDropdown
               showTimeInput={includeTime}
               dropdownMode="select"
               {...rest}
            />

            {rest?.required && !selected && (<>
               <span>
                  <i className="error-icon" />
               </span>
               <div className="errorMssg">{rest.requiredmsg}</div>
            </>
            )}
         </div>
      </>
   );
};

export default DateSelector;
