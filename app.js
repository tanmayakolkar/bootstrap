let pass=document.querySelector("#password")
let checkbox=document.querySelector("#check")

checkbox.addEventListener("change",function()
{
let attribute=pass.getAttribute('type');
if(attribute =='password')
{
	pass.setAttribute('type','text')

}
else
{
	pass.setAttribute('type','password')
}


});