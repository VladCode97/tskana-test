import {MenuMother} from "../../../mocks/menu-mother";
import {IMenu} from "../../domain/menu-domain";
import {Logo} from "./feature/logo";
import {Links} from "./feature/links";
import {ActionsMenu} from "./feature/actions-menu";
import './styles/style.css';

export const Menu = () => {
    const linksMenu: Array<IMenu> = MenuMother.learMenu();
    return (
        <div className="menu">
            <Logo/>
            <Links titles={linksMenu}/>
            <ActionsMenu/>
        </div>
    )
}