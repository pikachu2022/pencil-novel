function change(){
var x=document.getElementById("pen");
var a=Math.floor(Math.random() * 1)+1;
var b=Math.floor(Math.random() * 10);
var c=Math.floor(Math.random() * 10);
var d=Math.floor(Math.random() * 10);
var e=Math.floor(Math.random() * 10);
var f=Math.floor(Math.random() * 10);
var res="https://www.23qb.net/book/";
 document.getElementById("pen").textContent=res+a+b+c+d+e+f+"/";
}
function op(){
  var x=document.getElementById("pen").textContent;
  //window.alert(x);
  window.open(x);
}
