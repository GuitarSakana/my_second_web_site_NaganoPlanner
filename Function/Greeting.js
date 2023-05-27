const username = localStorage.getItem('userid');      //저장된 유저이름
const usersex =localStorage.getItem('usersex');         //저장된 유저 성별

const timegreeting = document.querySelector('#timegreeting');
const sex = document.querySelector('#usersex');
const name = document.querySelector('#username');

const greeting = ['Good morning','Good afternoon','Good evening','Good night'];

sex.innerHTML = usersex;
name.innerHTML = username;

function getgreetingtext(){
    const date = new Date();
    const Hour = date.getHours();
    let tg=''
    
    if(Hour>=6 && Hour<12){
         tg = greeting[0];
    }else if(Hour>=12 && Hour<17){
         tg = greeting[1];
    }else if(Hour>=17 && Hour<21){
         tg = greeting[2];
    }else{
         tg = greeting[3];
    }
    timegreeting.innerHTML = tg;
}

getgreetingtext();
setInterval(getgreetingtext,600000);
