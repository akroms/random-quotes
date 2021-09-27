let btn = document.getElementById("btn");
let randomNumber = Math.floor(Math.random() * 10); 

let xhr = new XMLHttpRequest(); 

xhr.open("GET", "https://quote-garden.herokuapp.com/api/v3/quotes", true);

let loadAPI = () => {
    let responseString = xhr.responseText;
    let responseObject = JSON.parse(responseString); 
    console.log(responseObject.data[randomNumber]);
}

xhr.addEventListener("load", loadAPI); 
btn.addEventListener("click", loadAPI);

xhr.send();


 