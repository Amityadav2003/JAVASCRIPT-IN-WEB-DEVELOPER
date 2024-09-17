let greet="Hello";// global scope
function changeGreet(){
    let greet="Namaste";// function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);// lexical scope
    }
}

console.log(greet);
changeGreet();
