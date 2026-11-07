// const paragrafo = document.getElementById("paragrafo")
// const paragrafo2 = document.getElementById("paragrafo2")
// const paragrafo3 = document.getElementById("paragrafo3")
// const paragrafo4 = document.getElementById("paragrafo4")

// console.log(paragrafo);
// console.log(paragrafo2);
// console.log(paragrafo3);
// console.log(paragrafo4);

// const title = document.getElementById("title")

// title.innerText = "Troquei"
// const title2 = document.getElementById("title2")

// title2.innerText = "Medina"
// title2.style.color = "green"
// title2.style.font = "90px"
// title2.style.backgroundColor = "aqua"

// const body = document.getElementById("body")
// body.style.fontFamily = "Arial"
// body.style.font = "120px"
// body.style.backgroundColor = "red"

const paragrafo = document.getElementById("paragrafo")
const btn =document.getElementById("btn")

btn.addEventListener("click", function() {
    paragrafo.innerText = "Deu bom!"
})