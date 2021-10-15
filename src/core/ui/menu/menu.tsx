import {MenuMother} from "../../../mocks/menu-mother";
import {IMenu} from "../../domain/menu";
import {Logo} from "./feature/logo";
import {Links} from "./feature/links";
import {ActionsMenu} from "./feature/actions-menu";
import './styles/style.css';
import {ActionMenu} from "./feature/action-menu";

export const Menu = () => {
    const linksMenu: Array<IMenu> = MenuMother.learMenu();
    return (
        <div className="menu">
            <ActionMenu/>
            <Logo/>
            <Links titles={linksMenu}/>
            <ActionsMenu/>
        </div>
    )
}