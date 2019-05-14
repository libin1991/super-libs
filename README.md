### <p align="center">JS前端超级工具库合集</p> ###

> 目的：高效率完成前端业务代码

### npm:
```bash
$ cnpm install -D super-libs
```

### 使用

``` javascript
import superlibs from 'super-libs' 
console.log(superlibs.getOS());

...

import {getOS} from 'super-libs' 
console.log(getOS());
```
### 分类
---

<p align="center">
    <a href="#Array">Array</a>&nbsp;&nbsp;
    <a href="#Class">Class</a>&nbsp;&nbsp;
    <a href="#Cookie">Cookie</a>&nbsp;&nbsp;
    <a href="#Device">Device</a>&nbsp;&nbsp;
    <a href="#Dom">Dom</a>&nbsp;&nbsp;
    <a href="#Function">Function</a>&nbsp;&nbsp;
    <a href="#Keycode">Keycode</a>&nbsp;&nbsp;
    <a href="#Object">Object</a>&nbsp;&nbsp;
    <a href="#Random">Random</a>&nbsp;&nbsp;
    <a href="#Regexp">Regexp</a>&nbsp;&nbsp;
    <a href="#String">String</a>&nbsp;&nbsp;
    <a href="#Support">Support</a>&nbsp;&nbsp;
    <a href="#Time">Time</a>&nbsp;&nbsp;
    <a href="#Url">Url</a>
</p>

---



## API文档

### Array  
- arrayEqual判断两个数组是否相等 

### Class
- addClass为元素添加class  
- hasClass判断元素是否有某个class  
- removeClass为元素移除class  

### Cookie 
- getCookie根据name读取Cookie  
- removeCookie根据name删除Cookie
- setCookie添加Cookie 

### Device  
- getExplore获取浏览器类型和版本号  
- getOS获取操作系统类型

### Dom  
- getScrollTop获取滚动条距顶部的距离
- offset获取一个元素的距离文档(document)的位置，类似jQ中的offset()
- scrollTo在${duration}时间内，滚动条平滑滚动到${to}指定位置
- setScrollTop设置滚动条距顶部的距离
- windowResizeH5软键盘缩回、弹起回调

### Function  
- debounce函数防抖   
- throttle函数节流   

### Keycode  
- getKeyName根据keycode获得键名 

### Object  
- deepClone深拷贝，支持常见类型
- isEmptyObject判断Object是否为空

### Random  
- randomColor 随机生成颜色
- randomNum生成指定范围随机数 

### Regexp  
- isColor判断是否为16进制颜色，rgb 或 rgba
- isEmail判断是否为邮箱地址 
- isIdCard判断是否为身份证号
- isPhoneNum判断是否为手机号  
- isUrl判断是否为URL地址

### String  
- digitUppercase现金额转大写

### Support  
- isSupportWebP判断浏览器是否支持webP格式图片


### Time  
- formatPassTime格式化${startTime}距现在的已过时间
- formatRemainTime格式化现在距${endTime}的剩余时间
- isLeapYear判断是否为闰年
- isSameDay判断是否为同一天
- timeLeft计算${startTime - endTime}的剩余时间

### Url
- parseQueryStringurl参数转对象
- stringfyQueryString对象序列化
- getQueryStringObject  格式化 URL 查询字符串返回对象 URL: https://matiji.cn/path?a=z&b=y&c=x  ->  { a: z, b: y: c: x }
