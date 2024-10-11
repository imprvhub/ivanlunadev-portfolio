---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI]"
meta_title: "Iván Luna - Software Developer - AnalyzeMyDream"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Python", "Fullstack Development", "AI", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso","Google Passwordless Auth", "Github Passwordless Auth"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream is an innovative platform built using Astro.js, offering AI-powered dream interpretation to help users gain deeper insights into their dreams. The platform integrates seamlessly with FastAPI, Flask, and advanced AI models, providing quick and detailed analyses. Subscription-based plans give users access to enhanced features, including more personalized and in-depth dream interpretations. It also comes with a fully documented API, ensuring comprehensive testing and smooth integration for developers.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://analyzemydream.com', '_blank');">Live Demo</button>  
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/analyzemydream/', '_blank');">GitHub Frontend Code</button>   
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://analyzemydream.com/api', '_blank');">API docs</button>
</div>

#### What's New:

<div align="center">

##### Release Announcement: v1.3.0

###### Release Date: 23 September, 2024

The release of **AnalyzeMyDream v1.3.0** is now **available**!. This release introduces significant enhancements including new subscription plans, advanced dream analyzers, improved payment management through PayPal, and a restructured user interface for a better experience. For further details, please refer to the [v1.3.0 Release Notes](https://github.com/imprvhub/AnalyzeMyDream/releases/tag/v1.3.0).

</div>

---

- **Free Features:**
  - **Dream Interpretation Articles:** These are based on academic bibliographic content.
  - **Fast-AI Dream Analyzer:** Quick and general interpretation available to all users.
  <div align="center">
    <img src="https://analyzemydream.com/changelog/changelog-01.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

  - **Subscription-based Features:**
    - **Advanced-AI Dream Analyzer:** Offers deeper, research-backed dream analysis.
    - **Custom-AI Dream Analyzer:** Allows users to tailor dream analysis according to their prefered parameters.
    - **Comparative-AI Dream Analyzer:** Compares two dream descriptions to identify patterns.
    - **Batch-AI Dream Analyzer:** Analyzes multiple dreams in one session, providing a holistic overview.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-02.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Secure PayPal Subscription Handling:** Includes Basic, Standard, and Premium subscription plans with a 7-day trial option for the Basic plan.
- **Passwordless Authentication:** Users can sign in using Google or GitHub accounts.
- **API Key Management:** Powered by a Flask-based backend for creating and managing API keys via the user dashboard.
- **API for Developers:** A comprehensive API with detailed documentation and testing capabilities, allowing developers to integrate the platform’s dream analysis features into their own applications. API keys are generated based on subscription plans, with different tiers unlocking specific functionalities.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-04.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Responsive Frontend:** Built with Astro.js for a seamless user experience across desktop and mobile.
- **Multilingual Support:** Providing dream interpretations in multiple languages to reach a broader audience.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog_03.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

---

#### Installation

##### Astro.js Frontend:
To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/imprvhub/analyzemydream.git
```
2. Install the necessary dependencies:
```bash
npm install
```
3. Before running the project, you need to set up your environment variables in a .env file. Here's how:
```bash
GOOGLE_AUTH_CLIENT: The Client ID provided by Google for OAuth2 authentication.

GOOGLE_AUTH_SECRET: The Client Secret provided by Google to securely handle user authentication.

GOOGLE_AUTH_CALLBACK_URL: The URL where Google redirects users after successful authentication.

GITHUB_AUTH_CLIENT: The Client ID provided by GitHub for OAuth2 authentication.

GITHUB_AUTH_SECRET: The Client Secret provided by GitHub for secure authentication handling.

GITHUB_AUTH_CALLBACK_URL: The URL where GitHub redirects users after authentication.

DB_URL: The URL to access the database, including the host and connection details.

DB_TOKEN: The token or key used to authenticate and securely connect to the database.
```
4. Run the project:
  ```bash
  npm run dev
  ```
  The project should be accesible at, e.g., 'http://localhost:4321'


#### Conclusion:

The AnalyzeMyDream project was developed for a client, meaning that any code directly tied to the client’s commercial value will remain private in adherence to best professional practices and contractual agreements. However, to foster community engagement, the frontend code will be made publicly available in a repository, encouraging open collaboration without compromising the project’s integrity or commercial obligations.

Working on AnalyzeMyDream has been a pivotal experience for my growth as a backend developer, both from a technical perspective and in addressing real-world challenges. One of the key achievements was implementing third-party authentication via Google and GitHub using OAuth2. This integration, combined with Turso Connect for secure database management, facilitated passwordless logins, enhancing both platform security and user experience. Another critical component was the integration of the PayPal SDK for subscription management, enabling a seamless system that supports upgrades to advanced dream analysis tiers, providing users with richer insights.

The architecture of AnalyzeMyDream, built around three distinct backend services, posed both challenges and valuable learning opportunities. FastAPI was utilized for core API functionalities, while a separate Flask backend managed API key generation, linking them to PayPal subscription plans. Additionally, a Node.js service was responsible for handling PayPal webhooks, automating the creation of subscriptions and associating the appropriate API keys with plans based on real-time transaction data. This microservices approach ensures the system is scalable and enables efficient management of disparate functionalities.

##### Learnings:
This project reinforced critical lessons in system architecture, authentication, and subscription management. Implementing OAuth2 for Google and GitHub offered deeper insights into secure authentication flows and how to integrate them with Turso Connect to maintain user management and data integrity.

Moreover, integrating the PayPal SDK unveiled the complexities of real-time payment processing, subscription tier management, and API key generation. Orchestrating three distinct backend systems—FastAPI for the main API, Flask for API key management, and Node.js for handling PayPal webhooks—provided a hands-on understanding of microservices architecture and how to effectively distribute workloads across services. This modular design promotes clear separation of concerns, making the system more scalable and maintainable.

In conclusion, AnalyzeMyDream has been instrumental in honing my full-stack development skills, particularly in API management and secure authentication. It has also deepened my expertise in real-time payment processing and the implementation of subscription-based services.
<hr>
<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Back to Home</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Back to Projects</button>     
</div>