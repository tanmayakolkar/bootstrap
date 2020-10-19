let registrationForm=document.querySelector("#register-from");
registrationForm.addEventListener('submit',function()
{

	event.prevantDefault();
	validateform();
}

let validateform = () =>
{
	checkUserName();
};

let checkUserName() =() =>
{
let inputEl=document.querySelector("#username")
let inputFeebbackEl=document.querySelector("#username-feedback")
let regExp =/^[a-zA-Z0-9]{4,10}$/;
if(regExp.test(inputEl.value))
{
	makevalid(inputEl,inputFeebbackEl)
}

};



let makevalid=(inputEl,inputFeebbackEl) =>
{
	inputEl.classList.add('is-form-valid')
	inputEl.classList.remove('is-form-invalid')
	inputEl.classList.add('text-success')
	inputEl.classList.remove('text-danger')
    inputEl.innerText='looks good';

}

let makevalid=(inputEl,inputFeebbackEl) =>
{
	inputEl.classList.remove('is-form-valid')
	inputEl.classList.add('is-form-invalid')
	inputEl.classList.remove('text-success')
    inputEl.classList.add('text-danger')
    inputEl.innerText=`please addEventListener a${inputEl.placeholder}`;

}






