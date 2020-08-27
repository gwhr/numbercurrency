let tools = {};
tools.install = function(Vue,options){
	/* 
		处理数字(小数点前边大写)
	*/
	Vue.prototype.dealNumber = function(value,size = "0.36",littleSize="0.28",Bigweight='600',littleweight="600",money='￥'){
		if(!value){
			return
		}
        let big = value.substring(0,value.indexOf('.'));
        let little = value.substring(value.indexOf('.'));
        return `<span style="font-size:${size}rem;font-weight:${Bigweight};">${money}${big}</span><span style="font-size:${littleSize}rem;font-weight:${littleweight};">${little}</span>`
    };
	//localstorage存储
	Vue.prototype.store = {
				save(key,value) {
					localStorage.setItem(key,JSON.stringify(value)) 
				},
				get(key) {
					return JSON.parse(localStorage.getItem(key)) || []
				},
				deleteItem(key){
					return localStorage.removeItem(key);	
				}
	};
	//sessionstorage存储
	Vue.prototype.storeSession = {
		save(key,value) {
			sessionStorage.setItem(key,JSON.stringify(value)) 
		},
		get(key) {
			return JSON.parse(sessionStorage.getItem(key)) || []
		},
		deleteItem(key){
			return sessionStorage.removeItem(key);	
		}
};
	/**
	* 监测传空
	*/
	Vue.prototype.isNil = function(data){
		let reg = /^[\s]*$/;

		const isNil = data => data === undefined || data === null || data === '' || data === [] || reg.test(data);
		return isNil(data);
	};
	/* 
		时间转化
	*/
	Vue.prototype.timestampToTime=function(timestamp){//时间戳转换成时间： 年月日 时分秒
		if(!timestamp){
			return
		}
		var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		var D = (date.getDate()<10 ? '0'+(date.getDate()):date.getDate()) + '';
		var h = (date.getHours()<10 ? '0'+(date.getHours()):date.getHours()) + ':';
		var m = (date.getMinutes()<10 ? '0'+(date.getMinutes()):date.getMinutes()) + ':';
		var s = (date.getSeconds()<10 ? '0'+(date.getSeconds()):date.getSeconds());
			return Y+M+D+' '+h+m+s;
	};

	Vue.prototype.timeFront=function(timestamp){//时间戳转换成获取时间前部分：年月日
		var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		var D = (date.getDate()<10 ? '0'+(date.getDate()):date.getDate());
		  return Y+M+D;
	  };
	/* 
		保留两位小数(四舍五入)
	*/
	Vue.prototype.twoNumber = function(value){
		return (Math.round(value*100)/100).toFixed(2)
	}

	/* 
		保留两位小数（不四舍五入）
	*/
	Vue.prototype.twoNumberSave = function(value){
		return (Math.floor(value*100)/100).toFixed(2)
	}

	/* 
		检验是否为整数
	*/
	Vue.prototype.isPositiveInteger = function(value) {
		let re = /^[0-9]+$/ ;
		console.log(re.test(value))
     	return re.test(value)
	}
	/* 
		监测是否是数字且保留一位小数
	*/
    Vue.prototype.oneTestNumber = function(value) {
		let reg=/^([1-9]+[0-9]*|0)(.[1-9]{1})?$/;
		return reg.test(value)
	}
	Vue.prototype.oneTestNumber1 = function(value) {
		let reg=/^([1-9]+[0-9]*)(.[1-9]{1})?$/;
		return reg.test(value)
	}
	/* 
		监测是否为两位有效数字
	*/
	Vue.prototype.twoTestNumber = function(value) {
		// let reg = /^[0-9]+\d*/
		let reg = /^([1-9]+[0-9]*|0)(.[0-9]{1,2})?$/
		return reg.test(value)
	}
	
	
	/* 
		监测是否为数字
	*/
	Vue.prototype.TestNumber = function(value) {
		// let reg = /^[0-9]+\d*/
		let reg = /^([1-9]+[0-9]*|0)(.[0-9]{0,})?$/
		return reg.test(value)
	}
	/* 
		去除字符串两边空格(trim)
	*/
	Vue.prototype.trim = function(str) {    
		return str.replace(/(^\s*)|(\s*$)/g,'');
	}

	/* 
		标准时间转时间戳
	*/
	Vue.prototype.changeDate = function(time){
		let result = new Date(time).getTime();
		return result;
	}

	/* 
		判断图片格式
	*/
	Vue.prototype.isImg=function(str){  
	    if(str.search("[.]+(jpg|jpeg|swf|gif|png|JPG|JPEG|SWF|GIF|PNG)$"))  {  
	        return false;
	    }  
	    return true;  
	}  
	
	/* 
		截取url后面的文件名字
	*/
	Vue.prototype.getUploadUrlSuffix=function(urlStr){
	    var url = urlStr.substring(urlStr.lastIndexOf("\."),urlStr.length);
	    return url;
	}

	/* 
		获取最近时间
	*/
	Vue.prototype.getLatelyTime = function(days){
		// 当前时间
		let nowTime = new Date();
		let Y1 = nowTime.getFullYear();
		let M1 = (nowTime.getMonth()-0 + 1) > 10? (nowTime.getMonth()-0 + 1):('0' + nowTime.getMonth()-0 + 1);
		let D1 = (nowTime.getDate()) > 10? (nowTime.getDate()):('0'+nowTime.getDate());
		let time1 = Y1 +'-' + M1 + '-' + D1;
		// N天前时间
		let beforeTime = new Date();
		beforeTime.setTime(beforeTime.getTime() - (24*60*60*1000*days));
		let Y2 = beforeTime.getFullYear();
		let M2 = (beforeTime.getMonth()-0 + 1) > 10? (beforeTime.getMonth()-0 + 1):('0' + beforeTime.getMonth()-0 + 1);
		let D2 = (beforeTime.getDate()) > 10? (beforeTime.getDate()):('0'+beforeTime.getDate());
		let time2 = Y2 +'-' + M2 + '-' + D2;
		// 后一天时间
		let afterTime = new Date();
		afterTime.setTime(afterTime.getTime() + (24*60*60*1000));
		let Y3 = afterTime.getFullYear();
		let M3 = (afterTime.getMonth()-0 + 1) > 10? (afterTime.getMonth()-0 + 1):('0' + afterTime.getMonth()-0 + 1);
		let D3 = (afterTime.getDate()) > 10? (afterTime.getDate()):('0'+afterTime.getDate());
		let time3 = Y3 +'-' + M3 + '-' + D3;
		// 本月最后一天和第一天
		let nowMounth = new Date();
		let firstDay = new Date(nowMounth.getFullYear(), nowMounth.getMonth(), 1);
		let lastDay = new Date(nowMounth.getFullYear(), nowMounth.getMonth()+1, 0);
		let Y4 = firstDay.getFullYear();
		let M4 = (firstDay.getMonth()-0 + 1) > 10? (firstDay.getMonth()-0 + 1):('0' + firstDay.getMonth()-0 + 1);
		let D4 = (firstDay.getDate()-0) > 10? (firstDay.getDate()-0):('0' + firstDay.getDate()-0);
		let Y5 = lastDay.getFullYear();
		let M5 = (lastDay.getMonth()-0 + 1) > 10? (lastDay.getMonth()-0 + 1):('0' + lastDay.getMonth()-0 + 1);
		let D5 = lastDay.getDate();
		let time4 = Y4+'-' +M4 + '-' + D4;
		let time5 = Y5+'-' +M5 + '-' + D5;
		// 输出时间
		let times = {
			time1,
			time2,
			time3,
			time4,
			time5
		}
		return times;
	}
	//秒转为时分秒
	Vue.prototype.formatSeconds=function(a) {
		var hh = parseInt(a/3600);  
		if(hh<10) hh = "0" + hh;  
		var mm = parseInt((a-hh*3600)/60);  
		if(mm<10) mm = "0" + mm;  
		var ss = parseInt((a-hh*3600)%60);  
		if(ss<10) ss = "0" + ss;  
		var length = hh + ":" + mm + ":" + ss;  
		if(a>0){  
			return length;  
		}else{  
			return "NaN";  
		}  
	}
}
export default tools;
