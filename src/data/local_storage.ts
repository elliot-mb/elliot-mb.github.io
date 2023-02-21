const CHARS = 32;
const CHAR_WIDTH = 50;
const OFFSET = 50;

export const getIdentifier = (): string => {
    if(localStorage['identifier'] === undefined){
        localStorage['identifier'] = randStr();
    }
    return localStorage['identifier'];
}

const randStr = (): string => {
    let builder: string = "";
    for(let i = 0; i < CHARS; i++){
        builder += String.fromCharCode(Math.floor((Math.random() * CHAR_WIDTH)) + OFFSET);
    }
    return builder;
}