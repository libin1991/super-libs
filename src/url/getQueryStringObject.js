const reg = /([^?&=]+)=([^&]+)/g;

function getQueryStringObject() {
    const q = {};
    location.search.replace(reg, (m, k, v) => q[k] = v);
    return q;
}

getQueryStringObject();

// URL: https://matiji.cn/path?a=z&b=y&c=x
// { a: z, b: y: c: x }


module.exports =  getQueryStringObject
