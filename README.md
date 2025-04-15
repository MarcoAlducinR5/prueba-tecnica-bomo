# Prueba Tecnica: Aplicacion FullStack

#### 📌 Objetivo

Durante esta prueba técnica deberás construir una aplicación fullstack que incluye un API REST y una interfaz gráfica que permita gestionar usuarios. Los usuarios deben poder autenticarse con JWT (JSON Web Token) y tener roles de Administrador y Super Administrador; esto para aplicar para un puesto como Desarrollo Frontend para la empresa Boma Coaching &amp; Analysis.

#### 🏗 Descripción del Proyecto

Este repositorio esta dividido en 2 partes:

- api: Carpeta donde se encuentra implementado la conexion via PHP a la base de datos realizada en MySQL.

##### 🔧 Pasos para ejecutar la base de datos

1. Para la realizacion de esta prueba, es necesario que de forma local se use MAMP (para Mac).
2. Acto seguido, descargue la carpeta "api" y lo ubique en la carpeta "htdocs", ejecute el servidor MAMP y al iniciar, por defecto se le iniciara su servidor localhost.
3. Para importar la base de datos MySQL, use el archivo api/prueba_tecnica_boma.sql e importelo en su gestor de base de datos utilizando ***phpMyAdmin5***

> 👌 **NOTA**: Verifique el puerto en el cual se ejecuta su servidor local, ya que puede variar dependiento de la configuracion que se le dio a MAMP tanto para Apache como para MySQL, para mas informacion, visite el sigueinte 👉[enlace](https://documentation.mamp.info/en/MAMP-PRO-Mac/Settings/Server/Ports/index.html "enlace").

Y de esa forma, podra usar de manera satisfactoria los enpoints propios para el consumo de servicios API REST para el proyecto.

- front: Carpeta donde se encuentra implementado la parte visual del proyecto realizado en React JS.
