const findID = document.querySelector('#fid');
const findPASS = document.querySelector('#fpass');



function getid(event){
    event.preventDefault();

    if(localStorage.getItem('userid') == null){
        alert('사용중인 계정이 없습니다.');
    }else{
        const userid = localStorage.getItem('userid');
        alert(`사용중인 계정은 ${userid}입니다.`);
    }
}


findID.addEventListener('click',getid);             //userid 찾기 (위에함수)
findPASS.addEventListener('click',getpass);         //userpass찾기 (아래 함수)

function getpass(event){
    event.preventDefault();

    if(localStorage.getItem('userpasswd') == null){
        alert('사용중인 계정이 없습니다.');
    }else{
        const userpasswd = localStorage.getItem('userpasswd');
        let seeuserpasswd='';
        for(let i=0; i<userpasswd.length;i++){
            if(i%2==0){
                seeuserpasswd += userpasswd[i];
            }else{
                seeuserpasswd += '*';
            }
        }
        alert(`사용중인 비밀번호는 ${seeuserpasswd}입니다.`);
    }   
}