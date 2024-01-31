import DropDown from '../../../components/dropdown/dropdown';
import { TextField } from '../../../components/textField/textField';
import './formelements.scss';
import Checkbox from '../../../components/checkboxx/checkbox';
import Radio from '../../../components/radio/radio';
import Toggle from '../../../components/toggle/toggle';
import Like from '../../../components/like/like';
import Rate from '../../../components/rate/rate';
import CheckBoxList from '../../../components/checkboxList/checkboxList';

const FormElements = () => {
    return (
        <div className="formElements uikit">
            <TextField placeholder='Email' isSubscribtion={true}/>
            <TextField placeholder='Email' inputmask='__.__.____'/>
            <TextField placeholder='Email'/>

            <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
            <DropDown menuItems={["Спальни", "Кровати", "Ванные комнаты"]} hasButtons={false}/>

            <Checkbox name='some' id='ch1' labeltext='Можно курить'/>
            <Checkbox name='some' id='ch2' labeltext='Можно с питомцами'/>
            <Checkbox name='some' id='ch3' labeltext='Можно пригласить гостей (до 10 человек)'/>
            <Checkbox name='some' id='ch4' labeltext='Разрешено употрбление табачной продукции' disabled={true}/>

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
                                                            "Телевизор", "Шампунь"]}/>
        </div>
    )
}

export default FormElements;