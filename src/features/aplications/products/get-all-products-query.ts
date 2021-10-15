import {inject, injectable} from "tsyringe";
import {
    PRODUCTS_REPOSITORY,
} from "../../../core/dependency-inject/tokens";
import type {IProductsRepository} from "../../domain/repository/products-repository";
import {IProducts} from "../../domain/models/products";


@injectable()
export class GetAllProductsQuery {
    constructor(
        @inject(PRODUCTS_REPOSITORY)
        private readonly productRepository: IProductsRepository
    ) {
    }

    execute(): Promise<Array<IProducts>> {
        // @ts-ignore
        return this.productRepository.viewAll();
    }

}