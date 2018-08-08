import { AnyAction } from 'redux';
import { Action, DEFAULT_ACTION } from "./action";
import { StateEntity } from "./store/shared-state";
import { ActionType } from "./action-types";
import { getDefaultHandler, Handler } from "./handler";

export type Reducer<S> = (state?: S, action?: AnyAction) => S;

export const createReducer = <S>(handlers: Obj<Handler<Action<any>, S>>, initialState: S): Reducer<S> => {
    return (state: S = initialState, action: AnyAction = DEFAULT_ACTION) => {
        // if (DEVELOPMENT && action.hasOwnProperty('error') && action.error) {
        //     console.error(action.error);
        // }

        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
};

export const createEntityReducer = <T>(handlers: Obj<Handler<Action<any>, StateEntity<T>>>, initialState: StateEntity<T> = { pending: false }): Reducer<StateEntity<T>> => {
    return createReducer<StateEntity<T>>(handlers, initialState);
};

export const createDefaultReducer = <T>(actionType: ActionType, initialState: StateEntity<T> = { pending: false }, allowEmptyData: boolean = true): Reducer<StateEntity<T>> => {
    return createEntityReducer<T>(getDefaultHandler(actionType, allowEmptyData), initialState);
};

export const createDefaultArrayReducer = <T>(actionType: ActionType): Reducer<StateEntity<T[]>> => {
    return createDefaultReducer<T[]>(actionType, { pending: false, data: [] }, false);
};
