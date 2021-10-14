import './styles/style.css';
import {SectionOne} from "./features/section-one/section-one";
import {SectionTwo} from "./features/section-two/section-two";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-information">
                <SectionOne/>
                <SectionTwo/>
            </div>
        </footer>
    )
}