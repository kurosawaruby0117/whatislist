const playButton=document.querySelector(".button_play");
const result_Box=document.querySelector(".result").querySelectorAll("div");

first=false;

function playValue(){
  console.log("1")
  if(!first){
    result_Box[0].innerText="kasumi";
    result_Box[1].innerText="Ayumu";
    first=true;
  }else{
    first=false;
    result_Box[0].innerText="버튼을 클릭해보세요.";
    result_Box[1].innerText="";
  }
}
console.log(result_Box);
playButton.addEventListener("click",playValue)