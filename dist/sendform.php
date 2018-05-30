<?php $conn = mysqli_connect("localhost","root","","flash-brand-leader");

mysqli_set_charset($conn, 'utf8');

if(mysqli_connect_error())
{
    echo json_encode(array('status' => true, 'message' => "Error de conexion."));
}

if(!empty($_POST["g-recaptcha-response"])) {

    if (!empty($_POST["name"]) && !empty($_POST["last_name"])
        && !empty($_POST["phone"]) && !empty($_POST["email"])
        && !empty($_POST["email_repeat"]) && !empty($_POST["country"])
        && !empty($_POST["state"]) && !empty($_POST["city"])
        && !empty($_POST["district"]) && !empty($_POST["method_contact"])
        && !empty($_POST["referred"])) {
    
        if($_POST["email"] == $_POST["email_repeat"])   
        {
            $name = $_POST["name"];
            $last_name = $_POST["last_name"];
            $phone = $_POST["phone"];
            $email = $_POST["email"];
            $country = $_POST["country"];
            $state = $_POST["state"];
            $city = $_POST["city"];
            $district = $_POST["district"];
            $method_contact = $_POST["method_contact"];
            $referred = $_POST["referred"];
    
            $resultado = mysqli_query($conn, "INSERT INTO preincripcion (name, last_name, phone, email, country, state, city, district, method_contact, referred) VALUES ('$name', '$last_name', '$phone', '$email', '$country', '$state', '$city', '$district', '$method_contact', '$referred')");
    
            if ($resultado)
            {   
                echo json_encode(array('status' => true, 'message' => "Datos guardados correctamente."));
            } 
            else 
            {
                echo json_encode(array('status' => false, 'message' => "Ocurrio un error de base de datos."));
            }
        }
        else
        {
            echo json_encode(array('status' => false, 'message' => "Correos no coinciden."));
        }        
    } 
    else 
    {
        echo json_encode(array('status' => false, 'message' => "Faltan datos obligatorios."));
    }
}else{

    echo json_encode(array('status' => false, 'message' => "reCAPTCHA no valido."));
} ?>