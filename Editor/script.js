let code = document.getElementById("code");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick=()=>{
    result.innerHTML= code.value;
    localStorage.setItem("RESULT",code.value);
};

remove.onclick=()=>{
    result.innerHTML="";

};

onload=()=>{
    code.value= localStorage.getItem("RESULT");
    result.innerHTML= code.value;
};