/**
let a= 'Uzzal Ahmad';
console.log('Your name is :' +a);
a ='Raki Khand';
console.log('Your Second name is :' + a);
 */

 const a = 'Faruk Ahmad';
 console.log('My name is :' + a);
 //a = 'Rakiul islam';
 //console.log('My Friend name is :'+ a);

 //letও constব্লক(Block) স্কোপ মেইন্টেইন করে
 
//ES5 Example
var i =13;

for( var i =0; i < 5; i++){
    console.log(i);
}
console.log ('value :'+ i);

//Let Example
let e6 =13;
for(let e6 = 0; e6 < 5; e6++){
    console.log(e6);
}

console.log('Value :' +e6);

//Const Example  here

const e6 =13;
for(const e6 = 0; e6 < 5; e6++){
    console.log(e6);
}
