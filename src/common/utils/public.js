export function setToken(token) {
    return localStorage.setItem('TOKEN', token)
}

export function debounce(v, func, delay) {
    let timeOut
    return function () {
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            func.apply(v, arguments)
        }, delay)
    }
}

//防抖
export function debounces(v, fn, delay) {
    var delay = delay || 200;
    var timer;//标记定时器的返回值
    return function () {
        var th = v;
        var args = arguments;
        if (timer) {//每次用户输入就把之前的定时器清除掉
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = null;
            fn.apply(th, args);
        }, delay);
    }
}

//节流

export function throttle(v, func, delay) {
    let run = true
    return function () {
        if (!run) {
            return  // 如果开关关闭了，那就直接不执行下边的代码
        }
        run = false // 持续触发的话，run一直是false，就会停在上边的判断那里
        setTimeout(() => {
            func.apply(v, arguments)
            run = true // 定时器到时间之后，会把开关打开，我们的函数就会被执行
        }, delay)
    }
}

//防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行

//深拷贝
export function cloneDeep(obj) {
    var new_object = Array.isArray(obj) ? [] : {}
    if (typeof obj != 'object') {
        new_object = obj
    }
    if(obj instanceof Array){
        for(let i=0;i<obj.length;i++){
            new_object[i]=obj[i]
            if(typeof new_object[i]=='object'){
                new_object[i]=cloneDeep(obj[i])
            }
        }
    }else{
        for (let key in obj){
            if(obj.hasOwnProperty(key)){ 
                if(typeof obj[key]=='object'){
                    new_object[key]=cloneDeep(obj[key])
                }else{
                    new_object[key]=obj[key]
                }
            }
        }
    }
    return new_object
}
//将base64编码转化成图片
export function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
//  hasOwnProperty是js种唯一可以遍历属性但不会遍历原型链的方法