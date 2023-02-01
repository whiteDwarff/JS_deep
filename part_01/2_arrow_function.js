let a = function() { };
let b = () => {}; 
b();


// -------------------------------------------------------------------
// arrow function
let 함수 = (a) => {return a + 10};
console.log(함수(5));

// 파라미터가 하나일 경우 () 생략가능
let 함수2 = a => {a + 10};

// 코드가 한줄일 경우 (), {} 전부 생략 가능
let 함수3 = a => console.log(a);
함수3(15);

[1,2,3,4].forEach(a => console.log(a));
document.getElementById('hi').addEventListener('click', e => {
    // arrow function의 특징은 바깥에 있던 this값을 내부에서 그대로 사용한다.
    // 함수내의 this 값을 변경시키지 않음
    // addEventListener 내에서는 this 대신 e.target 사용하자 !
    console.log(e.target);
})

let object = {
    함수 : () => {
        // object 내에서도 this 값은 함수내에서 재정의 되지 않는다
        console.log(this);
    }
}
object.함수();
// -------------------------------------------------------------------

let 사람 = {
    name: '손흥민',
    // fun : () => console.log(`안녕 나는 ${사람.name}`)
    fun : function() {
        console.log(`안녕 나는 ${this.name}`)
    }
}
사람.fun();

let 자료 = {
    data : [1,2,3,4,5]
}
자료.전부더하기 = function() {
    let sum = 0;
    this.data.forEach(function(a) {
        sum += a;
    });
    console.log(sum);
}
자료.전부더하기();

document.getElementById('hi').addEventListener('click', e => {
    setTimeout(()=> console.log(e.target.innerHTML), 1000);
})