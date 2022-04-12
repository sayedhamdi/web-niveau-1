let addBtn = document.querySelector("#addbtn")
let multBtn = document.querySelector("#multbtn")
let sousBtn = document.querySelector("#sousbtn")
let divBtn = document.querySelector("#divbtn")
let powBtn = document.querySelector("#powbtn")

let result = document.querySelector("#result")


addBtn.onclick = add
multBtn.onclick= mult
sousBtn.onclick = sous
divBtn.onclick = div
powBtn.onclick= pow
function add(){
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x+y)} `
}
function mult(){
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x*y)} `
}
function sous(){
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x-y)} `
}
function div(){
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x/y)} `
}
function pow(){
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x**y)}`
}

let second = 1000
let minute = 60 * second
let time = (3*second)+ (minute * 0)

let t = 0

let timeContainer = document.querySelector("#time")
function fnc1(){
    t+=10
    let s = String(((t % 60)+100)).substring(1,3)
    let m = Math.trunc(t/ 60)
    let h = Math.trunc(t /3600)
    timeContainer.innerHTML = `${h}:${m}:${s}`
}
setInterval(fnc1,second)



// javascript events
