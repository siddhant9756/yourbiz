var customer = document.getElementById("customer");
var advertiser = document.getElementById("advertiser");
var publisher = document.getElementById("publisher");
var influencer = document.getElementById("influencer");
var popupform1 = document.getElementById("popup-form1");
var popupform2 = document.getElementById("popup-form2");
var popupform3 = document.getElementById("popup-form3");
var popupform4 = document.getElementById("popup-form4");

	popupform1.style.cssText= "display:block; opacity:1;visibility: visible; transform:scale(1);"
	popupform2.style.cssText= "display:none;"
	popupform3.style.cssText= "display:none;"
	popupform4.style.cssText= "display:none;"

customer.addEventListener("click",function(){
	popupform2.style.cssText= "display:block; opacity:1;visibility: visible; transform:scale(1);"
	popupform1.style.cssText= "display:none;"
	popupform3.style.cssText= "display:none;"
	popupform4.style.cssText= "display:none;"
	customer.style.cssText = "box-shadow:0px 1px 9px 2px #D00000;"
	influencer.style.cssText = "box-shadow:none;"
	publisher.style.cssText = "box-shadow:none;"
	advertiser.style.cssText = "box-shadow:none;"
});
influencer.addEventListener("click",function(){
	popupform1.style.cssText= "display:block; opacity:1;visibility: visible;transform:scale(1);"
	popupform2.style.cssText= "display:none;"
	popupform3.style.cssText= "display:none;"
	popupform4.style.cssText= "display:none;"
	influencer.style.cssText = "box-shadow:0px 1px 9px 2px #D00000;"
	customer.style.cssText = "box-shadow:none;"
	publisher.style.cssText = "box-shadow:none;"
	advertiser.style.cssText = "box-shadow:none;"
});
advertiser.addEventListener("click",function(){
	popupform3.style.cssText= "display:block; opacity:1;visibility: visible;transform:scale(1);"
	popupform1.style.cssText= "display:none;"
	popupform2.style.cssText= "display:none;"
	popupform4.style.cssText= "display:none;"
	advertiser.style.cssText = "box-shadow:0px 1px 9px 2px #D00000;"
	influencer.style.cssText = "box-shadow:none;"
	publisher.style.cssText = "box-shadow:none;"
	customer.style.cssText = "box-shadow:none;"
});
publisher.addEventListener("click",function(){
	popupform4.style.cssText= "display:block; opacity:1;visibility: visible;transform:scale(1);"
	popupform1.style.cssText= "display:none;"
	popupform3.style.cssText= "display:none;"
	popupform2.style.cssText= "display:none;"
	publisher.style.cssText = "box-shadow:0px 1px 9px 2px #D00000;"
	customer.style.cssText = "box-shadow:none;"
	influencer.style.cssText = "box-shadow:none;"
	advertiser.style.cssText = "box-shadow:none;"
});
