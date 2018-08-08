import { Entity } from '../action';

//track when data was loaded
export class StateEntity<T> extends Entity<T> {
    public readonly timestamp?: number = Date.now();
}
