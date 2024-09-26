function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4)
        {
            resolve("Success: data was saved");
        }else{
            reject("Failure: weak connection");
        }
    });
    
}
savetoDb("apna college");

