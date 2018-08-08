import { createDefaultArrayReducer } from "../reducer";
import { ActionTypes } from "../action-types";
import { Article } from "../../../types/models/Article";

export const articlesReducer = createDefaultArrayReducer<Article>(ActionTypes.SET_ARTICLES);
