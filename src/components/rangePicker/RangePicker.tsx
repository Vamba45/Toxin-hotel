import { FC } from "react";
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';

import './RangePicker.scss';

import { ConfigProvider } from "antd";
import dayjs from 'dayjs';
import locale from 'antd/es/locale/ru_RU';

import 'dayjs/locale/ru';

dayjs.locale('ru');

interface IRangePicker {
    defaultValues?: [dayjs.Dayjs, dayjs.Dayjs],
    minDate?: dayjs.Dayjs | undefined,
    maxDate?: dayjs.Dayjs | undefined,
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

                    //defaultValue={defaultValues !== undefined ? [defaultValues[0], defaultValues[1]] : undefined}

                    onClick={(e) => {
                    }}

                    onChange={(dates, dateString) => {
                            onChange ? onChange(dateString) : ""; 
                            (document.querySelector('.ant-picker-dropdown') as HTMLElement).classList.add("levi")
                    }}
                />
            </ConfigProvider>
        </>
    )
}

export default RangePicker;