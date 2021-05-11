let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");
 
textarea.addEventListener("input",()=>{
    sonuc();
});

select.addEventListener("change",()=>{
  sonuc();
});


function sonuc(){
    if(select.value == "decode"){
    result.value = window.atob(textarea.value);
    }else{
    result.value = window.btoa(textarea.value);
  }
}
