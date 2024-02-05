import DropDown from '../../../components/dropdown/dropdown';
import { TextField } from '../../../components/textField/textField';
import './formelements.scss';
import Checkbox from '../../../components/checkboxx/checkbox';
import Radio from '../../../components/radio/radio';
import Toggle from '../../../components/toggle/toggle';
import Like from '../../../components/like/like';
import Rate from '../../../components/rate/rate';
import CheckBoxList from '../../../components/checkboxExpandable/checkboxList';
import Advantage from '../../../components/advantage/advantage';

import city from '../../../assets/img/icons/city.svg';
import smile from '../../../assets/img/icons/smile.svg';
import avatar from '../../../assets/img/avatar.png';

import Comment from '../../../components/comment/comment';
import RangeSlider from '../../../components/rangeSlider/rangeSlider';

import Pagination from '../../../components/pagination/pagination';

const FormElements = () => {
    return (
        <div className="formElements uikit">
            <TextField placeholder='Email' isSubscribtion={true}/>
            <TextField placeholder='Email' inputmask='__.__.____'/>
            <TextField placeholder='Email'/>

            <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
            <DropDown menuItems={["Спальни", "Кровати", "Ванные комнаты"]} hasButtons={false}/>

            <Checkbox name='some' id='ch1' paragraph='Можно курить'/>
            <Checkbox name='some' id='ch2' paragraph='Можно с питомцами'/>
            <Checkbox name='some' id='ch3' paragraph='Можно пригласить гостей (до 10 человек)'/>
            <Checkbox name='some' id='ch4' paragraph='Разрешено употрбление табачной продукции' disabled={true}/>

            <Radio name='radio-buttins' id='r1' labeltext='мужчина' value='мужчина'/>
            <Radio name='radio-buttins' id='r2' labeltext='женщина' value='женщина'/>
            <Radio name='radio-buttins' id='r3' labeltext='нечто' value='нечто' disabled={true}/>

            <Toggle id='tg1' labeltext='Получать спецпредложения'/>
            <Toggle id='tg2' labeltext='Получать спецпредложения'/>

            <Like value={2}/>
            <Like value={12}/>

            <Rate name='kinopoisk' starCount={5}/>

            <button className='button'>Перейти к оплате</button>
            <button className='button_1'>click me</button>
            <button className='button_2'>click me</button>
            <button className='button_3'>click me</button>

            <CheckBoxList title='expanable textbox' options={["Завтрак", "Письменный стол", 
                                                            "Стул для кормления", "Кроватка", 
                                                            "Телевизор", "Шампунь"]}
                                                            type='expanable'/>

            
            <CheckBoxList title='bullet list' options={["Нельзя с питомцами", 
                                                            "Без вечеринок и мероприятий", 
                                                            "Время прибытия — после 13:00, а выезд до 12:00"]}
                                                            type="bullet"/>

            <CheckBoxList title='rich checkbox buttons' options={["Широкий коридор", 
                                                            "Помощник для инвалидов"]}
                                                            richTitles={[
                                                                "Ширина коридоров в номере не менее 91 см.",
                                                                "На 1 этаже вас встретит специалист и проводит до номера."
                                                            ]}
                                                            type="rich"/>

            <Advantage img={smile} text='Шумопоглощающие стены' title='Комфорт'/>
            <Advantage img={city} text='Окно в каждой из спален' title='Удобство'/>

            <Comment avatar={avatar} likes={12} lastvisit='5 дней назад'
                        username='Мурад Сарафанов' text='Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.'/>
            
            <RangeSlider maxValue={15000} defaultMax={10000} defaultMin={5000} priceGap={1500} title='range slider'/>
            <RangeSlider maxValue={10000} defaultMax={7500} defaultMin={2500} priceGap={1000} title='range slider'/>

            <Pagination/>
        </div> 
    )
}

export default FormElements;