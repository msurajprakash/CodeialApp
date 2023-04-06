export * from './constants';

export const setItemInLocalStorage = (key, value) => {
    if (!key || !value) {
        return console.error('Can not store in LS');
    }

    const valueToStore =
        typeof value !== "string" ? JSON.stringify(value) : value;

    localStorage.setItem(key, valueToStore);
}

export const getItemInLocalStorage = (key) => {
    if (!key) {
        return console.error('Can not get the value from LS');
    }

    localStorage.getItem(key);
}

export const removeItemFromLocalStorage = (key) => {
    if (!key) {
        return console.error('Can not get the value from LS');
    }

    localStorage.removeItem(key);
}



export const getFormbody = (params) => {
    let formBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]); // suraj 123 => suraj%20123

        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&'); // 'username=suraj&password=123213'
}