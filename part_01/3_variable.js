    let name = 'kang';
//  선언 | 할당
name = 'munho';
// 재할당 가능
console.log(name);

//--------------------------------------------------------
/*
const NAME = 'kang';
console.log(NAME);
NAME = 'Munho';
// const는 변수의 재할당 불가
console.log(NAME);
*/
//--------------------------------------------------------

console.log('----------------------------------------------------------------');

const a = {이름 : 'kang'};
console.log(a.이름);
a.이름 = 'munho';    // 값은 변경가능
console.log(a.이름);
Object.freeze(a);  // a라는 object를 절대 변경 불가하게 선언(값 포함)


//--------------------------------------------------------

setTimeout(function(){
    let i = 1;
    while(i <= 5){
        console.log(i);
        i++;
    }
    
},1000)