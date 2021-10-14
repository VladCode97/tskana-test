import {IHeader} from "../core/domain/header";

export class HeaderMother {

    static learnHeader(): Array<IHeader> {
        return [
            {
                title: 'NUEVO',
                isIcon: true
            },
            {
                title: 'JEANS',
                isIcon: true
            },
            {
                title: 'ROPA',
                isIcon: true
            },
            {
                title: 'ZAPATOS',
                isIcon: true
            },
            {
                title: 'VESTIDOS',
                isIcon: true
            },
            {
                title: 'ACCESORIOS',
                isIcon: false
            },
            {
                title: 'BÁSICOS',
                isIcon: false
            },
            {
                title: 'COLECCIONES',
                isIcon: false
            },
            {
                title: 'DESCUENTOS',
                isIcon: false
            }
        ];
    }

}