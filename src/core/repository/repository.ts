export interface IRepository<IModel> {
    createAll?(model: IModel): Promise<IModel>;
    viewAll?(model: IModel): Promise<Array<IModel>>;
}