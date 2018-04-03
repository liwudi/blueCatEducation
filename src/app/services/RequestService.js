/**
 * Created by mapbar_front on 2018/3/26.
 */
import 'es6-promise';
import 'whatwg-fetch';

//GET请求方式，要进行路径编码
function urlEncode(params, key, encode) {
    var paramStr = '';
    if(params == null) return paramStr;
    var t = typeof (params);

    if(t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(params) : params);
    } else {
        for(var i in params) {
            var k = (key == null) ? i : key + (params instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(params[i], k, encode)
        }
    }
    return paramStr;
}


function request(opts,processor,isUpload) {
    let options = {
        method: opts.method || 'GET',
        cache: false,
        headers: new Headers()
    },
        url = /^(http|https):\/\//.test(opts.url) ? opts.url : (serviceUrl + opts.url);

    options.headers.append('Content-Type', 'application/json;charset=utf-8');
    options.headers.append('Accept', 'application/json');

    if(opts.credentials != 'undefined'){
        options.credentials = opts.credentials
    }

    if(options.method == 'POST'){

    } else if(options.method === 'GET'){
        if(!opts.data) opts.data = {};
        opts.data['__rid'] = new Date().getTime();
        queryString = urlEncode(opts.data);
        url = url + (url.indexOf('?') > -1 ? "&":'?') + queryString;
    }



}


var obj = {
    name: 'mapbar',
    age: 23
};
var paramStr = '';
for(var i in obj){
    console.log(encodeURIComponent(obj[i]));
}




























