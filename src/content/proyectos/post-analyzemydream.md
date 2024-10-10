---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI - IA - Paypal SDK]"
meta_title: "Iván Luna - Desarrollador de Software - AnalyzeMyDream"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Desarrollo Fullstack", "IA", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso","Autenticación Sin Contraseña de Google", "Autenticación Sin Contraseña de GitHub"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream es una plataforma innovadora que utiliza Astro.js para ofrecer interpretaciones de sueños basadas en inteligencia artificial, ayudando a los usuarios a comprender mejor lo que sueñan. Gracias a su integración con FastAPI, Flask y modelos avanzados de IA, la plataforma proporciona análisis rápidos y detallados. Además, los planes de suscripción ofrecen características mejoradas, como interpretaciones más personalizadas y profundas. También cuenta con una API bien documentada, lo que facilita pruebas exhaustivas y una integración sencilla para los desarrolladores.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://analyzemydream.com', '_blank');">Demo</button>  
</div>

#### Novedades:

<div align="center">

##### Anuncio de Lanzamiento: v1.3.0

###### Fecha de Lanzamiento: 23 de Septiembre, 2024

El lanzamiento de **AnalyzeMyDream v1.3.0** ya está **disponible**. Esta versión presenta mejoras significativas, incluyendo nuevos planes de suscripción, analizadores de sueños avanzados, mejor gestión de pagos a través de PayPal y una interfaz de usuario reestructurada para una mejor experiencia. Para más detalles, consulta las [Notas de Lanzamiento v1.3.0](https://github.com/imprvhub/AnalyzeMyDream/releases/tag/v1.3.0).

</div>

---

- **Características Principales:**
Analizador de Sueños Fast-AI:** Interpretación rápida y general disponible para todos los usuarios.
  <div align="center">
    <img src="https://analyzemydream.com/changelog/changelog-01.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

Características Basadas en Suscripción:**
Analizador de Sueños Advanced-AI:** Ofrece un análisis de sueños más profundo y respaldado por investigaciones académicas.
Analizador de Sueños Custom-AI:** Permite a los usuarios personalizar el análisis de sueños de acuerdo con sus parámetros preferidos.
Analizador de Sueños Comparativo-AI:** Compara dos descripciones de sueños para identificar patrones.
Analizador de Sueños Batch-AI:** Analiza múltiples sueños en una sesión, proporcionando una visión holística.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-02.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>


- **Manejo Seguro de Suscripciones con PayPal:** 
  - La plataforma implementa un sistema de suscripción que incluye tres niveles: Básico, Estándar y Premium, con una opción de prueba gratuita de 7 días para el plan Básico, permitiendo a los usuarios explorar las funcionalidades antes de obtener una subscripción paga.

- **Autenticación Sin Contraseña:** 
  - Se utiliza un mecanismo de inicio de sesión basado en OAuth que permite a los usuarios autenticarse mediante cuentas de Google o GitHub, simplificando el proceso y mejorando la seguridad al evitar la gestión de contraseñas.

- **Gestión de Claves API:** 
  - La arquitectura de backend, construida sobre **Flask** y **FastAPI**, facilita la creación y gestión de claves de API a través de un panel de usuario intuitivo, garantizando un control eficiente sobre el acceso a las funcionalidades de la plataforma.

- **API para Desarrolladores:** 
  - Se ofrece una API RESTful a través de un backend paralelo de **FastAPI** completamente documentada, que incluye capacidades de prueba para desarrolladores. Esta API permite integrar las funciones de análisis de sueños en aplicaciones externas. Las claves de API se generan en función del plan de suscripción seleccionado, proporcionando diferentes niveles de acceso y funcionalidades.



<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-04.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Frontend Responsivo:** 
  - La interfaz de usuario está diseñada con **Astro.js**, asegurando una experiencia fluida y adaptable tanto en dispositivos de escritorio como móviles, lo que optimiza la interacción del usuario con la plataforma.

- **Soporte Multilingüe:** 
  - Se implementa un sistema de interpretaciones de sueños en múltiples idiomas, lo que amplía el alcance de la plataforma y mejora la accesibilidad para una audiencia global.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog_03.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

---

####  Instalación

##### Frontend de Astro.js:
Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
```bash
git clone https://github.com/imprvhub/analyzemydream.git
```
2. Instale las dependencias necesarias:
```bash
npm install
```
3. Antes de ejecutar el proyecto, necesita configurar las variables de entorno en un archivo .env:
```bash
OOGLE_AUTH_CLIENT: El ID de cliente proporcionado por Google para la autenticación OAuth2.
GOOGLE_AUTH_SECRET: El secreto de cliente proporcionado por Google para manejar de forma segura la autenticación del usuario.
GOOGLE_AUTH_CALLBACK_URL: La URL a la que Google redirige a los usuarios después de una autenticación exitosa.
GITHUB_AUTH_CLIENT: El ID de cliente proporcionado por GitHub para la autenticación OAuth2.
GITHUB_AUTH_SECRET: El secreto de cliente proporcionado por GitHub para manejar la autenticación de forma segura.
GITHUB_AUTH_CALLBACK_URL: La URL a la que GitHub redirige a los usuarios después de la autenticación.
DB_URL: La URL para acceder a la base de datos, incluyendo el host y los detalles de conexión.
DB_TOKEN: El token o clave utilizada para autenticar y conectar de forma segura a la base de datos.  
```
4. Ejecute el proyecto:
  ```bash
  npm run dev
  ```
El proyecto debería ser accesible en 'http://localhost:4321'.


#### Conclusión:

##### Aclaración sobre la Disponibilidad del Código

El proyecto **AnalyzeMyDream** fue desarrollado como un encargo para un cliente, lo que implica que no se proporcionarán públicamente las funcionalidades de pago ni el código asociado a ellas, ya que esto no sería una buena práctica profesional. Sin embargo, se compartirá el repositorio y el código del frontend de manera pública, permitiendo a la comunidad contribuir sin comprometer la integridad del proyecto y los acuerdos comerciales.

---

Participar en AnalyzeMyDream ha sido una experiencia clave para mi crecimiento profesional, tanto en términos técnicos como en la resolución de desafíos prácticos. Uno de los hitos más significativos fue la implementación de la autenticación de terceros a través de Google y GitHub utilizando OAuth2. Esta integración, junto con Turso Connect para una gestión segura de la base de datos, permitió a los usuarios iniciar sesión sin contraseña, lo que no solo mejoró la seguridad, sino que también optimizó la experiencia del usuario en la plataforma. Además, la integración del SDK de PayPal para gestionar suscripciones fue crucial. Esto permitió establecer un sistema robusto que facilita a los usuarios la actualización a planes de análisis de sueños avanzados, otorgándoles acceso a percepciones más profundas.

La arquitectura de AnalyzeMyDream, conformada por tres servicios backend distintos, presentó tanto un desafío como una gran oportunidad de aprendizaje. Utilizamos FastAPI para las funcionalidades principales de la API, mientras que un backend separado en Flask se encarga de la generación y gestión de claves API, asignándolas a planes específicos de suscripción en PayPal. Un tercer servicio en Node.js se ocupa de los webhooks de PayPal, creando automáticamente suscripciones y asignando a los usuarios sus respectivas claves API y planes en función de datos de transacción en tiempo real. Esta estrategia de microservicios asegura la escalabilidad del sistema y una gestión eficiente de las distintas funcionalidades.

##### Aprendizajes:
Este proyecto me ha brindado lecciones clave sobre arquitectura de sistemas, autenticación y gestión de suscripciones. La implementación de OAuth2 para Google y GitHub me permitió profundizar en los flujos de autenticación seguros y en cómo integrarlos con Turso Connect, garantizando una gestión de usuarios fluida y una sólida integridad de datos.

Además, la integración del SDK de PayPal me expuso a las complejidades del procesamiento de pagos en tiempo real, la gestión de niveles de suscripción y la generación de claves API. Al gestionar tres sistemas backend diferentes —FastAPI para la API principal, Flask para la generación de claves API y Node.js para manejar los webhooks de PayPal— adquirí una comprensión más profunda de la arquitectura de microservicios y de la distribución eficaz de cargas de trabajo entre los diferentes servicios. Esta configuración modular permitió una clara separación de responsabilidades, haciendo que el sistema fuera más escalable y fácil de mantener.

En definitiva, AnalyzeMyDream ha sido fundamental para fortalecer mis habilidades en desarrollo full-stack, gestión de APIs y autenticación segura, además de profundizar en el procesamiento de pagos en tiempo real y los servicios basados en suscripciones.


<hr>
<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver a Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Volver a Proyectos</button>     
</div>
