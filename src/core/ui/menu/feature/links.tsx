import {IMenu} from "../../../domain/menu";
import {FC} from "react";

type links = {
    titles: Array<IMenu>
};

export const Links: FC<links> = (props) => {
    return (
        <div className="menu links">
            {
                props.titles.map((link, index) => {
                    return (
                        <div key={index}>
                            <span
                                className="menu links link">{link.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}