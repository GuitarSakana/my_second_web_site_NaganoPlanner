const join = document.querySelector('#join');
const out = document.querySelector('#out');
const joinbox = document.querySelector('#joinbox');
const modal = document.querySelector('#modal');


// 들어온 value값에 한글이 포함되어 있는지 아닌지 확인하는 함수
function checkKorean(text) {
    const koreanPattern = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    if(koreanPattern.test(text)) {
        return 1;
    }else{
        return 0;
    }
}
function shutdown(){
    joinbox.style='display:none';
    modal.style = 'display:none';
}

function checkjoin(event){
    event.preventDefault();

    const id = document.querySelector('#newid');
    const pass = document.querySelector('#newpass');
    const radio= document.getElementsByName('sex');
    const idvalue = id.value;
    const passvalue = pass.value;
    let radiovalue='';

    for (const option of radio) {
        if (option.checked) {
          radiovalue = option.value;
          break;
        }
      }

    if(idvalue==="" || passvalue===""){
        alert('값을 입력하지 않으셨습니다.');
    }else if(localStorage.getItem('userid') !== null){
        alert('이미 사용하고 계신 계정이 있습니다.');
        location.reload();
    }else{
        if(checkKorean(idvalue)){ 
            if(idvalue.length>6){
                alert('한글이 포함된 ID는 6글자를 넘을 수 없습니다.');
            }else{
                localStorage.setItem('userid',idvalue);
                localStorage.setItem('userpasswd',passvalue);
                localStorage.setItem('usersex',radiovalue);
                alert('가입되었습니다.');
                joinbox.style = 'display: none;';
                modal.style='display:none';
                location.reload();
            }
        }else{
            localStorage.setItem('userid',idvalue);
            localStorage.setItem('userpasswd',passvalue);
            localStorage.setItem('usersex',radiovalue);
            alert('가입되었습니다.');
            joinbox.style = 'display: none;';
            modal.style='display:none';
            location.reload();
        }
    }
}

function newjoin(event){
    event.preventDefault();
    joinbox.style = 'display: flex;';
    modal.style = 'display:flex';
    const cancelbutton = document.querySelector('#joincancel');
    cancelbutton.addEventListener('click',shutdown);
    
    const joinform = document.querySelector('#newjoin');
    joinform.addEventListener('submit',checkjoin);
}





join.addEventListener('click',newjoin);         //join버튼(회원가입) 눌렀을경우 작동함수(위에 함수들 작동)
out.addEventListener('click',removeuser);       //out버튼(사용회원삭제) 눌렀을경우 작동함수(아래 함수들 작동)





function removeuser(event){
    event.preventDefault();
    if(localStorage.getItem('userid')===null){
        alert('삭제할 계정이 없습니다.');
    }else{
       if(confirm('계정을 삭제하시겠습니까?')){
            localStorage.removeItem('todoCount');
            localStorage.removeItem('todoes');
            localStorage.removeItem('photocount');
            localStorage.removeItem('userid');
            localStorage.removeItem('userpasswd');
            localStorage.removeItem('usersex');
            localStorage.removeItem('musicIndex');
            alert('삭제를 완료했습니다. 이용해주셔서 감사합니다.');
            location.reload();
       }else{
        alert('삭제를 취소합니다.');
       }
    }
    
}






