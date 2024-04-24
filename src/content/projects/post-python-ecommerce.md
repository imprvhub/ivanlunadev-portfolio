---
title: "📈 E-commerce Data Analysis [Next.js - Python]"
meta_title: "Iván Luna - Software Developer - Ecommerce Data Analysis"
date: 2024-01-03T05:00:00Z
image: "/images/assets/ecommerce-data-analysis.png"
categories: ["Python","Flask","Next.js","Data Analysis","MySQL","Planetscale","Solutions","Implementations","Full Stack Development","Azure Deployment"]
tags: ["e-commerce data analysis"]
draft: false
---

This implementation showcases and provides a comprehensive analysis of e-commerce data from two different Next.js projects. Using Python (Flask Framework) with GUnicorn and Azure Deployment.

<div style="display: flex; justify-content: center;">
  <div style="text-align: center;">
    <p>For detailed insights:</p>
  </div>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap; ">
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://ecommerce-data-analysis.vercel.app/', '_blank');">Live Demo</button>  
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/ecommerce-data-analysis/', '_blank');">Github Code</button>   
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

##### Update: April 24, 2024

- **Migration from Azure to Vercel**: Significantly improved User Experience (UE) by transitioning the deployment infrastructure from Azure to Vercel. This strategic migration addresses performance concerns encountered with the previous Azure deployment. Leveraging Vercel's optimized platform ensures smoother and more efficient operations, enhancing overall system reliability and responsiveness.
<br>

#### How it works?:

<div style="text-align: center;">
  <iframe width="100%" height="600" src="https://www.youtube.com/embed/kJ6O4pHK_rc" frameborder="0" allowfullscreen style="margin: auto;"></iframe>
</div>

#### Key Features:
1. <ins>**Retrieve Data like a Super-Admin:**<ins>

   Obtain comprehensive data from store managers, including information about their stores, products, completed or pending sales, and customers.

2. <ins>**Comparative Rendering of Analytical Insights:**<ins>

   Render and compare the acquired data, providing analytical insights through tables, Plotly Express graphs, and Matplotlib visualizations.

3. <ins>**Dynamic Dashboard:**<ins>

   Access a dynamic dashboard that allows real-time monitoring and analysis of e-commerce metrics.

4. <ins>**User-Friendly Interface:**<ins>

   Navigate through a user-friendly interface designed for ease of use and efficient data exploration.
   

#### Installation and Local Execution:

##### Prerequisites:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

##### 1. Clone 'Code With Antonio' Projects. 
In order to this implementation works properly you must to clone and set the [ecommerce-admin](https://github.com/antonioerdeljac/next13-ecommerce-admin) (in first place) and then [ecommerce-store](https://github.com/antonioerdeljac/next13-ecommerce-store) projects from 'Code With Antonio'. For detailed tutorial please visit: [Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023](https://www.youtube.com/watch?v=5miHyP6lExg).

DISCLAIMER: Make sure to create a functional store from ecommerce-admin with products that can be viewed on the client side ecommerce-store. Keep in mind that the payments made in the demonstration are simulated and use generic data, following the recommended practices of [Stripe Docs](https://stripe.com/docs/testing ). If you have already configured payment management according to your region, then skip the simulation. It is recommended not to skip this step unless you are certain and take responsibility for the respective movements or transactions you generate. This project is purely demonstrative to showcase how a Python implementation works. We are not responsible for any misunderstandings or mismanagement. For more information: [Click here.](https://ecommerce-data-analysis.vercel.app/user_agreements.html).

##### 2. Clone the implementation repository
```bash
git clone https://github.com/ivnimprv/ecommerce_data_analysis.git
```
##### 2.1 Navigate to the project directory
```bash
cd /your/folder/directory/ecomerce_data_analysis
```
##### 3. Install Dependencies
```bash
pip install -r requirements.txt
```
##### 4. Start the application locally
```bash
python3 app.py
```
The application should now be accessible at http://localhost:8000.

#### Feedback & Support:
Your input matters, and I'm ready to help address any inquiries or feedback you may have. Your contributions are essential for refining the project and enhancing the overall user experience. Don't hesitate to get in touch with me:

Feel free to share your insights, recommendations, or suggestions for continuous improvement. If you encounter any challenges or require assistance, please [create a new GitHub issue](https://github.com/imprvhub/ecommerce-data-analysis/issues/new). Be sure to provide a detailed description of your issue to facilitate prompt and precise support.

#### License:
For more information regarding this topic please read the following [User Agreement Section.](https://ecommerce-data-analysis.vercel.app/user_agreements.html)

#### Conclusion:

##### Known Issues:

- **Performance Latency:** Occasionally, high Azure instance loads result in significant latency. To address this, I plan to migrate the project to a different platform in the future, thereby improving performance.

##### Achievements

- **Successful Integration of Next.js Data:** Achieved the implementation of Python, effectively combining data extracted from two Next.js projects.

##### Learnings

- **Azure Deployment Debut:** This project marked my first deployment to Azure. While I had prior experience with Render, Vercel, and Netlify, configuring my Python application, powered by Gunicorn, to efficiently run on Azure presented a unique challenge.

##### Future Plans

- **Interactive Enhancements:** In the future, I aspire to implement interactivity to the graphics and analytics, enhancing the overall user experience.

##### Acknowledgments

- **Special Thanks to Code With Antonio:** Expressing my gratitude for inspiring with foundational projects and making this implementation possible.

<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Back to Home</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Back to Projects</button>     
</div>

---
