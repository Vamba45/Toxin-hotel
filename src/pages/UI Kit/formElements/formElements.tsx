import { TextField } from '../../../components/textField/textField';
import './formelements.scss';

const FormElements = () => {
    return (
        <div className="formElements uikit">
            <TextField placeholder='Email' isSubscribtion={true}/>
            <TextField placeholder='Email' inputmask='__.__.____'/>
            <TextField placeholder='Email'/>
        </div>
    )
}

export default FormElements;