import {CompanySectionOne} from "./features/company";
import {HelpSectionOne} from "./features/help";
import {InfoAdminSections} from "./features/info-admin";

export const SectionOne = () => {
    return (
        <section className="information-sec-one">
            <div className="sections">
                <CompanySectionOne/>
                <HelpSectionOne/>
                <InfoAdminSections/>
            </div>
            <h2 className="copyright-text">Copyright © 2021 Tsakana. Todos los derechos reservados.</h2>
        </section>
    )
}