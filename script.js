/*Color changer*/

const Body = document.body;
let changeToWhite = document.getElementById("white-btn");
    changeToWhite.addEventListener("click", function() {
        changeBodyColor("white");
    });
         
let changeToBlue = document.getElementById("blue-btn");
    changeToBlue.addEventListener("click", function() {
        changeBodyColor("lightblue");
    });

 let changeToPink = document.getElementById("pink-btn");
    changeToPink.addEventListener("click",function(){
        changeBodyColor("pink");
    })

function changeBodyColor(newColor) {
    Body.style.backgroundColor = newColor;
    }
/* stop here||||||||||||||||||||||||||||||||||||||||||||||||*/

/*notification*/
function showNotification(){
    const notification = new Notification ("Hi! This is my notification!",{
    body: "This is my notification"
    });
}
console.log(Notification.permission);

if(Notification.permission === "granted"){
    showNotification();
}else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission => {
        if(Notification.permission === "granted"){
            showNotification();
        }
    });
}  
/*stop here ||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*Event handler*/
const fName = document.getElementById("first");
const Greet = document.getElementById("greeting");
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name = fName.value;
    greeting.textContent = `Hello, ${name}!,You are my only viewer! I welcome you with my 100% welcome!`;
});
/*stop here |||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*conditional*/
const target = 18;
const age = document.getElementById('age');
const result = document.getElementById('result');

age.addEventListener('keydown',(event)=>{
    if (event.keyCode === 13){
        const guess = parseInt(age.value);
        if(guess>target){
            result.textContent = "Haha, wrong! I'm younger than that."
        }else if(guess<target){
            result.textContent = "Haha, wrong! I'm older than that.";
        }
        else{
            result.textContent = "Yes! That's my age!";
        }
    }
});
/*stop here||||||||||||||||||||||||||||||||||||||||||||||||||||||*/