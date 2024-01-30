---
title: "⚡️BoltURL - Una Aplicación Web de Acortamiento de Enlaces realizada con Python [Flask]"
meta_title: "Iván Luna - Desarrollador de Software - BoltURL"
description: ""
date: 2024-01-20T05:00:00Z
image: "/images/bolt-url.png"
categories: ["Python","SQL", "Soluciones", "Desarrollo", "Despliegue en Vercel"]
tags: ["bolt-url", "flask"]
draft: false
---

### Bienvenid@s al Proyecto [Bolt URL!](https://bolturl.site/).
Esta aplicación web de acortamiento de enlaces demuestra cómo Python puede hacer casi cualquier cosa. Utiliza Python (Flask) con MySQL (Planetscale). Para obtener información detallada, visite el [Repositorio en Github](https://github.com/imprvhub/bolturl-python).

#### Demostración:
https://bolturl.site

#### Características Clave:
- **Acortamiento de Enlaces:**
    - Permite a los usuarios acortar URL largas, creando enlaces más concisos.

- **Uso de Python y Flask:**
    - Muestra las capacidades de Python, utilizando específicamente el framework Flask.
    - Aprovecha Python para funcionalidades backend, demostrando su versatilidad en el desarrollo web.

- **Interfaz Amigable para el Usuario:**
    - Ofrece una interfaz amigable para una experiencia de usuario intuitiva.
    - Incorpora plantillas y estilos para mejorar la apariencia visual de la aplicación web.

#### Requisitos Previos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

#### Instalación y Ejecución Local

##### 1. Clona este proyecto.
```bash
git clone https://github.com/ivnimprv/bolturl-python.git

```
##### 2.1 Navega al directorio del proyecto (desde tu terminal IDE)
```bash
cd /your/folder/directory/bolturl-python
```
##### 3. Instala las Dependencias
```bash
pip install -r requirements.txt
```
##### 4. Crea tu propia base de datos (Este es el enfoque de Planetscale [MYSQL]) y reemplaza las siguientes variables de entorno para obtener la funcionalidad completa de la aplicación en producción local.
```bash
domain_url = os.getenv("DOMAIN_URL", "http://localhost:5000")
hashids_salt = os.getenv("HASHIDS_SALT")
hashids = Hashids(salt=hashids_salt, min_length=4)  
connection = pymysql.connect(
        host=os.getenv("DATABASE_HOST"),
        user=os.getenv("DATABASE_USERNAME"),
        passwd=os.getenv("DATABASE_PASSWORD"),
        db=os.getenv("DATABASE"),
        ssl={"ssl_accept": "strict"}
    )
```
##### 5. Ejecuta el siguiente comando en tu terminal IDE.
```bash
python3 index.py
```

#### Conclusión:

##### Logros

- **Éxito al evadir recursos restringidos por CORS**: A veces, cuando se realizan tareas específicas entre servidores, el mecanismo CORS restringe ciertas operaciones, me sucedió en este proyecto cuando intentaba redirigir a enlaces acortados.

##### Aprendizajes

- **Sin Frontend Framework:** En este proyecto aprendí que a veces no es necesario depender de otros frameworks frontend. 


---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver al Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a Proyectos</button>     
</div>

---
