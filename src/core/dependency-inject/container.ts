import {container} from 'tsyringe';
import {PRODUCTS_REPOSITORY, USER_REPOSITORY} from "./tokens";
import {ProductsHttp} from "../../features/infrastructure/services/products-http";
import {UserHttp} from "../../features/infrastructure/services/user-http";

container.register(PRODUCTS_REPOSITORY, ProductsHttp);
container.register(USER_REPOSITORY, UserHttp)

export {container};