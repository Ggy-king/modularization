// 写入cookie
const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    };

    if (domain) {
        cookieText += `; domain=${domain}`;
    };

    if (path) {
        cookieText += `; path=${path}`;
    };

    if (secure) {
        cookieText += `; secure`;
    };



    document.cookie = cookieText;
};

// 通过name属性获取cookie的值 
const get = name => {
    name = `${encodeURIComponent(name)}`;

    const cookies = document.cookie.split('; ');

    for (const item of cookies) {
        const [cookieName, cookieValue] = item.split('=');

        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }

    return;
}

// 根据name domain path删除cookie
const remove = (name, { domain, path } = {}) => {
    set(name, '', { domain, path, maxAge: -1 });
}
export { set, get, remove };