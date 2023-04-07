const a = 10;
const [b,c,d,e] = [10,20,30,40];

const plus = (a,b) => a+b;

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set setAge(age) {
        this.age += age;
    }
    get getAge() { return this.age; }
}


// default는 1회만, 하나의 변수만 가능
export default a;

// 여러개를 export
export {b,c,d,e};
export {plus, Human}
