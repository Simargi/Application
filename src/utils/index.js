import { mobileWidth as width } from './../constans/constans';

function isMobile() {
    return window.innerWidth <= width;
}
//LocalStorage
function addToStorage(item, objValue) {
    localStorage.setItem(item, JSON.stringify({[item]: objValue, time: new Date().getTime()}) );
}
function clearStorage(item, lifeCycle) {
    if (typeof item === 'undefined') return;
    let cache = localStorage.getItem(item);
    cache = JSON.parse(cache);
    const time_now = new Date().getTime();
    let life_cycle = 1000*lifeCycle;
    if (cache) {
        if ((time_now - cache.time) > life_cycle) {
            delete localStorage[item];
        } else {
            return cache
        }
    }
}

//Cookie
function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}

export { isMobile, clearStorage, addToStorage, setCookie, getCookie, deleteCookie }