//Take one or multiple function arguments

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}

multipleGreet(greet,5);

//return a function

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Wrong request");
    }
}
let request="odd";
let func=oddEvenTest(request);
func(15);
