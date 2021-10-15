import CheckSuccess from '../../styles/images/cheque.svg';
import {Popup} from "./popup";


export const PopupSuccess = () => {
    return (
        <>
            <Popup imageURL={CheckSuccess} content={"Sección iniciada" +
            " correctamente."} typeStyle={"success"}/>
        </>
    )
}