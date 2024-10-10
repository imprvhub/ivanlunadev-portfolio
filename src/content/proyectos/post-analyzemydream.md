---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI - IA - Paypal SDK]"
meta_title: "Iván Luna - Desarrollador de Software - AnalyzeMyDream"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Desarrollo Fullstack", "IA", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso","Autenticación Sin Contraseña de Google", "Autenticación Sin Contraseña de GitHub"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream es una plataforma innovadora construida utilizando Astro.js, que ofrece interpretaciones de sueños impulsadas por IA para ayudar a los usuarios a obtener una comprensión más profunda de sus sueños. La plataforma se integra perfectamente con FastAPI, Flask y modelos avanzados de IA, proporcionando análisis rápidos y detallados. Los planes de suscripción dan acceso a características mejoradas, incluidas interpretaciones de sueños más personalizadas y en profundidad. También cuenta con una API completamente documentada, que garantiza pruebas integrales y una integración fluida para desarrolladores.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://analyzemydream.com', '_blank');">Demostración en Vivo</button>  
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
Analizador de Sueños Advanced-AI:** Ofrece un análisis de sueños más profundo y respaldado por investigaciones.
Analizador de Sueños Custom-AI:** Permite a los usuarios personalizar el análisis de sueños de acuerdo con sus parámetros preferidos.
Analizador de Sueños Comparativo-AI:** Compara dos descripciones de sueños para identificar patrones.
Analizador de Sueños Batch-AI:** Analiza múltiples sueños en una sesión, proporcionando una visión holística.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-02.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Manejo Seguro de Suscripciones por PayPal:** Incluye planes de suscripción Básico, Estándar y Premium con una opción de prueba de 7 días para el plan Básico.
- **Autenticación Sin Contraseña:** Los usuarios pueden iniciar sesión usando cuentas de Google o GitHub.
- **Gestión de Claves API:** Impulsada por un backend basado en Flask para crear y gestionar claves de API a través del panel del usuario.
- **API para Desarrolladores:** Una API completa con documentación detallada y capacidades de prueba, permitiendo a los desarrolladores integrar las funciones de análisis de sueños de la plataforma en sus propias aplicaciones. Las claves de API se generan según los planes de suscripción, con diferentes niveles desbloqueando funcionalidades específicas.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-04.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Frontend Responsivo:** Construido con Astro.js para una experiencia de usuario fluida en escritorio y móvil.
- **Soporte Multilingüe:** Proporcionando interpretaciones de sueños en varios idiomas para alcanzar una audiencia más amplia.

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
