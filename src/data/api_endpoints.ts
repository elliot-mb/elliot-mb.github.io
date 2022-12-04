export const git: { [key: string]: string } = {
    endpoint: "https://raw.githubusercontent.com"
}

export const view_count = {
    base:"http://pichat.ddns.net:8030/",
    set: "http://pichat.ddns.net:8030/api/view_count/set",
    get: "http://pichat.ddns.net:8030/api/view_count/get?field="
}