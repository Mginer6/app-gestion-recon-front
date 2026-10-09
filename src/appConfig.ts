declare global {
    interface Window {
        __APP_CONFIG__?: {API_URL?: string};
    }
}

const apiUrl = window.__APP_CONFIG__?.API_URL;

if(!apiUrl) {
    throw new Error("Falta API_URL en la configuración (config.js)");
}

export const API_URL: string = apiUrl;