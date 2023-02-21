import {view_count} from '../data/api_endpoints';
import {getIdentifier} from '../data/local_storage';

export const incrementCount = <T>(field: string): Promise<T> => {

    let request = {
        method: "POST",
        mode: 'cors' as RequestMode, // no-cors, *cors, same-origin
        //cache: 'no-cache' as RequestCache, // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin' as RequestCredentials, // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "field":field,
            "delta":1,
            "setter":getIdentifier()
        })
    }

    return fetch(view_count.set, request)
    .then((response) => {
        if(!response.ok){ 
            throw new Error(response.statusText) //caught in catch
        }
        return response.json()
    })
    .catch((err: Error) => {
        console.error(err);
        throw err;
    });
}

export const getCount = <T>(field: string): Promise<T> => {
    
    return fetch(`${view_count.get}${field}`)
    .then((response) => {
        if(!response.ok){ 
            throw new Error(response.statusText) //caught in catch
        }
        return response.json()
    })
    .catch((err: Error) => {
        console.error(err);
        throw err;
    });
    
}

export const getCounts = (pages: string[]): Promise<number[]> => {

    let counts: Promise<number>[] = pages.map(x => getCount<number>(x))

    return Promise.all(counts)
    .then((results) => {
        return results;
    })
    .catch((err: Error) => {
        console.error(err);
        throw err;
    })

}