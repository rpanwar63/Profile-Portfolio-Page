$(document).ready(function() {
    $('#fullpage').fullpage({
        slidesNavigation: true,
        navigation: true
    });    
});

var i=0;
var str=["THINK ."," DESIGN ."," CODE ."," DEVELOP"];
var subhead = setInterval(function(){
	document.getElementById("subHeading").innerHTML=document.getElementById("subHeading").innerHTML+str[i];
	if(i===3){
		clearInterval(subhead);
	}
	i++;
},1000);
document.getElementById("landingPage-js").onload=subhead;

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  document.getElementById("copymsg").style.opacity="1";
  setTimeout(function(){
  	document.getElementById("copymsg").style.opacity="0";
  },1300);
}