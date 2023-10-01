const submit = document.getElementById("submit")
let message=document.getElementById("message")
const inputEl=document.getElementsByClassName("input-el")
submit.addEventListener("click",function(){
    message.textContent="it was nice knowing you!"
    inputEl.value=""
})