// // const title = document.getElementById("title");

// // console.dir(title);
// // title.innerText = "Got you!"

// // console.log(title.id);
// // console.log(title.className);

// // const hellos = document.getElementsByClassName("hello");

// // console.log(hellos);

// // ----#3.2 Searching For Elements 
// // class는 . 으로 시작, id는 # 로 시작 
// const title = document.querySelector("div.hello:first-child h1");
// console.log(title);
// // 디렉토리. 이 엘레멘트로 할 수 있는 거을 보여줌.
// console.dir(title);
// // title.innerText = "There you are!";
// // title.style.color = "blue";


// // Event Listner 
// // 2개의 arguement(인수)를 전달. 
// // function handleTitleClick(){
// //     console.log("title was clicked!");
// // }
// // title.onclick = handleTitleClick;
// // 여기 끝에 함수에 ()를 넣지 말아야 한다는 것이 중요! 
// // title.addEventListener("click", handleTitleClick);

// function colorChange() {
//     if (count%2 === 1){
//         title.style.color = "red"; 
//         count=count+1;
//         console.log("Title Color has changed to red!"+ count);
//     } else if(count%2 === 0){
//         title.style.color = "blue";
//         count=count+1;
//         console.log("Title Color has changed to blue!"+ count);
//     }
// }

// // count=1;
// // console.log(count);
// // title.addEventListener("click", colorChange);

// //-----3.4 Events part 2 
// // dir()함수 실행 했을때 on~으로 시작하는 함수들이 해당 element에서 쓸 수 있는 함수임. 

// function handleMouseEnter(){
//     title.innerText = "mouse is here!";
// }
// function handleMouseLeave(){
//     title.innerText = "mouse is leave";
// }
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// //-----3.5 More Events 
// // event 내부를 살펴보고 다른 listner 살펴보기. 
// // onclick을 쓰면 된다고 함. 
// // addEventListner는 나중에 removeEventListner를 쓸 수 있다는 장점이 있음. 
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// // copy 핸들러 
// function handleWindowCopy(){
//     alert("copier!");
// }
// // wifi 핸들러
// function handleWindowOffline(){
//     alert("no wifi");
// }
// function handleWindowOnline(){
//     alert("yes wifi");
// }

// // window.addEventListener("copy", handleWindowCopy);
// // window.addEventListener("offline", handleWindowOffline);
// // window.addEventListener("offline", handleWindowOnline);
// // window.addEventListener("resize", handleWindowResize);

// //-----#3.6 CSS in Javascript
// // querySelector를 제일 많이 쓴다. querySelector로 다른 것들은 어떻게 가져오는지 확인 필요
// // const는 바꿀 수 없다. let은 바꿀 수 있는 변수다. 
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color=newColor;
// }

// // h1.addEventListener("click", handleTitleClick);

// //-----#3.6,7,8 CSS in Javascript
// // 3.7 CSS에 있는 active 클래스를 html에 있는 h1에 전달하기 
// // 3.8 html내의 className을 저장하기

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const clickedClass = "active";
//     h1.classList.toggle(clickedClass);
// }

// h1.addEventListener("click", handleTitleClick);


//-----#4.0 Input Values 
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 같은 코드 더 짧게
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const loginForm = document.querySelector('#login-form');

// function onLoginSubmit(){
//     // const title = document.querySelector('h1#name');

//     // console.log(loginInput.value);
//     // console.log("click!");
//     // title.innerText = "Welcome, " + loginInput.value + "!";
//     const username = loginInput.value;
//     if(username===""){
//         alert("Please write your name.");
//     } else if(username.length>=10){
//         alert("Your name is too long.")
//     }
// }

// loginButton.addEventListener("click", onLoginBtnClick);

//-----#4.1 Form Submission
// input의 validation을 실행하기 위해서는 input 태그를 form 안에 두어야 함. 
// form안에 두면 자동으로 버튼을 클릭하거나 input 값을 넣고 enter를 치면 자동으로 submit되고 있음을 알 수 있음.
// submit된 값을 어떻게 받아올지에 대해서 고민 필요할듯.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하도록 막는 함수래. 
    loginForm.classList.add(HIDDEN_CLASS);
    const usernameWritten = loginInput.value; // 유저의 이름을 변수로 받아오기. 
    localStorage.setItem(USERNAME_KEY, usernameWritten);
    paintGreetings(usernameWritten);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the name
    paintGreetings(savedUsername);
}