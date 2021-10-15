import {SummerHome} from "./features/summer-home";
import './styles/style.css';
import {useEffect, useState} from "react";
import {container} from "../../../core/dependency-inject/container";
import {GetAllProductsQuery} from "../../aplications/products/get-all-products-query";
import {DailyNews} from "./features/daily-news";

export const Home = () => {
    const [productsResponse, setProductsResponse] = useState<any>();
    const getData = async () => {
        const response = await container.resolve(GetAllProductsQuery).execute();
        setProductsResponse(response);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="container-home">
            <SummerHome/>
            <DailyNews
                products={(productsResponse && productsResponse.length > 0) ? productsResponse : []}/>
        </div>
    )
}