let boldBTN = document.querySelector("#bold")

let colorBTN = document.querySelector("#color")
let text = document.querySelector("#text")

boldBTN.onclick = function (){
    text.style.fontWeight = "bold"
}
let underlineBTN = document.querySelector("#underline")

underlineBTN.onclick = function (){
    console.log(text.style.fontStyle)
    text.style.textDecoration = "underline"
}
colorBTN.onchange = function (){
    text.style.color = colorBTN.value   
}


let fontSizeBTN = document.querySelector("#fontSize")

fontSizeBTN.onchange = function (){
    text.style.fontSize = fontSizeBTN.value
}