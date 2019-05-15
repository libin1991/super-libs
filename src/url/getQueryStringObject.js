// URL: https://matiji.cn/path?a=z&b=y&c=x
// { a: z, b: y: c: x }

const reg = /([^?&=]+)=([^&]+)/g;

function getQueryStringObject() {
    const q = {};
    location.search.replace(reg, (m, k, v) => q[k] = v);
    return q;
}




module.exports =  getQueryStringObject
