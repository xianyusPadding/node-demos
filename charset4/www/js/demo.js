window.onload=function(){
	var confirm=document.getElementsByClassName('confirm');
	var number1=document.getElementsByClassName('number1');
	var number2=document.getElementsByClassName('number2');
	var number3=document.getElementsByClassName('number3');
	// var button1=document.getElementsByClassName('button1');
	// var button2=document.getElementsByClassName('button2');
	// var button3=document.getElementsByClassName('button3');
	
	confirm[0].onclick=function(){
		if(number1[0].value!=0 && number2[0].value!=0 && number3[0].value!=0)
 			alert("大麦鸡"+number1[0].value+"份\n原味鸡腿堡"+number2[0].value+"份\n墨西哥鸡肉卷"+number3[0].value+"份\n下单成功！");
 		else if(number1[0].value==0 && number2[0].value!=0 && number3[0].value!=0)
 			alert("原味鸡腿堡"+number2[0].value+"份\n墨西哥鸡肉卷"+number3[0].value+"份\n下单成功！");
 		else if(number1[0].value!=0 && number2[0].value==0 && number3[0].value!=0)
 			alert("大麦鸡"+number1[0].value+"份\n墨西哥鸡肉卷"+number3[0].value+"份\n下单成功！");
 		else if(number1[0].value!=0 && number2[0].value!=0 && number3[0].value==0)
 			alert("大麦鸡"+number1[0].value+"份\n原味鸡腿堡"+number2[0].value+"份\n下单成功！");
 		else if(number1[0].value==0 && number2[0].value==0 && number3[0].value!=0)
 			alert("墨西哥鸡肉卷"+number3[0].value+"份\n下单成功！");
 		else if(number1[0].value==0 && number2[0].value!=0 && number3[0].value==0)
 			alert("原味鸡腿堡"+number2[0].value+"份\n下单成功！");
 		else if(number1[0].value!=0 && number2[0].value==0 && number3[0].value==0)
 			alert("大麦鸡"+number1[0].value+"份\n下单成功！");
 		else
 			alert("下单失败！")

	}


}