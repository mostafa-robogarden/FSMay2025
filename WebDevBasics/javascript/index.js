function Swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}
function Compare(a, b) {
    return a > b ? "a is bigger than b" : b > a ? "b is bigger than a" : "a is equal to b";
}
function IsEven(num) {
    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}
function Search(num_list, key) {
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] === key)
            return `found ${key} at position ${i}`;
    }
    return `${key} not found`;
}
function Maximum(num_list) {
    let max = num_list[0];
    for(let num of num_list) {
        if(num > max)
            max = num;
    }
    return `Maximum number in the list is: ${max}`;
}
/*this is a 
multi-line comment*/
//this is a single line comment
const age = 25;
const name = "John Doe";
const isAdmin = false;
const num_list = [1, 24, 52, -3, -43523, 424542, 76453, -4342, 9, 24, -532, 643]
debugger;
const maximum = Maximum(num_list);
const data = {name: "John Doe", age: 25, isAdmin: false};