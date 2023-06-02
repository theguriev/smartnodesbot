export interface CartItemType {
  img: string;
  title: string;
  price: string;
  id: string;
}

export interface CountedCartItemType extends CartItemType {
  amount: number;
  totalPrice: number;
}
