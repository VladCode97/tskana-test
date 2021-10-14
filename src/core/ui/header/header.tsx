import './styles/style.css';
import ArrowDown from './styles/down-arrow.png';
import {HeaderMother} from "../../../mocks/header-mother";

export const Header = () => {
    return (
        <header className="header">
            <div className="container-header">
                {
                    HeaderMother.learnHeader().map((x) => {
                        return (
                            <span className="link-css">{x.title} {(x.isIcon) &&
                            <img className="arrow-img" src={ArrowDown}
                                 alt="arrow"/>}  </span>
                        )
                    })
                }
            </div>
        </header>
    )
}