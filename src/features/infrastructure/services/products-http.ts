import {IProductsRepository} from "../../domain/repository/products-repository";
import {IProducts} from "../../domain/models/products";

export class ProductsHttp implements IProductsRepository {

    async viewAll(model: IProducts): Promise<Array<IProducts>> {
        try {
            return await (await fetch('https://fakestoreapi.com/products?limit=8')).json()
        } catch (exception: any) {
            throw new Error(exception.message);
        }
    }

}