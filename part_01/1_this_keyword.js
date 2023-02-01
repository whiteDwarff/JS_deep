'use strict';
// 엄격한 javaScript 

function getId(ele) {
    return document.getElementById(`${ele}`);
}
function getClass(ele) {
    return document.getElementsByClassName(`${ele}`);
}
function query(ele) {
    return document.querySelector(`${ele}`);
}
getId('hi').innerText = 'hi';
getClass('hi')[0].innerText = '안녕';
query('#ele').innerText = '반가워요'

////////////////////////////////////////////////////////////////

// this keyword 
console.log(this);      // -> window 객체 (기본 함수들의 수납공간 {}) 

function test() {
    console.log(this)
    // -> window 객체 but, strict mode가 실행되면 undefined
}
test();

let obj = {
    data : 'kim',
    function : function() { console.log(this)},
    // method가 동작하고 있는 object (나를 포함하는 본인입니다 ~)
    data2 : {
        함수() {
            console.log(this)
            // obj.data2가 this가 된다.
        },
        함수2 : () => {
            console.log(this)
            // 상위요소의 this가 출력
        }
    }
}
obj.function();
obj.data2.함수();
obj.data2.함수2();

// 전역공간에서 함수 및 변수를 선언하면 {window}에 보관된다. window의 object가 된다.
// this -> 나를 담고 있는 변수를 출력해준다 

console.log('----------------------------------------------------------------');

function 기계() {
    // 기계란 ? 
    // 기계 안에서 쓰면 새로 생성되는 object를 뜻함 (constructor)
    this.이름 = 'kim';
    // instance, 새로 생성되는 object
}

let object = new 기계();
console.log(object);

getId('hi').addEventListener('click', function(e){
    // this == e.currentTarget
    console.log(e.target, this);
    e.target.style.fontSize = '24px';
    let array = [1,2,3];
    array.forEach(item => console.log(this));
})

let object2 = {
    name : ['김', '이', '박'],
    함수 : function() {
        // console.log(this);      // object2를 출력
        object2.name.forEach(() => {
            console.log(this);  // window를 출력
            // arrow function : 상위 this값을 그대로 가져온다 (inherit)
        })
    }
}
object2.함수();