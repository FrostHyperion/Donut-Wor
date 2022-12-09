import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerFavorite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Favorite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Donut?: Donut | null;
  readonly donut_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favoriteDonutId?: string | null;
}

type LazyFavorite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Favorite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Donut: AsyncItem<Donut | undefined>;
  readonly donut_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly favoriteDonutId?: string | null;
}

export declare type Favorite = LazyLoading extends LazyLoadingDisabled ? EagerFavorite : LazyFavorite

export declare const Favorite: (new (init: ModelInit<Favorite>) => Favorite) & {
  copyOf(source: Favorite, mutator: (draft: MutableModel<Favorite>) => MutableModel<Favorite> | void): Favorite;
}

type EagerDonut = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donut, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image: string;
  readonly description: string;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonut = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donut, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image: string;
  readonly description: string;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donut = LazyLoading extends LazyLoadingDisabled ? EagerDonut : LazyDonut

export declare const Donut: (new (init: ModelInit<Donut>) => Donut) & {
  copyOf(source: Donut, mutator: (draft: MutableModel<Donut>) => MutableModel<Donut> | void): Donut;
}

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CartItems?: (CartItem | null)[] | null;
  readonly CartItems_id?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CartItems: AsyncCollection<CartItem>;
  readonly CartItems_id?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
}

type EagerCartItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donut_id: string;
  readonly quantity: number;
  readonly cartID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donut_id: string;
  readonly quantity: number;
  readonly cartID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartItem = LazyLoading extends LazyLoadingDisabled ? EagerCartItem : LazyCartItem

export declare const CartItem: (new (init: ModelInit<CartItem>) => CartItem) & {
  copyOf(source: CartItem, mutator: (draft: MutableModel<CartItem>) => MutableModel<CartItem> | void): CartItem;
}