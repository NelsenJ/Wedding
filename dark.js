document.addEventListener("DOMContentLoaded", () => {
    const buttonDark = document.getElementById("switch");
    const body = document.querySelector("body");
    buttonDark.addEventListener('click', () => {
        body.classList.toggle("dark");
        localStorage.setItem("dark", !darkInfo)
    })
    let darkInfo;
    if(!localStorage.getItem("dark")){
        localStorage.setItem("dark", false);
    }
    darkInfo = JSON.parse(localStorage.getItem("dark"));
    if(darkInfo){
        body.classList.toggle("dark");
    }
})