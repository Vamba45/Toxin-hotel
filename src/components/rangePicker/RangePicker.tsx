import { FC, useState } from "react";
import { DatePicker } from 'antd';

import './RangePicker.scss';

import { ConfigProvider } from "antd";
import dayjs from 'dayjs';
import locale from 'antd/locale/ru_RU';

import 'dayjs/locale/ru';

dayjs.locale('ru');

interface IRangePicker {
    defaultValues?: [dayjs.Dayjs, dayjs.Dayjs],
    minDate?: dayjs.Dayjs,
    maxDate?: dayjs.Dayjs,
    onChange?: (dateStrings: [string, string]) => void
}

const RangePicker: FC<IRangePicker> = ({minDate, maxDate, onChange, defaultValues = undefined}: IRangePicker) => {
    return (
        <>
            <ConfigProvider locale={locale}>
                <DatePicker.RangePicker property="value" picker="date"
                    separator={"→"} 
                    placement="bottomLeft"
                    placeholder={["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ"]} 
                    className="toxin-range-picker"
                    format={"DD.MM.YYYY"}

                    defaultValue={defaultValues !== undefined ? [defaultValues[0], defaultValues[1]] : undefined}
                    onChange={onChange}

                    minDate={dayjs(new Date())}/>
            </ConfigProvider>
        </>
    )
}

export default RangePicker;