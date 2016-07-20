const utils = {};
utils.store = function (namespace, data) {
    if (data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    }
    const store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
};
utils.extend = function () {
    var newObj = {};
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
export default utils;
