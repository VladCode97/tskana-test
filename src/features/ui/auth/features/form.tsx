import {useState} from "react";
import {Alert} from "./alert";
import {PopupSuccess} from "./popups/popup-success";
import {container} from "../../../../core/dependency-inject/container";
import {GetUserCommand} from "../../../aplications/users/get-user-command";
import {useHistory} from "react-router-dom";

export const FormAuth = () => {
    const [email, setEmail] = useState<string>("");
    const [messageSuccess, setMessageSuccess] = useState<boolean>()
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const history = useHistory();

    const getData = async (email: string, password: string) => {
        return await container.resolve(GetUserCommand).execute(email, password);
    }

    const handleInformation = async () => {
        if (password.length === 0 && email.length === 0) {
            setErrorPassword(true);
            setErrorEmail(true);
        } else {
            const user = await getData(email, password);
            if (user !== undefined) {
                setMessageSuccess(true);
                setTimeout(() => {
                    history.push('/home');
                }, 2000);
            } else {
                setMessageSuccess(false);
            }
        }
    }

    return (
        <div className="form-auth">
            {
                (messageSuccess) && <PopupSuccess/>
            }
            <div className="form-fields">
                <div className="field">
                    <label>Correo electrónico</label>
                    <input
                        style={{
                            border: (errorEmail) ? '2px solid red' : '2px' +
                                ' solid black'
                        }}
                        onChange={(event: any) => {
                            if (event.target.value.length === 0) {
                                setErrorEmail(true);
                            } else {
                                setEmail(event.target.value);
                                setErrorEmail(false);
                            }
                        }}
                        type='email' placeholder="ingrese un correo"/>
                    {errorEmail && (
                        <Alert message={'Campo correo obligatorio'}/>)}
                </div>
                <div className="field">
                    <label>Constraseña</label>
                    <input
                        style={{border: (errorPassword) ? '2px solid red' : '2px solid black'}}
                        onChange={(event: any) => {
                            if (event.target.value.length === 0) {
                                setErrorPassword(true);
                            } else {
                                setPassword(event.target.value);
                                setErrorPassword(false);
                            }
                        }}
                        type='password' placeholder="****"/>
                    {errorPassword && (<Alert message={'Campo contraseña' +
                    ' obligatorio'}/>)}
                </div>
            </div>
            <div className="forget-password">
                {
                    messageSuccess === false &&
                    (<h1 className="user-no-found">Usuario no encontrado</h1>)
                }
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" target="_blank"
                > He olvidado mi contraseña</a>
            </div>
            <div className="forger-data">
                <input type='checkbox'/>
                <p>Quiero mantener mi sesión iniciada para personalizar mi
                    experiencia de compra.</p>
            </div>
            <input type='button'
                   style={{cursor: "pointer"}}
                   onClick={handleInformation} className="signIn"
                   value={'Iniciar' +
                   ' sesión'}/>
        </div>
    )
}