import { objectEnum } from '../utils/helpers';

/**
 * Usage is similar to a Java Enum: `ActionTypes.SET_PERMISSIONS_STATE`
 */
export const ActionTypes = objectEnum(
    '__DEFAULT__',
    'RESET_STORE',
    'SET_ARTICLES',
    'SET_ACCOUNT_USER'
);

export type ActionType = Value<typeof ActionTypes>;
