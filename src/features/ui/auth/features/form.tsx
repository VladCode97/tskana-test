import {useState} from "react";
import {Alert} from "./alert";
import {PopupSuccess} from "./popup-success";

export const FormAuth = () => {
    const [email, setEmail] = useState<string>("");
    const [messageSuccess, setMessageSuccess] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<boolean>(false);

    const handleInformation = () => {
        if (password.length === 0 && email.length === 0) {
            setErrorPassword(true);
            setErrorEmail(true);
        } else {
            setMessageSuccess(true);
        }
    }

    return (
        <div className="form-auth">
            {
                messageSuccess && (
                    <PopupSuccess/>
                )
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
                        <Alert message={'Campo contraseña obligatorio'}/>)}
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
                    {errorPassword && (<Alert message={'Campo correo' +
                    ' obligatorio'}/>)}
                </div>
            </div>
            <div className="forget-password">
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