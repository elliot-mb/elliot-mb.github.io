export const projectNameToPath = (name: string): string => { 

    let blacklist: RegExp = /[,/\\.'"?]+/g;

    return name.toLowerCase().replaceAll(" ", "-").replace(blacklist, "");
}