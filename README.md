# Sistema de Gestión de Tareas - ASP.NET Core + React + Azure

Este es un sistema de gestión de tareas para la empresa **DVP** que permite a los administradores, supervisores y empleados gestionar tareas y usuarios. Utiliza **ASP.NET Core** para el backend y **React** para el frontend.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno local:

- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js](https://nodejs.org/en/download/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) o [Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/)
- [Visual Studio Code](https://code.visualstudio.com/) o [Visual Studio](https://visualstudio.microsoft.com/)
- [Git](https://git-scm.com/)

## Instalación y Configuración

### Backend (.NET Core)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/<tu-repositorio>.git
2. Navega al directorio del proyecto backend:
   cd PruebaTecnica_Baxk_end
3. Configura la base de datos en el archivo appsettings.json con tu cadena de conexión de Azure SQL o SQL Server local:
     -Esto es opcional, ya que nuesta app/api esta consumiendo sevicios de la nube de AzureSql SERVER
     -Si desea ejecutarlo localmente sigue los sientes pasos
    3.1 - Configura la base de datos en el archivo appsettings.json
   
       "ConnectionStrings": {
          "DefaultConnection": "Server=<tu-servidor>;Database=TaskManagementDB;User Id=<usuario>;Password=<contraseña>;"}
   3.2 - Aplica las migraciones de base de datos (si usas Entity Framework Core):
   
        dotnet ef database update
5. Ejecuta la API:
   
           dotnet run 
                  
 Nota: Si hiciste caso omiso ala configuracion local, solo debes entarar a la siguiente URL, para hacer peticiones en nuestra aplicacion
           https://taskmanagerv1-aca2bkfzbqfrega0.westus-01.azurewebsites.net/api/
7. DISFRUTA DE NUESTRA APP/API

## (React) Conexion a nuestro Frontend (No es necesaio ejecutar el backend en local, ya que esta consumiendo servicios de la nube)
1. Navega al directorio del frontend:

        cd TaskManager.Frontend
3. Instala las dependencias de React:

         npm install
3.Configura el archivo .env para apuntar al backend en localhost:

         REACT_APP_API_URL=http://localhost:5000
4.Inicia la aplicación React:
           
           npm run dev
5.DISFRUTA DE NUESTA APP FRONTED, YA DISPONIBLE CON LOS SERVICIOS DE AZURE

   LOGIN 
   EMAIL ==> admin@gmail.com
   PASSWORD ==> Admin123


## Arquitectura del Sistema
      Backend: ASP.NET Core (REST API con JWT para autenticación)
      Frontend: React con llamadas a la API para CRUD de usuarios y tareas
      Base de datos: Azure SQL con Entity Framework Core para el ORM
      Autenticación: Azure Active Directory (AAD)
      ## Consideraciones Técnicas
      Seguridad: La autenticación se realiza utilizando JWT emitidos por Azure AD. El sistema tiene tres roles: Administrador, Supervisor y Empleado.
      Responsabilidades: Los administradores pueden gestionar usuarios, los supervisores pueden gestionar tareas.
      Persistencia: La base de datos está en Azure SQL, pero puedes usar SQL Server local para desarrollo.

 
 
