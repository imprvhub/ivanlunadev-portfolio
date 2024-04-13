---
title: "🎧 Fifty List v2 [React y Python] - Plataforma Fullstack de Automatización Musical utilizando la API de Spotify."
meta_title: "Iván Luna - Desarrollador de Software - Fifty List"
description: "Esta es la descripción meta"
date: 2024-01-07T05:00:00Z
image: "/images/assets/fifty-list.png"
categories: ["React.js", "Python","Flask", "Desarrollo Fullstack", "Google Cloud Storage", "PostgreSQL", "Supabase","Despliegue en Vercel"]
tags: ["fifty-list"]
draft: false
---

#### Bienvenid@s a [Fifty List v2 - Obteniendo tus 50 mejores canciones.](https://fiftylist.vercel.app/)
Este proyecto es una plataforma fullstack de automatización musical y muestra una integración perfecta de React y Python. Para obtener información detallada, visite el [Repositorio de Fifty List React en Github](https://github.com/imprvhub/fiftylist-react-v2/) y el [Repositorio de Fifty List Python en Github](https://github.com/imprvhub/fiftylist-python-v2/).

#### Demostración:

[fiftylist.vercel.app](https://fiftylist.vercel.app/)

#### Características Clave:

##### Frontend (React.js)
- Integración de Spotify: recupera tus 50 pistas principales de Spotify dentro de un período de tiempo elegido (1, 6 meses o clásicos de todos los tiempos).
- Exportar a Playlist (Resultados): Genera automáticamente una nueva lista de reproducción en su cuenta de Spotify con estas 50 pistas.
- Exportar a Playlist (recomendaciones): según sus 50 canciones más escuchadas, nuestro motor de recomendaciones sugiere 20 canciones adicionales para agregar a sus listas de reproducción.


##### Backend (Python)
- Flask Framework: actúa como un middleware que interactúa con React.
- Fifty Card: organiza las pistas recuperadas dinámicamente en un nuevo sitio web estático para brindar funcionalidad para compartir en las redes sociales o para acceder más tarde, incluye nombres de artistas, títulos de canciones, nombres de álbumes, fechas de lanzamiento y géneros.

#### Sobre el proyecto

FiftyList es un proyecto exploratorio que profundiza en la colaboración de diferentes lenguajes de programación y API. Está diseñado para:
- Demostrar una comunicación fluida: muestra una comunicación fluida entre el frontend y el backend mediante llamadas API.
- Enfatizar la sinergia del lenguaje: destaca la sinergia entre la destreza del frontend de React y la eficiencia del backend de Python.
- Desafío de presentación de datos: garantiza que los datos complejos se representen en un formato fácil de usar y se transmitan de manera efectiva entre sistemas.

#### Instalación y Uso:

##### Para la Instalación del Frontend:
1. Clonar este proyecto.
 ```bash
git clone https://github.com/imprvhub/fiftylist-react-v2.git
```
2. Navegue al directorio del proyecto (en tu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-react-v2
```
3. Ejecute el siguiente comando para instalar todas las dependencias requeridas.
```bash
npm install
```
4. Reemplace las variables de entorno (`REACT_APP_SCOPES`, `REACT_APP_REDIRECT_URI`, `REACT_APP_CLIENT_SECRET`, `REACT_APP_CLIENT_ID`) con las suyas. Podrá generar estas variables desde el Panel de Desarrolladores de Spotify.
5. Reemplace la variable definida al principio del código en `App.js`:
   `const redirectUri = 'https://fiftylist.vercel.app/callback';` con -> `const redirectUri = "http://localhost:3000/callback";`
   Actualice las URL en las variables de la función `exportShare` de `'https://fiftylistbackend.vercel.app/share'` a `'http://localhost:5000/share'` si su backend de Python está utilizando un puerto diferente.
6. Ejecute el siguiente comando desde tu terminal IDE; esto debería iniciar el frontend en el puerto designado.
```bash
npm start
```

##### Para la Instalación del Backend:
##### Requisitos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

1. Clonar el proyecto. ( https://github.com/imprvhub/fiftylist-python-v2 )
 ```bash
git clone https://github.com/imprvhub/fiftylist-python-v2.git
```

1.2 Navegue al directorio del proyecto (en tu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-python-v2
```
2. Ejecute el siguiente comando para instalar todas las dependencias requeridas.
```bash
pip install -r requirements.txt
```
3. Reemplace la variable definida al principio del código de share.py: `cors = CORS(app, resources={r"/share": {"origins": "https://fiftylist-frontend.vercel.app/"}})` con ->  `cors = CORS(app, resources={r"/share": {"origins": "http://localhost:3000/"}})` (o el puerto que hayas designado para tu frontend).
4. Ejecute `python3 share.py`.
   
IMPORTANTE: Abra ambos proyectos en su IDE para ejecutar el fullstack localmente. Ejecute los comandos para que ambos proyectos funcionen simultáneamente sin problemas.

#### Feedback y soporte:

Su opinión es importante y estoy listo para ayudarle a abordar cualquier consulta o comentario que pueda tener. Sus contribuciones son esenciales para perfeccionar el proyecto y mejorar la experiencia general del usuario. 

No dude en compartir sus conocimientos, recomendaciones o sugerencias para la mejora continua. Si encuentra algún problema o necesita ayuda, [cree un nuevo issue de GitHub](https://github.com/imprvhub/fiftylist-react-v2/issues/new). Asegúrese de proporcionar una descripción detallada de su problema para facilitar una asistencia rápida y precisa.

#### Licencia:
Para obtener más información sobre este tema, lea los [Términos y condiciones](https://fiftylist.vercel.app/html/termsandconditions.html) de este proyecto.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver al Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a Proyectos</button>     
</div>

---
