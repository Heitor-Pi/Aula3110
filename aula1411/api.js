const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
    console.log(data);
})