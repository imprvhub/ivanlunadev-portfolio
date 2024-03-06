---
title: "🎧 Fifty List - Una Plataforma de Automatización Musical con React/Python."
meta_title: "Iván Luna - Desarrollador de Software - Fifty List"
description: "Esta es la descripción meta"
date: 2024-01-07T05:00:00Z
image: "/images/assets/fifty-list.png"
categories: ["React.js", "Python","API RESTful", "Desarrollo", "Despliegue en Vercel"]
tags: ["fifty-list", "flask", "react"]
draft: false
---

#### Bienvenid@s a [Fifty List - Obteniendo tus 50 mejores canciones.](https://fiftylist.vercel.app/)

Este proyecto es una plataforma de automatización musical y muestra una integración perfecta de React y Python. Para obtener información detallada, visite el [Repositorio de Fifty List React en Github](https://github.com/imprvhub/fiftylist-react/) y el [Repositorio de Fifty List Python en Github](https://github.com/imprvhub/fiftylist-python/).

#### Demostración:

[fiftylist.vercel.app](https://fiftylist.vercel.app/)

#### Características Clave:

##### Frontend (React.js)
- Integración con Spotify: Obtiene tus 50 mejores canciones de Spotify en un período elegido (1 mes, 6 meses o clásicos de todos los tiempos).
- Creación de Listas de Reproducción: Genera automáticamente una nueva lista de reproducción en su cuenta de Spotify con estas 50 canciones.
- Creación de Listas de Recomendaciones: Basado en tus 50 canciones más escuchadas, nuestro motor de recomendaciones sugiere 20 canciones adicionales para agregar a tus listas de reproducción.

##### Backend (Python)
- Potenciado por Flask: Actúa como un intermediario que interactúa entre React y Todoist.
- Gestión de Tareas: Organiza detalles de las canciones en tareas en Todoist, incluyendo nombres de artistas, títulos de canciones, nombres de álbumes, fechas de lanzamiento y géneros.

#### Acerca del Proyecto:

Fifty List es un proyecto exploratorio que profundiza en la colaboración de diferentes lenguajes de programación y API. Está diseñado para:
- Demostrar Comunicación: Muestra una comunicación fluida entre el frontend y el backend mediante llamadas a distintas API.
- Enfatizar la Sinergia de Lenguajes: Destaca la sinergia entre el frontend de React y el backend de Python.
- Desafío de Presentación de Datos: Asegura que los datos complejos se representen de manera amigable para el usuario y se transmitan eficazmente.

#### Instalación y Uso:

##### Para la Instalación del Frontend:
1. Clonar este proyecto.
 ```bash
git clone https://github.com/imprvhub/fiftylist-react.git
```
2. Navegue al directorio del proyecto (en tu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-react
```
3. Ejecute el siguiente comando para instalar todas las dependencias requeridas.
```bash
npm install
```
4. Reemplace las variables de entorno (`REACT_APP_SCOPES`, `REACT_APP_REDIRECT_URI`, `REACT_APP_CLIENT_SECRET`, `REACT_APP_CLIENT_ID`) con las suyas. Podrá generar estas variables desde el Panel de Desarrolladores de Spotify.
5. Reemplace la variable definida al principio del código en `App.js`:
   `const redirectUri = 'https://fiftylist.vercel.app/callback';` con -> `const redirectUri = "http://localhost:3000/callback";`
   Actualice las URL en las variables de la función `exportTodoist` de `'https://fiftylistbackend.vercel.app/todoist'` a `'http://localhost:5000/todoist'` si su backend de Python está utilizando un puerto diferente.
6. Ejecute el siguiente comando desde tu terminal IDE; esto debería iniciar el frontend en el puerto designado.
```bash
npm start
```

##### Para la Instalación del Backend:
##### Requisitos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

1. Clonar el proyecto. ( https://github.com/imprvhub/fiftylist-python )
 ```bash
git clone https://github.com/imprvhub/fiftylist-python.git
```

1.2 Navegue al directorio del proyecto (en tu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-python
```
2. Ejecute el siguiente comando para instalar todas las dependencias requeridas.
```bash
pip install -r requirements.txt
```
3. Reemplace la variable definida al principio del código de todoist.py: `cors = CORS(app, resources={r"/todoist": {"origins": "https://fiftylist-frontend.vercel.app/"}})` con ->  `cors = CORS(app, resources={r"/todoist": {"origins": "http://localhost:3000/"}})` (o el puerto que hayas designado para tu frontend).
4. Ejecute `python3 todoist.py`.
   
IMPORTANTE: Abra ambos proyectos en su IDE para ejecutar el fullstack localmente. Ejecute los comandos para que ambos proyectos funcionen simultáneamente sin problemas.

#### Feedback y soporte:

Su opinión es importante y estoy listo para ayudarle a abordar cualquier consulta o comentario que pueda tener. Sus contribuciones son esenciales para perfeccionar el proyecto y mejorar la experiencia general del usuario. 

No dude en compartir sus conocimientos, recomendaciones o sugerencias para la mejora continua. Si encuentra algún problema o necesita ayuda, [cree un nuevo issue de GitHub](https://github.com/imprvhub/fiftylist-react/issues/new). Asegúrese de proporcionar una descripción detallada de su problema para facilitar una asistencia rápida y precisa.

#### Licencia:
Para obtener más información sobre este tema, lea los [Términos y condiciones](https://fiftylist.vercel.app/html/termsandconditions.html) de este proyecto.

#### Conclusión:

Si bien la funcionalidad para exportar datos de canciones a Todoist puede parecer innecesaria, mi enfoque principal fue lograr una integración efectiva entre múltiples lenguajes de programación y garantizar un feedback eficiente con el backend de Python. Además, vi esta oportunidad como una forma de aprender sobre nuevas API.

##### Planes Futuros:

En el futuro, al igual que actualmente la exportación funciona para Todoist, también me gustaría agregar una exportación a Notion.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver al Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a Proyectos</button>     
</div>

---
