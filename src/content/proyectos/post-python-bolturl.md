---
title: "⚡️BoltURL - Una Aplicación Web de Acortamiento de Enlaces realizada con Python [Flask]"
meta_title: "Iván Luna - Desarrollador de Software - BoltURL"
description: ""
date: 2024-01-20T05:00:00Z
image: "/images/assets/bolt-url.png"
categories: ["Python","Flask","PostgreSQL", "Supabase", "Soluciones", "Desarrollo", "Despliegue en Vercel"]
tags: ["bolt-url"]
draft: false
---

### Bienvenid@s al Proyecto [Bolt URL!](https://bolturl.site/).
Esta aplicación web de acortamiento de enlaces demuestra cómo Python puede hacer casi cualquier cosa. Utiliza Python (Flask) con MySQL (Planetscale). Para obtener información detallada, visite el [Repositorio en Github](https://github.com/imprvhub/bolturl-python).

#### Demostración:

[bolturl.site](https://bolturl.site)

#### Características Clave:
- **Acortamiento de Enlaces:**
    - Permite a los usuarios acortar URL largas, creando enlaces más concisos.

- **Uso de Python y Flask:**
    - Muestra las capacidades de Python, utilizando específicamente el framework Flask.
    - Aprovecha Python para funcionalidades backend, demostrando su versatilidad en el desarrollo web.

- **Interfaz Amigable para el Usuario:**
    - Ofrece una interfaz amigable para una experiencia de usuario intuitiva.
    - Incorpora plantillas y estilos para mejorar la apariencia visual de la aplicación web.

#### Instalación y Ejecución Local:

##### Requisitos Previos
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

##### 1. Clonar este proyecto.
```bash
git clone https://github.com/ivnimprv/bolturl-python.git

```
##### 2.1 Navegue al directorio del proyecto (desde tu terminal IDE)
```bash
cd /your/folder/directory/bolturl-python
```
##### 3. Instale las Dependencias
```bash
pip install -r requirements.txt
```
##### 4. Cree su propia base de datos (Este es el enfoque de Planetscale [MYSQL]) y reemplace las siguientes variables de entorno para obtener la funcionalidad completa de la aplicación en producción local.
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
##### 5. Ejecute el siguiente comando en tu terminal IDE.
```bash
python3 index.py
```

#### Comentarios y soporte:
Su opinión es importante y estoy listo para ayudarlo a abordar cualquier consulta o comentario que pueda tener. Sus contribuciones son esenciales para perfeccionar el proyecto y mejorar la experiencia general del usuario. No dudes en ponerte en contacto conmigo:

No dude en compartir sus conocimientos, recomendaciones o sugerencias para la mejora continua. Si encuentra algún desafío o necesita ayuda, [cree un nuevo issue de GitHub](https://github.com/imprvhub/bolturl-python/issues/new). Asegúrese de proporcionar una descripción detallada de su problema para facilitar una asistencia rápida y precisa.

#### Licencia:
Para obtener más información sobre este tema, lea el siguiente [Acuerdo de usuario](https://www.bolturl.site/user_agreements).

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
