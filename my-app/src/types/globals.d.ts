type Maybe<T> = T | undefined;
type Nullable<T> = T | null;
type Voidable<T> = T | void;

type Obj<T> = Record<PropertyKey, T>;

type Key<T> = keyof T;
type Value<T> = T[Key<T>];


interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}