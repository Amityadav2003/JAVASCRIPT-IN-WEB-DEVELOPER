let btn = document.querySelector("button");
console.dir(btn);

btn.addEventListener("click", function(){
    console.dir(this.textContent);
    this.style.backgroundColor="blue";
});
