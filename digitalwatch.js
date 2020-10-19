let indianWatch=() =>
{
let option={timeZone:'Asia/Kolkata'};
let currentDate=new Date().toLocaleDateString('en-US',option);
let currentTime=new Date().toLocaleTimeString('en-US',option);

document.querySelector("#india-date").innerText=currentDate;
document.querySelector("#india-time").innerText=currentTime;
};

setInterval(indianWatch,1000)

let usaWatch=() =>
{

let option={timeZone:'America/New_York'};
let currentDate=new Date().toLocaleDateString('en-US',option);
let currentTime=new Date().toLocaleTimeString('en-US',option);

document.querySelector("#usa-date").innerText=currentDate;
document.querySelector("#usa-time").innerText=currentTime;


};
setInterval(usaWatch,1000)
	
let chinaWatch=() =>
{

let option={timeZone:'Asia/Shanghai' };
let currentDate=new Date().toLocaleDateString('en-US',option);
let currentTime=new Date().toLocaleTimeString('en-US',option);

document.querySelector("#china-date").innerText=currentDate;
document.querySelector("#china-time").innerText=currentTime;


};

setInterval(chinaWatch,1000)