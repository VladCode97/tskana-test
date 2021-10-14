import {IMenu} from "../core/domain/menu-domain";

export class MenuMother {
    static learMenu(): Array<IMenu> {
        return [{
            title: 'Mujer'.toLocaleUpperCase()
        },
            {
                title: 'Hombre'.toLocaleUpperCase()
            },
            {
                title: 'Niñas'.toLocaleUpperCase()
            }
        ]
    }
}