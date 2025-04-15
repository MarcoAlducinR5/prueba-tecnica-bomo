<?php
    $pdo = null;
    $host = 'localhost';
    $user = 'root';
    $password = 'root';
    $bd = 'prueba_tecnica_boma';

    function conectar(){
        try{
            $GLOBALS['pdo'] = new PDO("mysql:host=".$GLOBALS['host'].";dbname=".$GLOBALS['bd']."", $GLOBALS['user'], $GLOBALS['password']);
            $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e){
            print "Error!: No se pudo conectar a la bd ".$bd."<br/>";
            print "\nError!: ".$e."<br/>";
            die();
        }
    }

    function desconectar(){
        $GLOBALS['pdo']= null;
    }
    
    function metodoGet($query){
        try{
            conectar();
            $sentencia = $GLOBALS['pdo']->prepare($query);
            $sentencia->setFetchMode(PDO::FETCH_ASSOC);
            $sentencia->execute();
            desconectar();
            return $sentencia;
        }
        catch(PDOException $e){
            die("Error!: ".$e);
        }
    }
?>