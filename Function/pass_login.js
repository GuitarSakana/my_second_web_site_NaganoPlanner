const loginform = document.querySelector('#loginform');
const userid = localStorage.getItem('userid');


function checkuser(event){
    event.preventDefault();
    const inputID = document.querySelector('#inputid');
    const inputPASS = document.querySelector('#inputpass');
    let inputIDvalue = inputID.value;
    let inputPASSvalue = inputPASS.value;

    if(userid == null){
        alert('계정이 존재하지 않습니다.');
        location.reload();
    }else if(inputIDvalue!==localStorage.getItem('userid') || inputPASSvalue!==localStorage.getItem('userpasswd')){
        alert('ID 또는 PASSWD가 일치하지 않습니다.');
    }else if(inputIDvalue===localStorage.getItem('userid') && inputPASSvalue===localStorage.getItem('userpasswd')){
        loginform.submit();
    }else{
        alert('예상치 못한 오류로 세션 종료.');
        window.close();
    }
}

loginform.addEventListener('submit',checkuser);
