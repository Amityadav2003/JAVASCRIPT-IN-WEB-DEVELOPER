let id=setInterval(()=>{
    console.log("Hello Friends");
},2000);

setTimeout(()=>{
    clearInterval(id);
}, 10000);
