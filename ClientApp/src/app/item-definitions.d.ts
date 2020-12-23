export interface cartItem {
    cartId: number,
    shopItem: shopItem,
    quantity: number
}

export interface shopItem {
    id: number;
    name: string;
    price: number;
    attr: itemAttribute
}

export interface itemAttribute {
    color: string;
    format: string;
}