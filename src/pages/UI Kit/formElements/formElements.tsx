import DropDown from '../../../components/dropdown/dropdown';
import { TextField } from '../../../components/textField/textField';
import './formelements.scss';
import Checkbox from '../../../components/checkboxx/checkbox';

const FormElements = () => {
    return (
        <div className="formElements uikit">
            <TextField placeholder='Email' isSubscribtion={true}/>
            <TextField placeholder='Email' inputmask='__.__.____'/>
            <TextField placeholder='Email'/>

            <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
            <DropDown menuItems={["Спальни", "Кровати", "Ванные комнаты"]} hasButtons={false}/>

            <Checkbox name='some' id='1' labeltext='Можно курить'/>
            <Checkbox name='some' id='2' labeltext='Можно с питомцами'/>
            <Checkbox name='some' id='3' labeltext='Можно пригласить гостей (до 10 человек)'/>
        </div>
    )
}

export default FormElements;