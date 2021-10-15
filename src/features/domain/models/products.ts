interface IRating {
    rate: number,
    count: number;
}

export interface IProducts {
    id: string,
    title: string
    price: number,
    description: string
    category: string,
    image: string,
    rating: IRating
}