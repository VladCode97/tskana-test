import { container } from 'tsyringe';
import {SHOP_REPOSITORY} from "./tokens";

container.register(SHOP_REPOSITORY, Object.assign({}));

export {container};