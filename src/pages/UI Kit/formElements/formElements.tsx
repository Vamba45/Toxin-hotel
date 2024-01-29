import DropDown from '../../../components/dropdown/dropdown';
import { TextField } from '../../../components/textField/textField';
import './formelements.scss';
import Checkbox from '../../../components/checkboxx/checkbox';
import Radio from '../../../components/radio/radio';

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
        </div>
    )
}

export default FormElements;