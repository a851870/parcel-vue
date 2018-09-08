//promise简单封装ajax
export function myAjax(url,async){
	return new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
		xhr.open( 'GET',url,async );
		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				xhr.status === 200 ? resolve(xhr.responseText) : reject();
			}
		}
		xhr.send();
	})
}
//lrc解析
export function lrcRegular(lrc){
	const regTime = /\d{2}:\d{2}/g,
		  regLyric = /\s[\s:a-zA-Z0-9_\u4e00-\u9fa5]*\n|\n/g;
	let obj = {},
	lrcReg =  lrc.replace(/\[(\d{2}:\d{2})[.:](\d{2,3})\]/g,"$1");
	let regularTime =  lrcReg.match(regTime),regularLyric = lrc.match(regLyric);
	for(let i in regularTime){
		obj[ regularTime[i] ] = regularLyric[i]
	}
	return {obj,regularTime,regularLyric};
}
//秒转分秒
export function minSec(arg){
	if (arg === '00:00'){return arg}
	let second=arg%60,minute=Math.floor(arg/60);
	minute < 10 && (minute = "0"+minute);
	second < 10 && (second = "0"+second);
	return minute+":"+second
}