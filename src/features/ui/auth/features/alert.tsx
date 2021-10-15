import AlertImg from '../styles/images/important.svg';
import {FC} from "react";

type props = {
    message: string;
}

export const Alert: FC<props> = (props) => {
    return (
        <div className="alert">
            <img src={AlertImg} alt="AlertImg"/>
            <span
                style={{color: "red"}}>{props.message}</span>
        </div>
    )
}