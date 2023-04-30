//----- 1. 변수 
const a = 6; 
const b = 2;
// let과 const의 차이 (변수 만드는 2가지 방법)
//    항상 const 가끔 let 절대 var는 안씀. (var는 옛날 버전)
//    const : 변경안되는 변수 (밑에 가서 값을 업데이트할 수 없음. 완전 고정.) 
//    let : 변경되는 변수 (밑에 가서 변수를 바꿀 수도 있어 )
let myName = " mila";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello"+ myName);

myName = " mihee"; 
console.log("Your new name is"+ myName);


//----- 2. boolean : true or false, null, undefined 
// 로그인 완료나 아니냐 등의 것들을 boolean 타입으로 전달 
// null : 변수에 아무것도 없음. 
// false와는 다름. 
const amIFat = null;
console.log(amIFat);

// something에 아무것도 정의하지 않으면 undefined 출력 
// undifined와 null은 또 다름. 
// undefined : 변수는 메모리에 할당되었지만 주어진 값이 없다는 뜻.
// null : 변수 안에 값이 "아무 값도 없다"는 것이 주어졌다는 뜻. 
let something; 
console.log(something, amIFat);


//----- 3. arrays 
// 하나의 변수 안에 여러개의 데이터를 넣고 싶을 때 
// const는 변수를 변경할 수는 없다고 했으나, array 안의 데이터 추가 / 삭제는 가능함. 
// array는 살아있어서 항목을 받아오고 더하고, 삭제할 수 있다. 
const daysOfWeek = ['mon', 'tue', 'wed','thu','fri', 'sat'];
const nonsense = [1, 2, 'hello', false, true, null, undefined];
console.log(daysOfWeek, nonsense);

// array에서 n번째 값 꺼내오기 (0부터 시작)
console.log(daysOfWeek[5]);

// array에 값 추가하기 
daysOfWeek.push('sun');
console.log(daysOfWeek);


//----- 4. Objects 
// key, value로 이뤄진 파이썬의 dictionary와 같음
// array와 동일하게 값을 추가하거나 바꾸는 것도 가능. 
// array.shift(); 가장 앞ㅇ거부터 삭제 
// array.pop() : 가장 뒤에거부터 삭제 
// array.splice(index, 1) 몇번째거 삭제 
const playerName = 'mila';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player = {
    name : 'mila',
    points : 12,
    handsome : false,
    fat : true
}

console.log(player);
console.log(player.name);
console.log(player["name"]);

// 값 추가 수정 
player.lastName = 'potato';
player.points = player.points + 1
console.log(player.points);

//---- 5. Functions Part 1
// NaN : Not a Number 
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I am " + age);
} 

sayHello("mila", 32);

function plus(a, b){
    console.log(a+b);
}
function devide(a,b){
    console.log(a/b);
}

plus(1, 3);
devide(2,3);


const player1 = {
    name : 'mila',
    sayHello : function(otherPersonsName){
        console.log('hello '+otherPersonsName+" nice to meet you.")
    }
}

console.log(player1.name);
player1.sayHello('lynn');
player1.sayHello('mila');

//----- Recap 
function minusFive(potato){
    console.log(potato - 5);
}

minusFive(21, 10, 12);

const calculator = {
    plus : function(a, b){
        return a+b;
    },
    divide : function(a,b){
        return a/b;
    },
    multifly : function(a,b){
        return a*b;
    },
    minus : function(a,b){
        return a-b;
    },
    times : function(a,b){
        return a * b;
    },
    power : function(a,b){
        return a **b ;
    }
}
//-----#2. 11 Returns
console.log(calculator.plus(2,3));

const age = 95;
function calculaterKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculaterKrAge(age);
console.log(krAge);

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10); 
const timeResult = calculator.times(10, minusResult);
console.log(timeResult);

//-----# 13. Conditionals
// typeof : 자바스크립트에서 데이터 타입 알아낼 때 쓰는 것. ex. typeof 2 
const age2 = parseInt(prompt("How old are you?"));

console.log(age2);


//-----# 14. Conditionals Part 2 
// 무언가가 NaN임을 구별하는 방법 배우기 
// isNaN : 숫자가 아니면 True, 숫자이면 False로 표시됨 .
console.log(isNaN(age2));

if(isNaN(age2)){
    console.log("Please write a number")
} else {
    console.log("Thank you for writing your age.")
}

//-----# 15. Conditionals Part 3
// else if 에 대해서 배운다. 
// && : and, || : or (특이하네)
// 완전 같으면 === 로 쓰네, 다르면 !== 로 체크 
// ===는 값과 타입도 함께 비교한다고 함. 
// 조건문은 위에서부터 실행된다. 

if(isNaN(age2) || age2 < 0){
    console.log("Please write a real positive number");
} else if(age2 < 18) {
    console.log("You are too young.");
} else if(age2 >= 18 && age2 <= 50) {
    console.log("You can drink.");
} else if(age2 > 50 && age2 <= 80) {
    console.log("You should drink less.");
} else if (age2 === 100){
    console.log("wow you are wise.");
}else if (age2 > 80){
    console.log("You can do whatever you want.")
}

//-----# 16. Recap 
