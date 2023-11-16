function clearText() {
    var input = document.getElementById("textInput")

    input.value = ""
}

function changeInput() {
    var input = document.getElementById("changeInput")
    if (input.type === "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
}

function hideShow(){
    var hideshow= document.getElementById("showOrHide")
    if(hideshow.style.display === "none"){
        hideshow.style.display = "block"
    }else{
        hideshow.style.display = "none"
    }
}


function goStop(value) {
    var h1 = document.getElementById("showOrHide")

    h1.style.backgroundColor = value;
}
