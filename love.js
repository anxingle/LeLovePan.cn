// JavaScript Document
function showTime(){
  	var date1 = new Date(2014,06,29);
  	var date2 = new Date();
  	var date3 = date2.getTime()-date1.getTime();
    // 天数差 
  	var days = Math.floor(date3/(24*3600*1000));
   // 计算出小时数 -->
  	var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数 -->
  	var hours=Math.floor(leave1/(3600*1000))
  //计算相差分钟数
  	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
  	var minutes=Math.floor(leave2/(60*1000));
  //计算相差秒数
 	var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
  	var seconds=Math.round(leave3/1000);
	//var str=days+" 天"+hours+" 时"+minutes+"分"+seconds+"秒";
    document.getElementById("time").innerHTML=days+" 天"+hours+" 时"+minutes+"分"+seconds+"秒";
	t=setTimeout('showTime()',500)
}

   	



