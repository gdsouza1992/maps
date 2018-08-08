import {applyMiddleware, combineReducers, createStore, Reducer, Store} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import Logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import {accountReducer} from "../account/reducer";
import {articlesReducer} from "../articles/reducer";
import {StateEntity} from "./shared-state";
import {Article} from "../../../types/models/Article";

// const initialState: State = {};

export type State  = {
    account: Account,
    articles: Article[]
};

const reducers: { [K in keyof State] : Reducer<StateEntity<any>> } = {
    account: accountReducer,
    articles: articlesReducer
};

const DEVELOPMENT = true;

const store: Store<State> = DEVELOPMENT ?
    createStore(combineReducers(reducers), {}, composeWithDevTools(applyMiddleware(ReduxThunk, Logger))) :
    createStore(combineReducers(reducers), {}, applyMiddleware(ReduxThunk));

export default store;
