function fetch(url: string, status: number = 200): string {
    return `${url} ${status}`;
}

const cache = new Set();

export const proxiedFetch = new Proxy<Function>(fetch, {
    apply(target, thisArg: any, argArray?: any) {
        const url = argArray[0];

        if (cache.has(url)) {
            return `${url} 301`;
        }

        cache.add(url);

        return Reflect.apply(target, thisArg, argArray);
    }
});
