import {StateEntity} from "./store/shared-state";
import {Action} from "./action";
import {ActionType} from "./action-types";

export type Handler<A, S> = (state: S, action: A) => S;
type DefaultHandler<T> = { [x: string]: (state: StateEntity<T>, action: Action<T>) => StateEntity<T> };

export const getDefaultHandler = <T>(actionType: ActionType, allowEmptyData: boolean = true): DefaultHandler<T> => ({
    [actionType](state: StateEntity<T>, action: Action<T>): StateEntity<T> {
        const data: Maybe<T> = (!allowEmptyData && action.data == null) ? state.data : action.data;

        return { ...state, data, pending: action.pending, error: action.error };
    }
});
