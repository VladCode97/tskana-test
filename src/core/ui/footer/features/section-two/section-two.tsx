import {IconsSectionTwo} from "./features/icons-sections-two";
import {InputSectionTwo} from "./features/input-section-two";
import PaymentImg from './features/Grupo 11622@2x.png';

export const SectionTwo = () => {
    return (
        <section className="information-sec-two">
            <div className="find-icons">
                <h1 className="title-section-two">ENCUÉNTRANOS EN</h1>
                <IconsSectionTwo/>
            </div>
            <div className="subscribe">
                <h1 className="title-section-two">SUSCRÍBETE AL NEWSLETTER</h1>
                <p className="content-section-two">
                    Al hacerlo puedes obtener información de descuentos y
                    promociones.
                </p>
                <InputSectionTwo/>
                <p className="content-send">
                    Al hacer click en ENVIAR, acepta nuestra <span>política de privacidad y cookies.</span>
                </p>
            </div>
            <div className="payment">
                <h1 className="title-section-two">ACEPTAMOS</h1>
                <img className="payment-image" src={PaymentImg}
                     alt="PaymentImg"/>
            </div>
        </section>
    )
}