function validation() {
var sendButton = document.getElementById("fsubmit")
var email = document.getElementById("einput")
var contrasenia = document.getElementById("cinput")

sendButton.addEventListener("click" , function(e){
    if(email.value == "" || contrasenia.value == "") {
        alert("Los campos no pueden estar vacios")
    }
    else{
    e.preventDefault() 
    alert("The button has been pressed with your data") 
    ajax_val()
}
})

function ajax_val(){
    $.ajax({
        data:{"Email":email.value ,"Contraseña":contrasenia.value},
        url:'/php/index.php',
        type:'post',
        success:function(response){
        var conect = JSON.parse(response);
        console.log(conect);
        alert("Le confirmamos que su Email: " + email.value + " ha sido registrado correctamente")
        clean()
        }
    })
}

function clean() {
    email.value = ""
    contrasenia.value = ""
}
}