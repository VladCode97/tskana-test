import {FC, useRef, useState} from "react";
import Close from "../../styles/images/Grupo 11693.svg";

type Props = {
    imageURL: string;
    content: string;
    typeStyle: string;
}

export const Popup:FC<Props> = (props) => {
    const [close, setClose] = useState<boolean>(false);
    const refPopup = useRef<any>(null);
    const handleClose = () => {
        refPopup.current.style.display = "none";
        setClose(true);
        console.log(close);
    };
    return (
        <div ref={refPopup} className="popup-container">
            <div className={props.typeStyle}>
                <img src={props.imageURL} alt="CheckSuccess"/>
                <h2>{props.content}</h2>
                <img className="close" src={Close} onClick={handleClose} alt="CheckSuccess"/>
            </div>
        </div>
    )
}