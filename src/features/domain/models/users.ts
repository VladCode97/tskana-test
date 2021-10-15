interface IName {
    firstname: string,
    lastname: string
}

export interface IUser {
    id: number,
    email: string,
    username: string,
    password: string,
    name: IName,
    phone: string,
}