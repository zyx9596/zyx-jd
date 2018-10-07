//关闭头部广告
var close=document.getElementById('close');
var headerGG=document.getElementById('headerGG');
close.onclick=function(){
	headerGG.style.display="none";
}
//秒杀倒计时
var h=24;
var m=10;
var houer=document.getElementById('houer');
var minute=document.getElementById('minute');
var second=document.getElementById('second');
setInterval(function(){
	second=m--;
	if(m<0){
		m=10;
	}else if(second<0){
		minute=m--;
		this.innerText=minute;
	}else if(minute<0){
		houer=h--;
		this.innerText=houer;
	}
	console.log(second);
	console.log(minute);
	console.log(houer);
	this.innerText=second;
},1000)
