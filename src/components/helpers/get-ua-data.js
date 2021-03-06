const UAParser = require('../../../node_modules/ua-parser-js/dist/ua-parser.min');

export const UA = new UAParser();

export const browser = UA.getBrowser();
export const cpu = UA.getCPU();
export const device = UA.getDevice();
export const engine = UA.getEngine();
export const os = UA.getOS();
export const ua = UA.getUA();
export const setStr = (uaStr) => {
    return UA.setUA(uaStr)
}
export const mockUserAgent = (userAgent) => {
    const nav = window.navigator;
    nav.__defineGetter__('userAgent',() => {
        return userAgent;
    });
}
