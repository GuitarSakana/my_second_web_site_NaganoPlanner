const todoform = document.querySelector('#todo-form');
const todo_list = document.querySelector('#todo-list');
const todo_input = todoform.querySelector('#todoinput');

let todoPhoto = ["todo_picture/1.jpg","todo_picture/2.jpg","todo_picture/3.jpg","todo_picture/4.jpg","todo_picture/5.jpg","todo_picture/6.jpg"];
let photoCount = [0,0,0,0,0,0];
let i =0;
let TodoList = [];
let todoCount = Number(localStorage.getItem('todoCount'));


function randNumber(){
    while(true){
        i = Math.floor(Math.random()*6);
        if(photoCount[i]>=1){
            continue;
        }else{
            photoCount[i]+=1;
            return i;
        }
    }
}
function saveTodoList(){
    localStorage.setItem('todoes',JSON.stringify(TodoList));    //17. localStorage에 TodoList배열을 전부 문자열화 시켜서 저장한다                                                         //    todoes라는 key에 value값으로 문자열화시킨 배열 저장.
    localStorage.setItem('todoCount',`${todoCount}`);
    localStorage.setItem('photocount',JSON.stringify(photoCount));
}

function removeTodo(event){
    const div = event.target.parentElement;               //18. click이벤트가 발생한 태그에 부모 태그를 찾아서 li변수에 저장.
    div.remove();                                //19. click이벤트가 발생한 부모태그 웹 상에서 삭제 (하지만, localStorage에 남아있는 정보도 삭제해주어야 한다.)
    todoCount-=1;
    photoCount[div.className]-=1;
    TodoList = TodoList.filter((todo) => todo.id !== parseInt(div.id));  //20. 기존 TodoList배열을 filter로 삭제 버튼의 li를 걸러낸 후 재생성한다.
    saveTodoList();                             //21. 재생성한 TodoList를 localStorage에 다시 저장한다.(DB에서 삭제)
}

function printTodo(todoObj){
    const div = document.createElement('div');            // 8. li 태그 생성
    const img = document.createElement('img');
    const span = document.createElement('span');            //9. span태그 생성
    const button = document.createElement('button');    //10. button태그 생성  
    div.appendChild(img);
    div.appendChild(span);                       //11. li태그 밑에 span태그 붙이기
    div.appendChild(button);                 //12. li태그 밑에 button태그 붙이기         즉, 현재 li안에 span과 button이 같이 있음.
    img.src=todoObj.photo;
    span.innerText=`${todoObj.day}
                                -${todoObj.todo}`;        //13. span 태그에 할일 객체의 할일을 넣음.                             
    div.className = todoObj.randNumber;
    div.id = todoObj.id;                                    // 13-1. 진짜 이거 없어서 개고생했네..... 생성한li태그 id에 todo객체에 id를 넣어준다. //나중에 삭제할 때 부모 태그의 id를 식별해서 삭제해 줘야 하기 때문이다.
    button.addEventListener('click',removeTodo);        //14. li안에 button태그 클릭시 removeTodo함수로 이동.     (event발생 전까지 보류)
    todo_list.appendChild(div);          //15. 위에서 만든 li태그를 html todo-list 태그에 붙임.
    saveTodoList();
}

function handleFucntion(event){         
    event.preventDefault();             //2. 이벤트 발생 정지
    todoCount+=1;
    localStorage.setItem('todoCount',`${todoCount}`)
    if(Number(localStorage.getItem('todoCount'))>6){
        alert("The number of lists cannot exceed 6.");
        todoCount-=1;
        saveTodoList();
    }else{  
        const newtodo = todo_input.value;       //3. newtodo라는 변수에 input에서 들어온 입력값 저장
        const date = new Date();
        const writeday = `${date.getFullYear()}년${(date.getMonth()+1)}월${date.getDate()}일.`;
        todo_input.value = "";          //4. 기존 input값은 초기화
        const randphoto = randNumber();
        const todoObj = {            // 5. 객체를 만들고 들어온 value값을 들어온 시간과 객체롤 만듬
            'todo' : newtodo,
            'id' : Date.now(),
            'day':writeday,
            'photo':todoPhoto[randphoto],
            'randNumber':randphoto
        }
        TodoList.push(todoObj);         //6. 리스트에 할일 객체를 집어넣음
        printTodo(todoObj);             //7. 객체를 print함수로 보냄
        saveTodoList();              //16. printTodo함수에서 할일 걸고 saveTodoList 함수로 이동
    }
}



todoform.addEventListener('submit',handleFucntion);     //1. submit이벤트 발생하면 handle function함수로 이동



//웹브라우저가 새로고침되거나 닫히더라도 localSorage에 저장되어 있는 값들을 계속 보여주는 코드
const savedToDos = localStorage.getItem('todoes');      //*현재 로컬스토리지에 있는 문자열리스트를 저장
if(savedToDos !== null){        //savedToDos에 값이 있다면
    const pareTodo = JSON.parse(savedToDos);    //문자열로 되어있는 배열을 진짜 배열화 시킨다.
    TodoList = pareTodo;            //기존에 TodoList에 새롭게 변환시킨 pareTodo값을 넣는다.
    pareTodo.forEach(printTodo);    //pareTodo의 배열을 하나하나 다시 웹브라우저에 띄운다.
    for(let j=0;j<TodoList.length;j++){
        photoCount[TodoList[j].randNumber]+=1;
    }
}
