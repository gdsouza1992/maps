import { createDefaultReducer } from "../reducer";
import { ActionTypes } from "../action-types";
import { Account } from "../../../types/models/Account";

export const accountReducer = createDefaultReducer<Account>(ActionTypes.SET_ACCOUNT_USER);
