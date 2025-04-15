<?php
    include 'bd/BD.php';

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['email'])){
            $query = 'select * from lista_usuarios where email='.$_GET['email'].'';
            $resultado = metodoGet($query);
            echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
        }
        else{
            $query = 'select * from lista_usuarios where id_tipo_usuario != 1';
            $resultado = metodoGet($query);
            echo json_encode($resultado->fetchAll());
        }

        header('HTTP/1.1 200 OK');
        exit();
    }

?>