var s = $ = $s = function(selector,context) {
    return new $s.fn.init(selector,context);
};
$s.fn = $s.prototype;
$s.fn.init = function(selector, context) {
    var nodeList = (context || document).querySelectorAll(selector);
    this.length = nodeList.length;
    for (var i=0; i<this.length; i+=1) {
        this[i] = nodeList[i];    
    }
    return this;
};
$s.fn.init.prototype = $s.fn;

$s.fn.hide = function(index) {
	var i=index?index:0;
	this[i].style.display = "none";
	return this;
};
$s.fn.hideAll = function() {
	for(var i=0;i<this.length;i++){
		this[i].style.display = "none";
	}
	return this;
};
$s.fn.show = function(index) {
	var i=index?index:0;
	this[i].style.display = "";
	return this;
};
$s.fn.showAll = function() {
	for(var i=0;i<this.length;i++){
		this[i].style.display = "";
	}
	return this;
};
$s.fn.text = function(str,index) {
	var i=index?index:0;
    if(null!=str){
		this[i].innerText=str;
		return this;
	}else{
		return this[i].innerText;
	}
};
$s.fn.textAll = function(str) {
    if(null!=str){
		for(var i=0;i<this.length;i++){
			this[i].innerText=str;
		}
		return this;
	}else{
		var obj_list=new Array();
		for(var i=0;i<this.length;i++){
			obj_list[i]=this[i].innerText;
		}
		return obj_list;
	}
};
$s.fn.html = function(str,index) {
	var i=index?index:0;
    if(null!=str){
		this[i].innerHTML=str;
	}else{
		return this[i].innerHTML;
	}
};
$s.fn.outHtml = function(str,index) {
	var i=index?index:0;
    if(null!=str){
		this[i].outerHTML=str;
	}else{
		return this[i].outerHTML;
	}
};
$s.fn.htmlAll = function(str) {
	 if(null!=str){
		for(var i=0;i<this.length;i++){
			this[i].innerHTML=str;
		}
	}else{
		var obj_list=new Array();
		for(var i=0;i<this.length;i++){
			obj_list[i]=this[i].innerHTML;
		}
		return obj_list;
	}
};
$s.fn.val = function(str,index) {
	var i=index?index:0;
	if(null!=str){
		this[i].value=str;
		return this;
	}else{
		return this[i].value;
	}
};
$s.fn.valAll = function(str) {
	 if(null!=str){
		for(var i=0;i<this.length;i++){
			this[i].value=str;
		}
		return this;
	}else{
		var obj_list=new Array();
		for(var i=0;i<this.length;i++){
			obj_list[i]=this[i].value;
		}
		return obj_list;
	}
};
$s.fn.attr = function(key,value,index) {
	var i=index?index:0;
	if(null!=key && null!=value){
		this[i].setAttribute(key,value);
		return this;
	}else if(null==value){
		return this[i].getAttribute(key);
	}
};
$s.fn.attrAll = function(key,value) {
	if(null!=key && null!=value){
		for(var i=0;i<this.length;i++){
			this[i].setAttribute(key,value);
		}
		return this;
	}else if(null==value){
		var obj_list=new Array();
		for(var i=0;i<this.length;i++){
			obj_list[i]=this[i].getAttribute(key);
		}
		return obj_list;
	}
};
$s.fn.remove = function(index) {
	var i=index?index:0;
	this[i].parentNode.removeChild(this[i]);
	return this;
};
$s.fn.removeAll = function() {
	for(var i=0;i<this.length;i++){
		this[i].parentNode.removeChild(this[i]);
	}
	return this;
};
$s.fn.append = function(str,index) {
	var i=index?index:0;
	this[i].insertAdjacentHTML('beforeend', str);
	return this;
};
$s.fn.appendAll = function(str) {
	for(var i=0;i<this.length;i++){
		this[i].insertAdjacentHTML('beforeend', str);
	}
	return this;
};
$s.fn.prepend = function(str,index) {
	var i=index?index:0;
	this[i].insertAdjacentHTML('afterbegin', str);
	return this;
};
$s.fn.prependAll = function(str) {
	for(var i=0;i<this.length;i++){
		this[i].insertAdjacentHTML('afterbegin', str);
	}
	return this;
};
$s.fn.hasClass = function(str,index) {
	var i=index?index:0;
	return this[i].className.match(new RegExp(str));
};
$s.fn.addClass = function(str,index) {
	var i=index?index:0;
	if(!$s.hasClass(this[i],str)) {
	        this[i].className = (this[i].className+" " + str).replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
	}
	return this;
};
$s.fn.addClassAll = function(str) {
	for(var i=0;i<this.length;i++){
	    if(!$s.hasClass(this[i],str)){
	        this[i].className = (this[i].className+" " + str).replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
	    }
	}
	return this;
};
$s.fn.removeClass = function(str, index){
	var i=index?index:0;
	this[i].className =this[i].className.replace(new RegExp('(\\s|^)' + str + '(\\s|$)'), ' ').replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
	return this;
}
$s.fn.removeClassAll = function(str) {
	for(var i=0;i<this.length;i++){
	    this[i].className =this[i].className.replace(new RegExp('(\\s|^)' + str + '(\\s|$)'), ' ').replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
	}
	return this;
}

$s.fn.onclick = function(cb_fun,index) {
	var i=index?index:0;
	this[i].onclick=function(){
		cb_fun.call(this);
	};
	return this;
};
$s.fn.onclickAll = function(cb_fun) {
	for(var i=0;i<this.length;i++){
		this[i].onclick=function(){
			cb_fun.call(this);
		};
	}
	return this;
};
$s.fn.each = function(cb_fun) {
	for(var i=0;i<this.length;i++){
		cb_fun.call(this[i]);
	}
	return this;
};
$s.fn.tag = function(tag) {
	var dom = document.createElement(tag);
	this[0]=dom;
	return this;
};
$s.fn.dom = function(str) {
	var dom = document.createElement('p');
	dom.innerHTML=str;
	this[0]=dom.childNodes[0];
	return this;
};
$s.hasClass = function(obj,str) {
	return obj.className.match(new RegExp(str));
};
$s.about = function() {
	return "SimJQ-V1.4 By Leytton";
};
$s.ajax = function(options) {
	function empty(){};
    function obj2Url(obj) {
            var arr = [];
            for (var i in obj) {
                    arr.push(escape(i) + '=' + escape(obj[i]));
            }
            return arr.join('&').replace(/%20/g, '+');
    };
    var opt = {
        url: '', //请求地址
        sync: true, //true，异步 | false　同步，会锁死浏览器，并且open方法会报浏览器警告
        method: 'GET', //提交方法
        data: null, //提交数据
        dataType: 'json', //返回数据类型
        username: null, //账号
        password: null, //密码
        success: empty, //成功返回回调
        error: empty, //错误信息回调
        timeout: 10000 //请求超时ms
    };
    for (var i in options) opt[i] = options[i];
    var abortTimeout = null;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            xhr.onreadystatechange = empty;
            clearTimeout(abortTimeout);
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                result = xhr.responseText;
                try {
                    if (opt.dataType == 'json') {
                        result = result.replace(' ','') == '' ? null : JSON.parse(result)
                    }
                } catch (e) {
                    opt.error(e, xhr);
                    xhr.abort();
                }
                opt.success(result, xhr);
            } else if(0==xhr.status){
            		opt.error("跨域请求失败",xhr);
        	}else{
        		opt.error(xhr.statusText,xhr);
        	}
        }
    };
    var data=opt.data?obj2Url(opt.data):opt.data;
    opt.method=opt.method.toUpperCase();
    if (opt.method == 'GET') {
        opt.url += (opt.url.indexOf('?') == -1 ? '?' : '&') + data;
    }
    xhr.open(opt.method, opt.url, opt.sync, opt.username, opt.password);
    if (opt.method == 'POST') xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    if(opt.timeout > 0) {
        abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty
            xhr.abort();
            opt.error('网络请求超时', xhr);
        }, opt.timeout)
    }
    xhr.send(data);
}