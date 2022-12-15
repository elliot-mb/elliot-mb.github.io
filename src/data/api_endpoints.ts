export const git: { [key: string]: string } = {
    endpoint: "https://raw.githubusercontent.com"
}

export const pi = "https://pi.elliotmb.dev/"; //finally got certbot working :)

export const view_count = {
    set: pi + "api/view_count/set",
    get: pi + "api/view_count/get?field="
}