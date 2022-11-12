<?php

class usuario {
    public $email;
    public $contrasenia;

function __construct($email, $contrasenia){
    $this->email = $email;
    $this->contrasenia = $contrasenia;
}
}

class usuario_return {
    public $usuario;
    public $status;

    function __construct($usuario, $status) {
        $this->usuario = $usuario;
        $this->status = $status;
    }
}


$StRet=0;

$usuario1 = new usuario($_POST["Email"], $_POST["Contraseña"]);

if($usuario1->email == "" || $usuario1->contrasenia == "" ) {
    $StRet = new usuario_return($usuario1, "ERROR");
}
if($usuario1->email != ""  || $usuario1->contrasenia != "" ){

    $StRet = new usuario_return($usuario1, "OK");
}
echo json_encode ($StRet);
?>