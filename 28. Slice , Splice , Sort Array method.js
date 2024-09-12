let color=["red","blue","black","yellow"];
// Slice method
console.log(color);
let index=color.slice(2);
let index1=color.slice(0,3);
let index2=color.slice(-2);
console.log(index);
console.log(index1);
console.log(index2);

//Splice method
let arr=color.splice(3);
let arr1=color.splice(0,1);
let arr2=color.splice(0,1,"pink","gray");
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(color);

//Sort method
let sqr=color.sort();
console.log(sqr);
