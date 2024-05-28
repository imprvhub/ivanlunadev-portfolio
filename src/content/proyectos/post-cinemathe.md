---
title: "🎬 Cinemathe [Vue.js - Django Rest Framework]"
meta_title: "Iván Luna - Desarrollador de Software - Cinemathe"
date: 2024-05-20T05:00:00Z
image: "/images/assets/cinemathe.png"
categories: ["Vue.js","Django Rest Framework", "Python", "Nuxt.js", "Desarrollo Fullstack","Autenticación","Implementaciones","Despliegue en Netlify","Despliegue en Vercel", "Supabase"]
tags: ["cinemathe"]
draft: false
---

Una aplicación fullstack desarrollada con Vue.js y Django Rest Framework. Ofrece una autenticación fluida para guardar favoritos, brinda información técnica detallada sobre películas y series de televisión, junto con reseñas integradas, y facilita compartir contenido en redes sociales.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap; ">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://cinemathe.space/', '_blank');">Demo</button>  
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/cinemathe/', '_blank');">Github Vuejs (Repositorio)</button>   
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/cinemathe-drf/', '_blank');">Github DRF (Repositorio)</button>   
</div>
<style>
@media screen and (max-width: 530px) {
  .btn {
    margin-right: 0;
    margin-bottom: 10px;
    max-width: 250px; 
  }
}
</style>

#### Lo nuevo:

- **Integración Backend de Python:** Cinemathe integra un backend desde Django Rest Framework para el registro y la autenticación de los usuarios, garantizando una seguridad mejorada y control de acceso a través del Panel de Administración de Django.

<div align="center">
  <img src="/images/assets/guide1.gif" alt="Guía GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Gestión Integral de Perfiles de Usuario:** Los usuarios tienen un control completo sobre sus perfiles, con la capacidad de guardar sus películas y series de televisión favoritas, personalizar sus preferencias de entretenimiento y acceder fácilmente a la configuración de la cuenta. La inclusión de un menú de perfil de usuario tanto en la página principal como en la de perfil mejora aún más la interacción del usuario, proporcionando un acceso sencillo a las opciones de autenticación y personalización de la cuenta, incluye los cambios de avatar.

<div align="center">
  <img src="/images/assets/guide2.gif" alt="Guía GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>


<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; margin-left: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Compartir en Redes Sociales:</h4>
    <p style="max-width: 400px;">Cinemathe ahora permite a los usuarios compartir sus películas y series de TV favoritas en varias redes sociales mediante un modal personalizado e intuitivo.</p>
    <div>
      <img src="/images/assets/guide3.gif" alt="Guía GIF" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

  <div style="flex: 1; margin-left: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Reseñas de Usuarios:</h4>
    <p style="max-width: 400px;">Los usuarios pueden explorar reseñas sobre películas y series de televisión específicas, facilitando la participación comunitaria y proporcionando comentarios de otros usuarios.</p>
    <div>
      <img src="/images/assets/guide5.png" alt="Guía GIF" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

</div>
<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; margin-right: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Opciones de Proveedores:</h4>
    <p style="max-width: 400px;">Con múltiples proveedores disponibles para cada película y serie de TV, los usuarios ahora podrán visualizar las plataformas de transmisión donde pueden acceder a cada contenido específico.</p>
    <div>
      <img src="/images/assets/guide4.gif" alt="Guía GIF" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

  <div style="flex: 1; margin-right: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Explorando por Categorías:</h4>
    <p style="max-width: 400px;">Nuevos carruseles intuitivos para diferentes categorías de películas y series de televisión, Cinemathe eleva la experiencia de navegación y simplifica el descubrimiento de contenido para los usuarios.</p>
    <div>
      <img src="/images/assets/guide6.png" alt="Guía PNG" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

</div>
</div>


#### Instalación

##### Frontend de Vue.js:
Para ejecutar este proyecto localmente, siga estos pasos:

1. Clone el repositorio:
```bash
git clone https://github.com/imprvhub/cinemathe.git
```
2. Instale las dependencias necesarias:
```bash
yarn install
```
3. Antes de ejecutar el proyecto, usted necesita configurar sus variables de entorno en un archivo '.env'.

```bash
FRONTEND_URL=<URL donde su frontend se va a alojar, por ej: 'http://localhost:3000' o su dominio personalizado>
API_KEY=<Ingrese la api key de TMDB>
SUPABASE_URL=<Ingrese una URL de su database, por ej, la Supabase database URL>
SUPABASE_ANON_KEY=<Ingrese la anonymous key de su database, por ej. su Supabase anonymous key>    
```
  Por defecto, la base de datos de DRF está configurada para Supabase. De todos modos usted puede usar otra base de datos si lo prefiere. Simplemente reemplace 'DATABASE_URL' y 'DATABASE_ANON_KEY' con las variables de entorno necesarias para la configuración de su base de datos.

4. Ejecute el proyecto:
```bash
yarn dev
```
El proyecto ahora deberia ser accesible, por ej., en 'http://localhost:3000'

<hr>

##### Django Rest Framework Backend:

Para configurar el backend de Django Rest Framework para Cinemathe, siga estos pasos:

##### Requisitos previos:
[Python 3.9](https://www.python.org/downloads/release/python-390/)

1. Clone el repositorio backend:
```bash
git clone https://github.com/imprvhub/cinemathe-drf.git
```

2. Instale dependencias necesarias:
Navegue al directorio del proyecto principal e instale las mismas mediante 'pip'.

```bash
cd cinemathe-drf
pip install -r requirements.txt
```
3. Configure sus variables de entorno.
Cree un archivo .env en el directorio raíz del proyecto y defina las siguientes variables:
```bash
DB_NAME=<Credenciales de su base de datos>
DB_PASSWORD=<Credenciales de su base de datos>
DB_HOST=<Ingrese el host de su base de datos, e.g., localhost>
DB_PORT=<Ingrese el puerto de su base de datos.>
```

4. Aplique las migraciones:
```bash
python manage.py collectstatic
```

5. Ejecute el collectstatic para cuando el proyecto sea desplegado (esto preparará los archivos estáticos como css, js, etc. para el panel de Administración de Django):
```bash
python manage.py collectstatic
```

6. Ejecute el servidor:
```bash
python manage.py runserver
```

#### Feedback:
¡Su opinión es importante! Si usted tiene alguna sugerencia para mejoras, cree un nuevo issue en el [Repositorio de Github](https://github.com/imprvhub/cinemathe/issues/new).

##### Correcciones Pendientes para v1.1.2:
- **Bug al Agregar el Primer Favorito para Nuevos Usuarios:**
  Este problema surge en el primer clic al agregar un favorito para una cuenta recién creada. El primer clic no se registra porque el componente no actualiza el estado al mapear '0' objetos en el JSON. Sin embargo, en el segundo clic, el botón 'Agregar a Favoritos' funciona correctamente y este problema no vuelve a ocurrir para ese usuario. Este inconveniente solo se presenta en el primer clic para la adición del primer favorito. Se requiere abordar este problema analizando cada función del componente para establecer una solución efectiva.

- **Autocompletado en la Página de Inicio de Sesión:**
  El autocompletado en dispositivos móviles a veces provoca una redirección a la página principal. Se debe revisar la configuración del formulario para evitar esta redirección y permitir que los usuarios continúen con el flujo de autenticación.

- ~~**Botón de inicio de sesión como botón de carga**: 
  El botón de inicio de sesión será un 'botón de carga' de modo que cuando los usuarios hagan clic en él, se mostrará un cargador hasta que se complete el proceso de autenticación.~~ [Cambios aplicados.](https://github.com/imprvhub/cinemathe/commit/ec387757026cc216a6efc275e1e49627657a8525)

- ~~**Representación de cuadrícula de películas y programas de televisión en el perfil**: 
  Actualmente, hay dos paginaciones separadas para películas y programas de televisión en el perfil. En el futuro, estas paginaciones serán reemplazadas por una opción de filtrado que permitirá a los usuarios filtrar por 'Todos - Películas - Programas de TV', lo que dará como resultado una paginación única.~~ [Cambios aplicados.](https://github.com/imprvhub/cinemathe/commit/720f5edd9206400be32c7a20017022706f01ce39)

- ~~**Consistencia en los Puntajes de Cada Calificación:**
  Refactorizar los puntajes de calificación para películas y programas de televisión en los carruseles de la página principal a dos decimales.~~ [Cambios aplicados.](https://github.com/imprvhub/cinemathe/commit/f3251b04abb9a986559aa3f8db35a78431c6ead7)

- **Mejoras de Estilo:**
  - Revisar y estandarizar tamaños de fuente y estilos en todos los componentes para garantizar una apariencia consistente y cohesionada en toda la aplicación.
  - Revisar el efecto de hover en los menús de perfil de usuario; el border-radius del botón está causando que el efecto de hover se desalinee.

- ~~**UI Responsiva:**
  - Ajustar el diseño del modal del avatar para que quepa dentro de la sección en la página de 'ajustes'.
  - Alinear correctamente el texto del párrafo en el modal de confirmación después del registro del usuario.
  - Modificar el ancho del modal de 'compartir' para pantallas más grandes que 800px de ancho para mejorar la responsividad.~~ [Cambios aplicados.](https://github.com/imprvhub/cinemathe/commit/7669bcbdd2b2de83de2a8d1cdaa62450cb2f8938)

#### Atribuciones:

La inspiración base de este proyecto es derivada del repositorio [TasteJS](https://github.com/tastejs/nuxt-movies). 

Los datos de las películas y series de TV son proporcionadas por [TMDB](https://www.themoviedb.org/), mientras que la información de proveedores de streaming y plataformas son obtenidas desde [JustWatch](https://www.justwatch.com/).

Para más detalles, por favor lea los [Términos y Condiciones](https://cinemathe.space/terms/).

#### Conclusión:

##### Logros:
- **Integración Sinérgica:** Integré con éxito Vue.js y Django Rest Framework, dos tecnologías muy rara vez combinadas, lo que representó un desafío intrigante para mí. A pesar de mi experiencia previa con este framework, combinarlo con Vue.js requirió de mucha cautela y adaptabilidad para lograr una sinergía entre estos dos frameworks.

- **Integración Simplificada de UX/UI y Gestión de Datos:** Con éxito, enfrenté y resolví los desafíos relacionados con el diseño de UX/UI. Esto incluyó la gestión de una amplia gama de componentes globales y dinámicos, la integración de API, la transferencia fluida de datos entre frameworks y la implementación de una experiencia de usuario y por supuesto la autenticación y registro de usuarios. A pesar de las dificultades iniciales, el esfuerzo constante y las mejoras graduales fueron el motor que impulsó lo necesario para aprender de estos obstáculos.

##### Aprendizajes:
- **Mejoras a Través de la Perseverancia:** Este proyecto me permitió adentrarme aún más en el mundo de Vue.js. Tan solo hace tres meses, abordar esta implementación de Vue.js me resultaba desalentador debido a su complejidad. Sin embargo, gracias al esfuerzo diario y constante, así como a mi perseverancia, no solo logré comprender la lógica subyacente necesaria, sino que también superé mis expectativas iniciales. Esta experiencia no solo me motivó a explorar nuevas posibilidades, sino que también me impulsó a implementar características que anteriormente consideraba fuera de mi alcance, especialmente en el ámbito del frontend.
Este proyecto consolidó mi perseverancia y mi compromiso con el aprendizaje continuo. La dedicación constante a este proyecto no solo fortaleció mi confianza, sino que también expandió significativamente mi conjunto de habilidades. Desde el inicio del proceso de planificación hasta la conclusión exitosa del proyecto, este recorrido destaca cómo la perseverancia y el esfuerzo dedicado pueden transformar tanto el crecimiento personal como el profesional.

<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver a Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a Proyectos</button>     
</div>
