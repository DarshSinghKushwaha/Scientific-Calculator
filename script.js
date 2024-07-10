// let string="";
let input=document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerText=='AC') {
            input.value="";
        }
        else if (e.target.innerText=='=') {
            input.value=eval(input.value);
        }
        // console.log(e.target)
        else{
        input.value+=e.target.innerText;
        }
    })
})
function sin() {
    input.value=Math.sin(input.value);
}
function cos() {
    input.value=Math.cos(input.value);
}
function tan() {
    input.value=Math.tan(input.value);
}
function pow(){
    input.value=Math.pow(input.value,2);
}
function sqrt(){
    input.value=Math.sqrt(input.value,2);
}
function log(){
    input.value=Math.log(input.value,2);
}
function pi(){
    input.value=3.14159265359;
}
function e(){
    input.value=2.7182818246;
}
function backsp(){
    input.value=input.value.slice(0,-1);
}
function fact() {
    var i,num=input.value,f=1;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    input.value=f;
}