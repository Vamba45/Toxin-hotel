import { FC } from "react";
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import './RangePicker.scss';

import { ConfigProvider } from "antd";
import locale from 'antd/es/locale/ru_RU';

import moment from "moment";


interface IRangePicker {
    defaultValues?: [string, string],
    minDate?: string | undefined,
    maxDate?: string | undefined,
    onChange?: (date: [string, string]) => void
}

const RangePicker: FC<IRangePicker> = ({minDate, maxDate, onChange, defaultValues = undefined}: IRangePicker) => {
    return (
        <>
            <ConfigProvider locale={locale}>
                <DatePicker.RangePicker
                    picker="date"
                    separator={"→"} 
                    placement="bottomRight"
                    placeholder={["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ"]} 
                    className="toxin-range-picker"
                    format={"DD.MM.YYYY"}

                    defaultValue={defaultValues !== undefined ? [moment(defaultValues[0]), moment(defaultValues[1])] : undefined}

                    onChange={(dates, dateString) => {
                            onChange ? onChange(dateString) : ""; 
                    }}
                />
            </ConfigProvider>
        </>
    )
}

export default RangePicker;