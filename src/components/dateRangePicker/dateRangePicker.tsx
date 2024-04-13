import { FC, useEffect, useState } from "react";
import './dateRangePicker.scss';
import { DatePicker } from "@mui/x-date-pickers";
import * as dayjs from 'dayjs';

const DateRangePicker: FC = () => {
    const [minDate, setMinDate] = useState<dayjs.Dayjs | null>();
    const [maxDate, setMaxDate] = useState<dayjs.Dayjs | null>();
    
    const [cleared, setCleared] = useState<boolean>(false);

    function ClearableProp() {
        const [cleared, setCleared] = useState<boolean>(false);
      
        useEffect(() => {
          if (cleared) {
            const timeout = setTimeout(() => {
              setCleared(false);
            }, 1500);
      
            return () => clearTimeout(timeout);
          }
          return () => {};
        }, [cleared]);
    }

    return (
        <div className="daterange">
            <DatePicker onAccept={(value) => {
                if(maxDate?.isBefore(value)) {
                    setMaxDate(value);
                }

                setMinDate(value);
            }}

            slotProps={{
                field: { clearable: true, onClear: () => setCleared(true) },
            }}

            format="DD.MM.YYYY"
            />

            <div className="daterange__line">
                -
            </div>

            <DatePicker minDate={minDate} value={maxDate} onAccept={(value) => {
                setMaxDate(value);
            }}

            format="DD.MM.YYYY"

            slotProps={{
                field: { clearable: true, onClear: () => setCleared(true) },
            }}/>
        </div>
    )
}

export default DateRangePicker;