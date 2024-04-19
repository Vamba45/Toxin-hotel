import { FC, useState } from "react";
import { DatePicker } from 'antd';
import './RangePicker.scss';

import { ConfigProvider } from "antd";
import dayjs from 'dayjs';
import locale from 'antd/locale/ru_RU';

import 'dayjs/locale/ru';

dayjs.locale('ru');

const RangePicker: FC = () => {
    return (
        <>
            <ConfigProvider locale={locale}>
                <DatePicker.RangePicker picker="date"
                    separator={"→"} 
                    placement="bottomLeft"
                    placeholder={["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ"]} 
                    className="toxin-range-picker"
                    format={"DD.MM.YYYY"}

                    minDate={dayjs(new Date())}/>
            </ConfigProvider>
        </>
    )
}

export default RangePicker;