export function objectEnum<K extends PropertyKey>(...keys: K[]): Obj<K> {
    return keys.reduce((objectEnum: Record<K, K>, key, index) => {
        // if (DEVELOPMENT) {
        //     const isDuplicateKey = objectEnum[key];
        //
        //     console.assert(!isDuplicateKey, `duplicate key '${key}' at index ${index}`);
        // }

        objectEnum[key] = key;

        return objectEnum;
    }, {} as Record<K, K>);
}