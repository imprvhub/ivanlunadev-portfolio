---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI - IA - Paypal SDK]"
meta_title: "AnalyzeMyDream - Plataforma de Análisis de Sueños"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Desarrollo Fullstack", "IA", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso", "Autenticación Passwordless"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream es una plataforma innovadora que utiliza Astro.js para ofrecer interpretaciones de sueños basadas en inteligencia artificial, ayudando a los usuarios a comprender mejor lo que sueñan. Gracias a su integración con FastAPI, Flask y modelos avanzados de IA, la plataforma proporciona análisis rápidos y detallados. Además, los planes de suscripción ofrecen características mejoradas, como interpretaciones más personalizadas y elaboradas. También cuenta con una API bien documentada, lo que facilita pruebas exhaustivas y una integración sencilla para los desarrolladores.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://es.analyzemydream.com', '_blank');">Demo</button>  
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/analyzemydream/', '_blank');">Código GitHub del Frontend</button>
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://es.analyzemydream.com', '_blank');">API docs</button>
</div>

#### Novedades:

<div align="center">

##### Anuncio de Lanzamiento: v1.3.0

###### Fecha de Lanzamiento: 23 de Septiembre, 2024

El lanzamiento de **AnalyzeMyDream v1.3.0** ya está **disponible**. Esta versión presenta mejoras significativas, incluyendo nuevos planes de suscripción, analizadores de sueños avanzados, mejor gestión de pagos a través de PayPal y una interfaz de usuario reestructurada para una mejor experiencia. Para más detalles, consultar las [Notas de Lanzamiento v1.3.0](https://github.com/imprvhub/AnalyzeMyDream/releases/tag/v1.3.0).

</div>

---

- **Funcionalidades Gratuitas:**
  **Artículos de Interpretaciónes de sueños:** Los mismos están basados en contenido bibliográfico acádemico.
  **Fast-AI Dream Analyzer:** Interpretación rápida y general disponible para todos los usuarios.
  <div align="center">
    <img src="https://analyzemydream.com/changelog/changelog-01.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
  </div>

- **Funcionalidades con Suscripción:**
  - **Advanced-AI Dream Analyzer:** Ofrece un análisis de sueños más elaborado y respaldado por bibliografía académicas.
  - **Custom Dream Analyzer:** Permite a los usuarios personalizar el análisis de sueños de acuerdo con sus parámetros personalizados.
  - **Comparative Dream Analyzer:** Compara dos descripciones de sueños para identificar patrones.
  - **Batch-AI Dream Analyzer:** Analiza múltiples sueños en una solicitud, proporcionando una devolución interpretativa para cada sueño.

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

1. Clonar el repositorio:
```bash
git clone https://github.com/imprvhub/analyzemydream.git
```
2. Instalar las dependencias necesarias:
```bash
npm install
```
3. Antes de ejecutar el proyecto hay que configurar las variables de entorno en un archivo .env:
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
4. Ejecutar el proyecto:
  ```bash
  npm run dev
  ```
El proyecto debería ser accesible en 'http://localhost:4321'.


#### Conclusión:

El proyecto **AnalyzeMyDream** fue desarrollado para un cliente, por lo que no se compartirá públicamente el código que esté directamente relacionado con los aspectos que generan valor comercial para el cliente, en línea con las mejores prácticas profesionales y los acuerdos establecidos. No obstante, con el objetivo de fomentar la colaboración de la comunidad, el código correspondiente al frontend se pondrá a disposición en un repositorio público, permitiendo contribuciones que no comprometan la integridad del proyecto ni los compromisos comerciales.

La participación en AnalyzeMyDream representa una experiencia clave para el crecimiento profesional en desarrollo backend, tanto en términos técnicos como en la resolución de desafíos prácticos. Uno de los hitos más significativos fue la implementación de la autenticación de terceros a través de Google y GitHub utilizando OAuth2. Esta integración, junto con Turso Connect para una gestión segura de la base de datos, permitió inicios de sesión sin contraseña, lo que no solo mejoró la seguridad, sino que también optimizó la experiencia de usuario en la plataforma. Además, la integración del SDK de PayPal para gestionar suscripciones fue crucial. Esto permitió establecer un sistema robusto que facilita la actualización a planes de análisis de sueños avanzados, otorgando acceso a percepciones más profundas.

La arquitectura de AnalyzeMyDream, conformada por tres servicios backend distintos, presentó tanto un desafío como una gran oportunidad de aprendizaje. Se utilizó FastAPI para las funcionalidades principales de la API, mientras que un backend separado en Flask se encarga de la generación y gestión de claves API, asignándolas a planes específicos de suscripción en PayPal. Un tercer servicio en Node.js se ocupa de los webhooks de PayPal, creando automáticamente suscripciones y asignando las respectivas claves API y planes en función de datos de transacción en tiempo real. Esta estrategia de microservicios asegura la escalabilidad del sistema y una gestión eficiente de las distintas funcionalidades.

##### Aprendizajes:
Este proyecto proporciona lecciones clave sobre arquitectura de sistemas, autenticación y gestión de suscripciones. La implementación de OAuth2 para Google y GitHub permite profundizar en los flujos de autenticación seguros y en cómo integrarlos con Turso Connect, garantizando una gestión de usuarios fluida y una sólida integridad de datos.

Además, la integración del SDK de PayPal expone las complejidades del procesamiento de pagos en tiempo real, la gestión de niveles de suscripción y la generación de claves API. La gestión de tres sistemas backend diferentes —FastAPI para la API principal, Flask para la generación de claves API y Node.js para manejar los webhooks de PayPal— proporciona una comprensión más profunda de la arquitectura de microservicios y de la distribución eficaz de cargas de trabajo entre los diferentes servicios. Esta configuración modular permite una clara separación de responsabilidades, haciendo que el sistema sea más escalable y fácil de mantener.

En definitiva, AnalyzeMyDream es fundamental para fortalecer habilidades en desarrollo full-stack, gestión de APIs y autenticación segura, además de profundizar en el procesamiento de pagos en tiempo real y los servicios basados en suscripciones.

<hr>
<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver al Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a los Proyectos</button>     
</div>