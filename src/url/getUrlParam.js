//获取url中的某个参数
function  getUrlParam(name){
		//构造一个含有目标参数的正则表达式对象
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		//匹配目标参数
		var r = window.location.search.substr(1).match(reg);
		//返回参数值
		if(r != null) return unescape(r[2]);
		//不存在时返回null
		return null;
	}
  
  module.exports = getUrlParam
