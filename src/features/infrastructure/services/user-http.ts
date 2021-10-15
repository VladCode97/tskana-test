import {IUserRepository} from "../../domain/repository/users-repository";
import {IUser} from "../../domain/models/users";


export class UserHttp implements IUserRepository {

    async viewUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
        try {
            const response = await (await fetch('https://fakestoreapi.com/users')).json();
            return response.filter((user: IUser) => user.email === email && user.password === password)[0];
        } catch (exception: any) {
            throw new Error(exception.message);
        }
    }

}