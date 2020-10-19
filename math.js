let numbere1=document.querySelector("#req-number")

numbere1.addEventListener('keyup',function() 
{
   let thenumber=Number(numbere1.value);
   document.querySelector("#number").innerText=thenumber

calculate();


	
});

let numbere2=document.querySelector("#multiplier")

numbere2.addEventListener('input',function() 
{
   let secnumber=Number(numbere2.value);
   document.querySelector("#multiples").innerText=secnumber


calculate();

	
});


let calculate= () =>
{

let a=Number(document.querySelector("#number").innerText);
let b=Number(document.querySelector("#multiples").innerText);

let c=a*b

document.querySelector("#result").innerText=c;


};