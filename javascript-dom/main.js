document.title = "naim pop punk"
const body = document.body;



//append itu untuk mengisi sebuah element
body.append("Hello World");

document.createElement("h1");
const h1 = document.createElement("h1");
h1.textContent = "hallo bro";
body.append(h1);

const programming = document.createElement("p");
programming.innerHTML= "I love programming";
body.append(programming);

const developer = document.createElement("p");
developer.innerText = "I am a developer";
body.append(developer);     

const btn = document.getElementById("btn");
const btn2 = document.querySelector("#btn2");


btn.style.background = "blue";
btn.style.padding = "8px";
btn.style.fontSize = "16px";
btn.style.border = "none";

const defaultText = "click me";
btn.textContent = defaultText;

function clickButton(){
const newText = document.createElement("p");
newText.textContent = "Halo bung apa kabar"
  btn.style.background = "red";
  body.append(newText);

}

function ubahtext(){
    btn.textContent = "jangan di klik";       
}

function kembalikantext(){
    btn.textContent    = defaultText;  
}