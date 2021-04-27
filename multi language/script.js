var arabic = document.getElementById("arabic");
var turkish = document.getElementById("turkish");
var title = document.getElementById("isim")
var welcome = document.getElementById("welcome");
var about = document.getElementById("about");
var aboutText = document.getElementById("about-text");

arabic.onclick= ()=>{
    dil("arabic");
    localStorage.setItem("lang","arabic");

};

turkish.onclick= ()=>{
    dil("turkish");
    localStorage.setItem("lang","turkish");

};

onload=()=>{
   dil(localStorage.getItem("lang"));
};

function dil(TRAr){
    if(TRAr === "arabic"){
      title.innerHTML="مبرمجة";
      welcome.innerHTML="أهلا وسهلا";
      aboutText.innerHTML="مرحبا أسمي ريناد ,انا أدرس برمجة الحاسوب";
      about.innerHTML="حول ";

      
      


    }else if(TRAr === "turkish"){
        title.innerHTML = "Programci";
        welcome.innerHTML=" Hosgeldiniz!";
       aboutText.innerHTML="Merhaba Benim Adim Rinad, ben bilgisayar programciligi okuyorum";
       about.innerHTML="Hakkimizda";

    }
    
}