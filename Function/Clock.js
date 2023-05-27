const clock = document.querySelector('#clock');
const date = document.querySelector('#date');
const day = document.querySelector('#day')


function getDate(){
    const dt = new Date();
    const YEAR = String(dt.getFullYear());
    const MONTH = String((dt.getMonth()+1)).padStart(2,"0");
    const DATE = String(dt.getDate()).padStart(2,"0");
    date.innerText=`${YEAR}/${MONTH}/${DATE}`
}
function getDay(){
    const Week=["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."];
    const dt = new Date();
    const DAY = Week[dt.getDay()];
    if(DAY === "Sun."){
        day.style = 'color:red;';
        day.innerText = DAY;
    }else if(DAY === "Sat."){
        day.style = 'color:blue;';
        day.innerText = DAY;
    }else{
        day.innerText = DAY;
    }
}
function getClock(){
    const dt = new Date();
    const Hour = String(dt.getHours()).padStart(2,"0");
    const Minute = String(dt.getMinutes()).padStart(2,"0");
    const Second = String(dt.getSeconds()).padStart(2,"0");
    const Am_PM = Hour<=12?"am":"pm";
    clock.innerText=`${Hour}:${Minute}:${Second} ${Am_PM}`;
}

getDate();
getDay();
getClock();
setInterval(getClock,1000);