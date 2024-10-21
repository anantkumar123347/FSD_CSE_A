/*console.log("Hello Anant")
let a=10
if(a>10)
{
    a=20
console.log(a)
}
console.log(typeof(a))*/
/*
let a=(x,y)=>{
    console.log("hello Anant")
    return x+y
}
let n=a(10,20)
console.log(n)*/
/*function selectlang(clk)
{
    if(clk=="c")
    {
        return function  comp()
{
    return "c"
}
    }
else
{
    return function jomp()
{
    return "java"
}
}
    console.log("language= "+clk)
}
selectlang("c")*/
/*
console.dir(document);
const div=document.getElementsByClassName("parent");
console.log(div);
div[0].innerHTML = "<h2 style='color: red;'>ABES EC</h2>";
const img=document.createElement('img');
img.src="download (3).jpeg";
console.log(img);
div[0].appendChild(img)
const display=document.getElementById("disp")
function getdata()
{
    console.log("ok")
    display.innerHTML="<h3 style=color:red;></h3>"
}
*/
/*
const promise1=new Promise((resolve,reject)=>{
    let a=Math.floor(Math.random()*200 +1);
    if(a>100&&a<200)
    {
resolve("value of a is resolved");
    }
    else{
reject("a is rejected");
    }
});
promise1.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)});*/
const promise1=new Promise((resolve,reject)=>{
    let a=Math.floor(Math.random()*200 +1);
    if(a>100&&a<200)
    {
resolve("value of a is resolved");
    }
    else{
reject("a is rejected");
    }
});
promise1.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)});