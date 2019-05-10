js前端超级工具库合集

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

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
### 浏览器:
```html
  <script src="super-tools.min.js"></script>
  <script>
      var OS = outils.getOS()
  </script>
```

### npm:
```bash
$ npm install --save-dev spuer-libs
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const outils = require('spuer-libs')
const OS = outils.getOS()
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('outils/<方法名>')
const getOS = require('outils/getOS')
const OS = getOS()
```
## :package:  API文档

### Array  
####  &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 

### Class
#### &emsp;&emsp;[addClass][addClass]&emsp;&emsp;为元素添加class  
#### &emsp;&emsp;[hasClass][hasClass]&emsp;&emsp;判断元素是否有某个class  
#### &emsp;&emsp;[removeClass][removeClass]&emsp;&emsp;为元素移除class  

### Cookie 
#### &emsp;&emsp;[getCookie][getCookie]&emsp;&emsp;根据name读取Cookie  
#### &emsp;&emsp;[removeCookie][removeCookie]&emsp;&emsp;根据name删除Cookie
#### &emsp;&emsp;[setCookie][setCookie]&emsp;&emsp;添加Cookie 

### Device  
#### &emsp;&emsp;[getExplore][getExplore]&emsp;&emsp;获取浏览器类型和版本号  
#### &emsp;&emsp;[getOS][getOS]&emsp;&emsp;获取操作系统类型

### Dom  
#### &emsp;&emsp;[getScrollTop][getScrollTop]&emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp;[offset][offset]&emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp;[scrollTo][scrollTo]&emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp;[setScrollTop][setScrollTop]&emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp;[windowResize][windowResize]&emsp;&emsp;H5软键盘缩回、弹起回调

### Function  
#### &emsp;&emsp;[debounce][debounce]&emsp;&emsp;函数防抖   
#### &emsp;&emsp;[throttle][throttle]&emsp;&emsp;函数节流   

### Keycode  
#### &emsp;&emsp;[getKeyName][getKeyName]&emsp;&emsp;根据keycode获得键名 

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空

### Random  
#### &emsp;&emsp;[randomColor][randomColor] &emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum][randomNum]&emsp;&emsp;生成指定范围随机数 

### Regexp  
#### &emsp;&emsp;[isColor][isColor]&emsp;&emsp;判断是否为16进制颜色，rgb 或 rgba
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址

### String  
#### &emsp;&emsp;[digitUppercase][digitUppercase]&emsp;&emsp;现金额转大写

### Support  
#### &emsp;&emsp;[isSupportWebP][isSupportWebP]&emsp;&emsp;判断浏览器是否支持webP格式图片
#### 

### Time  
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化${startTime}距现在的已过时间
#### &emsp;&emsp;[formatRemainTime][formatRemainTime]&emsp;&emsp;格式化现在距${endTime}的剩余时间
#### &emsp;&emsp;[isLeapYear][isLeapYear]&emsp;&emsp;判断是否为闰年
#### &emsp;&emsp;[isSameDay][isSameDay]&emsp;&emsp;判断是否为同一天
#### &emsp;&emsp;[timeLeft][timeLeft]&emsp;&emsp;计算${startTime - endTime}的剩余时间

### Url
#### &emsp;&emsp;[parseQueryString][parseQueryString]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQueryString][stringfyQueryString]&emsp;&emsp;对象序列化

[arrayEqual]:/master/src/array/arrayEqual.js

[addClass]:/master/src/class/addClass.js
[hasClass]:/master/src/class/hasClass.js
[removeClass]:/master/src/class/removeClass.js

[getCookie]:/master/src/cookie/getCookie.js
[removeCookie]:/master/src/cookie/removeCookie.js
[setCookie]:/master/src/cookie/setCookie.js

[getExplore]:/master/src/device/getExplore.js
[getOS]:/master/src/device/getOS.js

[getScrollTop]:/master/src/dom/getScrollTop.js
[offset]:/master/src/dom/offset.js
[scrollTo]:/master/src/dom/scrollTo.js
[setScrollTop]:/master/src/dom/setScrollTop.js
[windowResize]:/master/src/dom/windowResize.js

[debounce]:/master/src/function/debounce.js
[throttle]:/master/src/function/throttle.js

[getKeyName]:/master/src/keycode/getKeyName.js

[deepClone]:/master/src/object/deepClone.js
[isEmptyObject]:/master/src/object/isEmptyObject.js

[randomColor]:/master/src/random/randomColor.js
[randomNum]:/master/src/random/randomNum.js

[isColor]:/master/src/regexp/isColor.js
[isEmail]:/master/src/regexp/isEmail.js
[isIdCard]:/master/src/regexp/isIdCard.js
[isPhoneNum]:/master/src/regexp/isPhoneNum.js
[isUrl]:/master/src/regexp/isUrl.js

[digitUppercase]:/master/src/string/digitUppercase.js

[isSupportWebP]:/master/src/support/isSupportWebP.js

[formatPassTime]:/master/src/time/formatPassTime.js
[formatRemainTime]:/master/src/time/formatRemainTime.js
[isLeapYear]:/master/src/time/isLeapYear.js
[isSameDay]:/master/src/time/isSameDay.js
[timeLeft]:/master/src/time/timeLeft.js

[parseQueryString]:/master/src/url/parseQueryString.js
[stringfyQueryString]:/master/src/url/stringfyQueryString.js
