function test1() {
		//$(),s(),$s()都行，与Jquery冲突时在Jquery之前引入js文件，采用s()或$s()
		$('#test1').text('Hello,I\'m Leytton~');
		alert($('#test1').text());
	}
	
	function test2() {
		$('#test2').attr('my_name', '不亦');
		alert($('#test2').attr('my_name'));
	}

	function test3() {
		$('#test3').html('<a href="http://blog.csdn.net/leytton" target="_blank"><img src="http://avatar.csdn.net/8/0/6/1_leytton.jpg" />');
		alert($('#test3').html());
	}

	function test4() {
		if('1' == $('#test4').attr('show')) {
			$('#test4').hide();
			$('#test4').attr('show', '0');
		} else {
			$('#test4').show();
			$('#test4').attr('show', '1');
		}
	}

	function test5() {
		alert($('#test5').val());
	}

	function test6() {
		$('#test6').val('Hello,SimJQ~');
	}

	function test7() {
		$('.test7').text('Hi,SimJQ~');
		alert($('.test7').text());
	}
	
	function test8() {
		$('.test8').text('Hi,SimJQ~',1);
		alert($('.test8').text(null,1));
	}
	function test9() {
		$('.test9').textAll('Hi,SimJQ~');
		var	str='';
		str_list=$('.test9').textAll();
		for(var i=0;i<str_list.length;i++){
			str+=(i+':'+str_list[i]+'\n');
		}
		alert('length:'+str_list.length+'\n'+str);
	}
	
	function test10() {
		$('.test10').attr('my_name', '不亦');
		alert($('.test10').attr('my_name'));
	}
	
	function test11() {
		$('.test11').attr('my_name', '不亦',1);
		alert($('.test11').attr('my_name',null,1));
	}
	
	function test12() {
		$('.test12').attrAll('my_name', '不亦');
		var	str='';
		str_list=$('.test12').attrAll('my_name');
		for(var i=0;i<str_list.length;i++){
			str+=(i+':'+str_list[i]+'\n');
		}
		alert('length:'+str_list.length+'\n'+str);
	}
	
	function test13() {
		$('.test13').html('<a href="http://blog.csdn.net/leytton" target="_blank"><img src="http://avatar.csdn.net/8/0/6/1_leytton.jpg" />');
		alert($('.test13').html());
	}
	
	function test14() {
		$('.test14').html('<a href="http://blog.csdn.net/leytton" target="_blank"><img src="http://avatar.csdn.net/8/0/6/1_leytton.jpg" />',1);
		alert($('.test14').html(null,1));
	}
	
	function test15() {
		$('.test15').htmlAll('<a href="http://blog.csdn.net/leytton" target="_blank"><img src="http://avatar.csdn.net/8/0/6/1_leytton.jpg" />');
		var	str='';
		str_list=$('.test15').htmlAll();
		for(var i=0;i<str_list.length;i++){
			str+=(i+':'+str_list[i]+'\n');
		}
		alert('length:'+str_list.length+'\n'+str);
	}
	
	function test16() {
		if('0'==$('.test16').attr('show')){
			$('.test16').show();
			$('.test16').attr('show','1');
		}else{
			$('.test16').hide();
			$('.test16').attr('show','0');
		}
	}
	
	function test17() {
		if('0'==$('.test17').attr('show',null,1)){
			$('.test17').show(1);
			$('.test17').attr('show','1',1);
		}else{
			$('.test17').hide(1);
			$('.test17').attr('show','0',1);
		}
	}
	
	function test18() {
		if('0'==$('#test18').attr('show')){
			$('.test18').showAll();
			$('#test18').attr('show','1');
		}else{
			$('.test18').hideAll();
			$('#test18').attr('show','0');
		}
	}
	
	function test19() {
		alert('元素对象:'+$('#test19')[0]+'\n文本:'+$('#test19')[0].innerText);
	}
	
	function test20() {
		alert('元素对象:'+$('.test20')[0]+'\n文本:'+$('.test20')[0].innerText);
	}
	
	function test21() {
		alert('元素对象:'+$('.test21')[1]+'\n文本:'+$('.test21')[1].innerText);
	}
	
	function test22() {
		var	str='';
		for(var i=0;i<$('.test22').length;i++){
			str+=(i+':'+$('.test22')[i].innerText+'\n');
		}
		alert('元素对象数组:'+$('.test22')+'\n'+str);
	}
	
	function test23() {
		$('.test23').val('Hi,SimJQ~');
		alert($('.test23').val());
	}
	
	function test24() {
		$('.test24').val('Hi,SimJQ~',1);
		alert($('.test24').val(null,1));
	}
	function test25() {
		$('.test25').valAll('Hi,SimJQ~');
		var	str='';
		str_list=$('.test25').valAll();
		for(var i=0;i<str_list.length;i++){
			str+=(i+':'+str_list[i]+'\n');
		}
		alert('length:'+str_list.length+'\n'+str);
	}
	
	function test26() {
		$('#test26').onclick(function() {
			alert(this.innerText);
		});
	}
	test26();
	
	function test27() {
		$('.test27').onclick(function() {
			alert(this.innerText);
		});
	}
	test27();
	
	function test28() {
		$('.test28').onclick(function() {
			alert(this.innerText);
		},1);
	}
	test28();
	
	function test29() {
		$('.test29').onclickAll(function() {
			alert(this.innerText);
		});
	}
	test29();
	
	function test30() {
		var	str='';
		var	i=0;
		$('.test30').each(function(){
			str+=(i+':'+this.innerText+'\n');
			i++;
		});
		alert('length:'+i+'\n'+str);
	}

	function test31(){
		$('#test31').remove();
	}
	
	function test32(){
		$('.test32').remove();
	}
	
	function test33(){
		$('.test33').remove(1);
	}
	
	function test34(){
		$('.test34').removeAll();
	}
	function test35(){
		$('#test35').append('hello');
	}
	function test36(){
		$('.test36').append('<a href="http://www.llqqww.com" target="_blank">www.llqqww.com</a>');
	}
	function test37(){
		$('.test37').append('hello',1);
	}
	function test38(){
		$('.test38').appendAll('<a href="http://www.llqqww.com" target="_blank">www.llqqww.com</a>');
	}
	function test39(){
		$('#test39').prepend('hello');
	}
	function test40(){
		$('.test40').prepend('<a href="http://www.llqqww.com" target="_blank">www.llqqww.com</a>');
	}
	function test41(){
		$('.test41').prepend('hello',1);
	}
	function test42(){
		$('.test42').prependAll('<a href="http://www.llqqww.com" target="_blank">www.llqqww.com</a>');
	}
	function test43(){
		$('#test43').addClass('red');
	}
	function test44(){
		$('.test44').addClass('red');
	}
	function test45(){
		$('.test45').addClass('red',1);
	}
	function test46(){
		$('.test46').addClassAll('red');
	}
	function test47(){
		$('#test47').removeClass('red');
	}
	function test48(){
		$('.test48').removeClass('red');
	}
	function test49(){
		$('.test49').removeClass('red',1);
	}
	function test50(){
		$('.test50').removeClassAll('red');
	}
	
	function test98(){
		var url='http://www.llqqww.com/open/json/get.php';
		$.ajax({
		   	method: 'GET',
		   	dataType:'json',
		   	url:url,
		    data:{
		    	name:'Leytton'
		    },
		    success: function (data,xhr) {
		       alert(JSON.stringify(data));
		    },
		    error:function(data,xhr){
		        alert(data);
		    }
		});
	}
	
	function test99(){
		var url='http://www.llqqww.com/open/json/post.php';
		$.ajax({
		   	method: 'POST',
		   	dataType:'json',
		   	url:url,
		    data:{
		    	name:'Leytton'
		    },
		    success: function (data,xhr) {
		       alert(JSON.stringify(data));
		    },
		    error:function(data,xhr){
		    	alert(data);
		    }
		});
	}