---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI - IA - Paypal SDK]"
meta_title: "Iván Luna - Software Developer - AnalyzeMyDream"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Fullstack Development", "AI", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso","Google Passwordless Auth", "Github Passwordless Auth"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream is an innovative platform built using Astro.js, offering AI-powered dream interpretation to help users gain deeper insights into their dreams. The platform integrates seamlessly with FastAPI, Flask, and advanced AI models, providing quick and detailed analyses. Subscription-based plans give users access to enhanced features, including more personalized and in-depth dream interpretations. It also comes with a fully documented API, ensuring comprehensive testing and smooth integration for developers.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://analyzemydream.com', '_blank');">Live Demo</button>  
</div>

#### What's New:

<div align="center">

##### Release Announcement: v1.3.0

###### Release Date: 23 September, 2024

The release of **AnalyzeMyDream v1.3.0** is now **available**!. This release introduces significant enhancements including new subscription plans, advanced dream analyzers, improved payment management through PayPal, and a restructured user interface for a better experience. For further details, please refer to the [v1.3.0 Release Notes](https://github.com/imprvhub/AnalyzeMyDream/releases/tag/v1.3.0).

</div>

---

- **Primary Features:**
  - **Fast-AI Dream Analyzer:** Quick, general interpretation available to all users.
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

Working on AnalyzeMyDream has been a transformative experience, both in terms of technical growth and practical problem-solving. One of the key achievements was successfully implementing third-party authentication via Google and GitHub using OAuth2, in conjunction with Turso Connect for secure database management. This allowed seamless, passwordless login for users, enhancing the overall security and user experience of the platform. Additionally, integrating PayPal SDK for managing subscriptions was a critical milestone. With a robust subscription system in place, users can now easily upgrade to advanced dream analysis plans, unlocking deeper insights.

The architecture of AnalyzeMyDream, consisting of three distinct backend services, also provided a significant challenge and learning opportunity. The FastAPI backend powers the core API functionalities, while a separate Flask backend handles the generation and management of API keys, attributing them to specific PayPal subscription plans. A third Node.js backend captures PayPal webhooks, automatically creating subscriptions and assigning users their respective API keys and plans based on real-time transaction data. This multi-backend approach ensures scalability and efficient handling of different functionalities within the system.

##### Learnings:
This project taught me invaluable lessons about system architecture, authentication, and subscription management. Implementing OAuth2 for both Google and GitHub required deepening my understanding of secure authentication flows, as well as integrating these flows with Turso Connect to ensure smooth user management and data integrity.

Furthermore, integrating the PayPal SDK introduced me to the complexities of handling real-time payment processing, subscription tiers, and API key generation. By managing three separate backend systems
—FastAPI for the core API, Flask for API key generation, and Node.js for PayPal webhook handling
—I gained a better understanding of microservice architecture and how to distribute workloads effectively across different services. This multi-backend setup allowed for clear separation of concerns, making the system more modular and easier to maintain.

Overall, AnalyzeMyDream helped me enhance my skills in full-stack development, API management, and secure authentication, while also deepening my knowledge of handling real-time payment processing and subscription-based services.
<hr>
<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Back to Home</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Back to Projects</button>     
</div>