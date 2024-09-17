function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
      sum+=i;
    }
    return sum;
}
let sum=getSum(100);
console.log(sum);
