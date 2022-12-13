export const git: { [key: string]: string } = {
    endpoint: "https://raw.githubusercontent.com"
}

export const pi = "http://pi.elliotmb.dev:8030/";

export const view_count = {
    set: pi + "api/view_count/set",
    get: pi + "api/view_count/get?field="
}