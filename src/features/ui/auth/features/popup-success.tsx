import CheckSuccess from '../styles/cheque.svg';
import Close from '../styles/Grupo 11693.svg';
import {useRef, useState} from "react";
export const PopupSuccess = () => {
    const [close, setClose] = useState<boolean>(false);
    const refPopup = useRef<any>(null);
    const handleClose = () => {
        refPopup.current.style.display = "none";
        setClose(true);
    };
    return (
        <div ref={refPopup} className="popup-container">
            <div className="success">
                <img src={CheckSuccess} alt="CheckSuccess"/>
                <h2>Sección iniciada correctamente.</h2>
                <img className="close" src={Close} onClick={handleClose} alt="CheckSuccess"/>
            </div>
        </div>
    )
}