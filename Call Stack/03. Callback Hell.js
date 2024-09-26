function savetoDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4)
    {
        success();
    }else{
        failure();
    }
}

savetoDb("apna college",()=>{
    console.log("success: your data was saved");

    savetoDb("hello world",()=>{
        console.log("success2: your data was saved");
    },()=>{
        console.log("Failure: weak connection data not saved")
    }
);
},

()=>{
    console.log("Failure: weak connection data not saved")
}
);
