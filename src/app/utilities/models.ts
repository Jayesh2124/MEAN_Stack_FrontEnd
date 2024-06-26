type NewType = 80

export class Vegetables {

    category: string = ''
    description: string = ''
    imageUrl: string = ''
    inStock: boolean = true
    name : string = ''
    price : number =0
    quantity   : number =0
    _id        :   string = '' 
}
export class Fruits {
    _id: string = '';
    name: string = '';
    color: string = '';
    type: string = '';
    nutrients: string[] = []
    price_per_kg: number = 0
    __v: number = 0
    createdAt: string = '';
    updatedAt: string = '';
}

export class BabiesProducts {
    product: string = ''
    type: string = ''
    description: string = ''
    ingredients: string[] = []
    price: number = 0
    currency: string = ''
    volume: string = ''

}

export class User {
    _id: string = ''
    firstName: string = ''
    lastName: string = ''
    userName: string = ''
    emails: string = ''
    password: string = ''
    profileImage: string = ''
    isAdmin: boolean = false
    roles: any[] = []
    createdAt: string = ''
    updatedAt: string = ''
}

export class productDetails {
    productName: string = ''
    price: number = 0
    ingredients: any[any] = []
    volume: string = ''
    imgSrc: string = ''
}