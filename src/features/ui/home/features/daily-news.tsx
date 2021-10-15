import {IProducts} from "../../../domain/models/products";
import {FC, useEffect, useState} from "react";
import {formatMoney} from "../../../../core/utils/format-number/format-number";

type PropsShop = {
    products: Array<IProducts>
}
export const DailyNews: FC<PropsShop> = (props) => {

    return (
        <div className="container-daily-news">
            <h1 className="title">NOVEDADES DIARIAS</h1>
            <div className="container-shopping">
                {
                    props.products.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <img className="product-image"
                                     src={product.image} alt={product.image}/>
                                <h1 className="product-title">{product.title}</h1>
                                <h1 className="product-price">{formatMoney(product.price)}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}