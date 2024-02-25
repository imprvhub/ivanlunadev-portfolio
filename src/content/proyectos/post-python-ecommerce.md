---
title: "📈 E-commerce Data Analysis (Python)."
meta_title: "Iván Luna - Desarrollador de Software - E-commerce Data Analysis"
description: ""
date: 2024-01-03T05:00:00Z
image: "/images/assets/ecommerce-data-analysis.png"
categories: ["Python", "SQL", "Soluciones", "Implementaciones", "Despliegue en Azure"]
tags: ["ecommerce-data-analysis", "flask", "gunicorn"]
draft: false
---

### Bienvenid@s al Proyecto [E-commerce Data Analysis](https://ecommerce-data-analysis.azurewebsites.net/).
Esta implementación muestra y proporciona un análisis integral de datos de comercio electrónico de dos proyectos diferentes de Next.js. Utiliza Python (Framework Flask) con GUnicorn e implementación en Azure. Para obtener información detallada, visita el [Repositorio en Github](https://github.com/imprvhub/ecommerce_data_analysis/).

### Demostración:
https://ecommerce-data-analysis.azurewebsites.net/

### Tutorial:
<div style="text-align: center;">
  <iframe width="100%" height="600" src="https://www.youtube.com/embed/jNLWl_Nu3KE" frameborder="0" allowfullscreen style="margin: auto;"></iframe>
</div>

### Características Clave:
1. <ins>**Analiza los datos como un Super-administrador:**<ins>

   Obtiene datos completos de los administradores de tiendas, incluida información sobre sus tiendas, productos, ventas completadas o pendientes y clientes.

2. <ins>**Renderización Comparativa de Datos Analíticos:**<ins>

   Renderiza y compara los datos adquiridos, proporcionando analíticas a través de tablas, gráficos de Plotly Express y visualizaciones de Matplotlib.

3. <ins>**Tablero Dinámico:**<ins>

   Accede a un tablero dinámico que permite el monitoreo y análisis en tiempo real de las métricas de comercio electrónico.

4. <ins>**Interfaz Amigable para el Usuario:**<ins>

   Navega a través de una interfaz amigable diseñada para facilitar el uso y la exploración eficiente de datos.

### Requisitos Previos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

### Instalación y Ejecución Local

#### 1. Clona los Proyectos de 'Code With Antonio'. 
Para que esta implementación funcione correctamente, debes clonar y configurar primero los proyectos [ecommerce-admin](https://github.com/antonioerdeljac/next13-ecommerce-admin) y luego [ecommerce-store](https://github.com/antonioerdeljac/next13-ecommerce-store) de 'Code With Antonio'. Para obtener un tutorial detallado, visita: [Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023](https://www.youtube.com/watch?v=5miHyP6lExg).

DESCARGO DE RESPONSABILIDAD: Asegúrate de crear una tienda funcional desde ecommerce-admin con productos que se puedan ver en el lado del cliente de ecommerce-store. Ten en cuenta que los pagos realizados en la demostración son simulados y utilizan datos genéricos, siguiendo las prácticas recomendadas de [Stripe Docs](https://stripe.com/docs/testing ). Si ya has configurado la gestión de pagos según tu región, entonces omite la simulación. Se recomienda no omitir este paso a menos que usted tenga la seguridad y la responsabilidad de los movimientos o transacciones que usted vaya a generar. Este proyecto es meramente demostrativo para mostrar cómo funciona una implementación en Python. Procure utilizar este proyecto con conciencia y responsabilidad. Para obtener más información: [Haz clic aquí](https://ecommerce-data-analysis.azurewebsites.net/user_agreements.html).

#### 2. Clona el repositorio de la implementación
```bash
git clone https://github.com/ivnimprv/ecommerce_data_analysis.git
```
#### 2.1 Navega al directorio del proyecto (desde la terminal de tu IDE)
```bash
cd /your/folder/directory/ecomerce_data_analysis
```
#### 3. Instala las Dependencias
```bash
pip install -r requirements.txt
```
#### 4. Inicia la aplicación localmente
```bash
python3 app.py
```
La aplicación debería ser accesible ahora en http://localhost:8000.

### Conclusión:

### Problemas conocidos:

- **Latencia de rendimiento:** En ocasiones, las cargas elevadas de instancias de Azure generan una latencia significativa. Para solucionar este problema, planeo migrar el proyecto a una plataforma diferente en el futuro, mejorando así el rendimiento.

#### Logros

- **Integración Exitosa de Datos de Next.js:**  Logré la implementación de Python, combinando eficazmente datos extraídos de dos proyectos diferentes de Next.js.

#### Aprendizajes

- **Primer Deploy en Azure** Este proyecto marcó mi primera implementación en Azure. Aunque tenía experiencia previa con Render, Vercel y Netlify, configurar mi aplicación en Python, impulsada por Gunicorn, para que funcionara eficientemente en Azure presentó un desafío único.

#### Planes Futuros

- **Mejoras Interactivas:** En el futuro, aspiro a implementar interactividad en los gráficos y análisis, mejorando la experiencia general del usuario.

#### Agradecimientos

- **Agradecimientos Especiales a Code With Antonio:** Expreso mi gratitud por inspirar con proyectos fundamentales y hacer posible esta implementación.


---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Volver al Inicio</button>
      <button class="btn btn-primary" onclick="window.location.href='/proyectos';">Volver a Proyectos</button>     
</div>

---
