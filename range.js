let change= (number) =>
{
let changedate=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
return changedate;
}


let rangedata=document.querySelector("#range1")

let rangeamount=document.querySelector("#amount")

rangedata.addEventListener('input',function()
{
let data=rangedata.value;

rangeamount.innerText=change(data);


});