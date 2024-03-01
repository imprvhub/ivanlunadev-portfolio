---
title: "🪐Nasa Apod Viewer - Una Web App de Python para obtener la Imagen Astronómica del Día (APOD) de la NASA, compartible como tarjeta APOD."
meta_title: "Iván Luna - Desarrollador de Software - Nasa APOD Viewer"
description: "this is meta description"
date: 2024-02-25T05:00:00Z
image: "/images/assets/nasa-apod-viewer.png"
categories: ["Python","SQL","Desarrollo","Despliegue en Vercel"]
tags: ["nasa-apod-viewer","flask"]
draft: false
---

### Bienvenid@s al Proyecto [Nasa Apod Viewer](https://apod-nasa-viewer.vercel.app/).

Una aplicación web Python para obtener la Imagen Astronómica del Día de la NASA, con la funcionalidad de generar tarjetas APOD y compartirlas.

Visite la aplicación en vivo: [apod-nasa-viewer.vercel.app](https://apod-nasa-viewer.vercel.app)

#### Acerca de este proyecto:

Este proyecto es una aplicación web Python construida con Flask. Obtiene la Imagen Astronómica del Día (APOD) de la API de la NASA y proporciona funcionalidades para ver y compartir las imágenes como tarjetas APOD. Para más información puede visitar el [repositorio de Github](https://github.com/imprvhub/nasa-apod-viewer).

#### Características:

- Obtiene la Imagen Astronómica del Día de la API de la NASA.
- Permite a los usuarios explorar imágenes APOD mediante una navegación por calendario o buscando fechas específicas.
- Incluye una opción de 'Shuffle' que selecciona fechas al azar para usuarios que no están seguros de qué fecha explorar.
- Presenta una selección curada de las mejores imágenes APOD desde 1995 (el año de inicio de APOD) hasta la actualidad a través de la sección 'Featured NASA APOD per year'.
- Genera tarjetas APOD compartibles que incluyen la imagen, el título y la descripción recuperados.

#### Tópicos:

- [Acerca de este proyecto](#acerca-de-este-proyecto)
- [Características](#características)
- [Instalación](#instalación)
- [Feedback](#feedback)
- [Licencia](#licencia)
- [Conclusión](#conclusión)

#### Instalación:

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clonar el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/imprvhub/nasa-apod-viewer.git
   ```

2. Instale las dependencias necesarias:

    ```bash
   pip install -r requirements.txt
   ```

3. Configure las variables de entorno. Asegúrese de tener un archivo .env con las siguientes variables:

     ```bash
    NASA_API_KEY: Your NASA API key.
    DATABASE_HOST: Hostname of your database.
    DATABASE_USERNAME: Username for database access.
    DATABASE_PASSWORD: Password for database access.
    DATABASE: Name of the database.
   ```

4. Ejecute la aplicación Flask:
    ```bash
   cd api
   python3 index.py
   ```

#### Feedback:

¡Su opinón es valiosa! Si encuentra algún problema o tiene sugerencias para mejoras, por favor cree un nuevo issue en este [repositorio de Github](https://github.com/imprvhub/nasa-apod-viewer/issues/new).

#### Licencia:

Este proyecto está bajo la Licencia MIT. Consulte el archivo [LICENSE](https://github.com/imprvhub/nasa-apod-viewer/blob/main/LICENSE.md) para más detalles.


#### Conclusión:

##### Logros

- **Gestión Eficiente de Flujos de Trabajo y Scripts Complejos:** Manejar eficientemente el intrincado flujo de trabajo en múltiples ejecuciones de scripts para facilitar la interacción del usuario y ofrecer varias opciones, como la aleatorización, selección de fecha y generación de tarjetas APOD, fue el principal desafío abordado en este proyecto. Asegurar los resultados deseados después de cada ejecución de script e interacción fue particularmente gratificante. Esto requirió orquestar una secuencia de llamadas a la API para actualizar dinámicamente el APOD basado en las interacciones del usuario, cada una sirviendo propósitos distintos. La atención al detalle y las pruebas exhaustivas fueron esenciales para garantizar una funcionalidad perfecta durante todo el proceso.

##### Aprendizajes

- **Mejora de la Interacción Frontend-Backend:** Aprendí sobre una mejor interacción entre los scripts frontend y los procesos backend de Python. Anteriormente, mi enfoque estaba limitado a transmitir datos específicos y procesarlos. Sin embargo, este proyecto requirió establecer un intercambio continuo de datos entre el frontend y el backend debido a los numerosos scripts e interacciones dentro de la aplicación web. Fue una experiencia de aprendizaje valiosa.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver a Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a Proyectos</button>     
</div>

---
