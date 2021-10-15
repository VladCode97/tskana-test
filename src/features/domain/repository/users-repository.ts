import {IRepository} from "../../../core/repository/repository";
import {IUser} from "../models/users";

export interface IUserRepository extends IRepository<IUser> {
    viewUserByEmailAndPassword?(email: string, password: string): Promise<IUser>;
}