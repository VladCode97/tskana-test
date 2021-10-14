import {TitleAuth} from "./features/title-auth";
import {FormAuth} from "./features/form";
import './styles/styles.css';
import ChangeActionImg from './styles/changeAction.png';

export const Auth = () => {
    return (
        <div className="auth-container">
            <TitleAuth/>
            <img className="img-action" alt="changeAction" src={ChangeActionImg}/>
            <FormAuth/>
        </div>
    )
}