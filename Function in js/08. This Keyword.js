const Student={
    name:"Amit",
    age:21,
    eng:95,
    math:97,
    phy:98,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    },
    
};

Student.getAvg();
