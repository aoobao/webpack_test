
import './common.css';
import style1 from './style1.css';
import style2 from './style2.css';
import component from './component';


document.body.appendChild(component('hello world!', style1.class1, style2.class1));
// document.body.appendChild(component('hello world'));



class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(this.name + ', ' + this.age);
    }
}

var person = new Person('zhangsan',33);
//person.print();

let arr = [1,2,3,4,5,5,3];
let set = new Set(arr);
console.log([...set]);
console.log(Array.from(set));

