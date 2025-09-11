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