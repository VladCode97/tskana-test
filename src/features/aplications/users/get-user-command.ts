import {inject, injectable} from "tsyringe";
import type {IUserRepository} from "../../domain/repository/users-repository";
import {USER_REPOSITORY} from "../../../core/dependency-inject/tokens";
import  {IUser} from "../../domain/models/users";


@injectable()
export class GetUserCommand {
    constructor(
        @inject(USER_REPOSITORY)
        private readonly userRepository: IUserRepository
    ) {
    }

    execute(email: string, password: string): Promise<IUser> {
        // @ts-ignore
        return this.userRepository.viewUserByEmailAndPassword(email, password);
    }

}