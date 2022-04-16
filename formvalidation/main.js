console.log("test")

let form = document.querySelector("#form"); 

form.onsubmit = function(event){
    event.preventDefault();
    // nom lezmou ikoun >= 3 lettre
    let nom = document.querySelector("#nom");
    if (nom.value.length < 3){
        nom.style.border="1px solid red"
        document.querySelector("#nom-error").innerHTML = "le nom doit contenir au moins 3 lettres";
    }else{
        nom.style.border="1px solid black"
        document.querySelector("#nom-error").innerHTML = "";

    }


    console.log()
}

function validerEmail(){

}