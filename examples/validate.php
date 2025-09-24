<?php
try {
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $response = extract($_POST);
        
        mail(
            "micorreo@misitio.com",
            "consulta web",
            $consulta,
            "to: $email<$name>"
        );
        echo json_encode("response" => "muchas gracias por su consulta")
    }
    else {
        echo json_encode("response" => "Metodo no soportado")
    }
}
catch (error){
    echo json_encode(error);
}
?>
