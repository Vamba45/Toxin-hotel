import { TextField } from '../../../components/textField/textField';
import './formElements.scss';

const FormElements = () => {
    return (
        <div className="formElements uikit">
            <TextField placeholder='Email' isSubscribtion={true}/>
            <TextField placeholder='Email'/>
        </div>
    )
}

export default FormElements;