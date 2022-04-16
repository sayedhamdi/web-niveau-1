let second = 1000
let minute = 60 * second
let time = (3*second)+ (minute * 0)

let t = 0
let timeContainer = document.querySelector("#time")

function increment(){
        t+=1
        let s = String(((t % 60)+100)).substring(1,3)
        let m = String(Math.trunc(t/ 60)+100).substring(1,3)
        let h = String(Math.trunc(t /3600)+100).substring(1,3)
        timeContainer.innerHTML = `${h}:${m}:${s}`
    
}

let startBTN = document.querySelector("#start")
let interval 
startBTN.onclick = function (){
    
    clearInterval(interval)
    interval = setInterval(increment,second)
}
let stopBTN = document.querySelector("#stop")
stopBTN.onclick = function (){
    isIncrementing =false
    clearInterval(interval)
    sajelTime()
}
let resetBTN = document.querySelector("#reset")
resetBTN.onclick = function (){
    t=0
    timeContainer.innerHTML = `00:00:00`
    clearInterval(interval)
}


let tourBTN = document.querySelector("#tour")

tourBTN.onclick = function (){
    //kol manenzel al button tour 
    // saajali el innerHTML el button tour
    sajelTime()
}


function sajelTime(){
    let tours = document.querySelector("#tours")
    let li = document.createElement("li")
    li.innerText = timeContainer.innerText
    tours.appendChild(li)
}

