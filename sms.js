let a=document.querySelector("#textdata");

let b=document.querySelector("#char-count");

a.addEventListener("keyup",function()

{

let c=a.value.length;
b.innerText=c;



});