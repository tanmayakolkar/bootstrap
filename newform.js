 taskForm=document.querySelector('#task-form');

taskForm.addEventListener("submit",function()

 {
	//event.preventDefault();

	 taskinput=document.querySelector('#input-item');

	 task=taskinput.value.trim();


	let taku=localStorage.getItem('item')? JSON.parse(localStorage.getItem('item'))  : [];


	taku.unshift(task);


	localStorage.setItem('item',JSON.stringify(taku));
	display();
});


let display =() =>
{

tasklistl=document.querySelector('#task-list')
	taskList=localStorage.getItem('item')? JSON.parse(localStorage.getItem('item'))  : [];

	if(taskList.length!==0)
	{

		 eachTask='';
		for(let i of taskList)
		{

			eachTask+=`<li class="list-group-item list-group-item-action list-group-item-warning">
						<span>${i}</span>
						<button class="close">
							<i class="fa fa-times-circle">  </i>
						</button>
					</li>`;
		}
tasklistl.innerHTML=eachTask; 
	}
};
display();



taskList=document.querySelector('#task-list')

taskList.addEventListener('click',function(event)

{

	targetElement=event.target;
	if(targetElement.classList.contains('fa-times-circle'))
	{
		  actualEl=targetElement.parentElement.parentElement;
		  selectedTask=actualEl.innerText;
		  console.log(selectedTask);
		  taskList=localStorage.getItem('item')? JSON.parse(localStorage.getItem('item'))  : [];
	    taskList=taskList.filter(function(item)
	    {

	    	return item.trim()!==selectedTask.trim();

	    });

	    localStorage.setItem('item',JSON.stringify(taskList));
        display();
	
}


});





