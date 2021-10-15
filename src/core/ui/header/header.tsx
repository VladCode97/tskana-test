import './styles/style.css';
import ArrowDown from './styles/images/down-arrow.png';
import {HeaderMother} from "../../../mocks/header-mother";

export const Header = () => {
    return (
        <header className="header">
            <div className="container-header">
                {
                    HeaderMother.learnHeader().map((x, index) => {
                        return (
                            <span
                                key={index}
                                className="link-css">{x.title} {(x.isIcon) &&
                            <img
                                key={index}
                                className="arrow-img"
                                 src={ArrowDown}
                                 alt="arrow"/>}  </span>
                        )
                    })
                }
            </div>
        </header>
    )
}