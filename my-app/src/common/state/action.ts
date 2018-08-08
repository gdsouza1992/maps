
import { Action as BaseAction } from 'redux';
import { ActionType } from './action-types';

const { getOwnPropertyNames } = Object;

export class Entity<T> {
    constructor(
        public readonly pending?: boolean,
        public readonly data?: T | undefined,
        public readonly error?: any) {
    }

    public toObject?() {
        return getOwnPropertyNames(this).reduce((object, key) => ({ ...object, [key]: this[key] }), {});
    }
}

export class Action<T> extends Entity<T> implements BaseAction {
    constructor(
        public readonly type: ActionType = '__DEFAULT__',
        pending: boolean = false,
        data?: Maybe<T>,
        error?: Maybe<string>
    ) {
        super(pending, data, error);
    }
}

export const DEFAULT_ACTION: Action<'__DEFAULT'> = new Action();