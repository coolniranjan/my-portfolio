let v=document.getElementById("clk");
// console.log(v)
v.addEventListener("click",function(){
  console.log("cliked")
  let b=document.getElementById("brger");
  b.style.display="flex";
  
})
let c=document.getElementById("cross");
c.addEventListener("click",function(){
    let b=document.getElementById("brger");
    b.style.display="none"
})