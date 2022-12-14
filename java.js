function change(){
var x=document.getElementById("pen");
var a=Math.floor(Math.random() * 1)+1;
var b=Math.floor(Math.random() * 10);
var c=Math.floor(Math.random() * 10);
var d=Math.floor(Math.random() * 10);
var e=Math.floor(Math.random() * 10);
var f=Math.floor(Math.random() * 10);
var res="https://www.23qb.net/book/";
  u+=1;
document.getElementById("pen").textContent=u;

fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(res+a+b+c+d+e+f+"/")}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => {
                      if(nov==(data.contents)) {
                        //document.getElementById("pen").textContent="請稍等5~30秒";
                        change();
                      }
                      else document.getElementById("pen").textContent=res+a+b+c+d+e+f+"/";
                    });
}
function op(){
  var x=document.getElementById("pen").textContent;
  //window.alert(x);
  window.open(x);
var a=Math.floor(Math.random() * 2)+1;
var b=Math.floor(Math.random() * 10);
var c=Math.floor(Math.random() * 10);
var d=Math.floor(Math.random() * 10);
var e=Math.floor(Math.random() * 10);
var f=Math.floor(Math.random() * 10);
  if(a>1)b=Math.floor(Math.random() * 4);
var res="https://www.23qb.net/book/";
 document.getElementById("pen").textContent="";
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(res+a+b+c+d+e+f+"/")}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => {
                      if(nov==(data.contents)) {
                        u=0;
                        change();
                      }
                      else document.getElementById("pen").textContent=res+a+b+c+d+e+f+"/";
                    });
}
var a=Math.floor(Math.random() * 1)+1;
var b=Math.floor(Math.random() * 10);
var c=Math.floor(Math.random() * 10);
var d=Math.floor(Math.random() * 10);
var e=Math.floor(Math.random() * 10);
var f=Math.floor(Math.random() * 10);
var res="https://www.23qb.net/book/";
document.getElementById("pen").textContent=res+a+b+c+d+e+f+"/";

var nov;
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.23qb.net/book/223500/')}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => nov=(data.contents));
var u;
