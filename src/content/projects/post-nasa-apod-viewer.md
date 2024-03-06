---
title: "🪐Nasa Apod Viewer - A Python web app for fetching NASA's Astronomy Picture of the Day, shareable as APOD cards. "
meta_title: "Iván Luna - Software Developer - Nasa APOD Viewer"
date: 2024-02-25T05:00:00Z
image: "/images/assets/nasa-apod-viewer.png"
categories: ["Python","Flask", "SQL","Development","Vercel Deployment"]
tags: ["nasa-apod-viewer","flask"]
draft: false
---

### Welcome to the [Nasa Apod Viewer](https://apod-nasa-viewer.vercel.app/) Project.

A Python web application for fetching NASA's Astronomy Picture of the Day, shareable as APOD cards.

#### Live Demo:

[apod-nasa-viewer.vercel.app](https://apod-nasa-viewer.vercel.app)

#### About this project:

This project is a Python web application built with Flask. It fetches NASA's Astronomy Picture of the Day (APOD) from the NASA API and provides functionalities to view and share the images as APOD cards. For more information you can visit the [Github repository](https://github.com/imprvhub/nasa-apod-viewer).

#### Features:

- Fetches the Astronomy Picture of the Day from the NASA API.
- Enables users to explore APOD images via a calendar navigation or by searching for specific dates.
- Includes a 'Shuffle' option that randomize picks for users who are uncertain which date to explore.
- Showcases a curated selection of the finest APOD images from 1995 (the inception year of APOD) to the present via the 'Featured NASA APOD per year' Recommendations section.
- Generates shareable APOD cards comprising the retrieved image, title, and description.
- **YouTube Integration (New Feature):** Users can now watch APOD videos directly within the application interface. They can also share these YouTube videos as APOD cards, expanding the application's sharing functionality. With this enhancement, users can easily spread the word about their favorite astronomical discoveries.

#### Topics:

- [About This Project](#about-this-project)
- [Features](#features)
- [Installation](#installation)
- [Feedback](#feedback)
- [License](#license)
- [Conclusion](#conclusion)

#### Installation:

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/imprvhub/nasa-apod-viewer.git
   ```

2. Install the required dependencies:

    ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables. Ensure you have a .env file with the following variables:

     ```bash
    NASA_API_KEY: Your NASA API key.
    DATABASE_HOST: Hostname of your database.
    DATABASE_USERNAME: Username for database access.
    DATABASE_PASSWORD: Password for database access.
    DATABASE: Name of the database.
   ```

4. Run the Flask application:
    ```bash
   cd api
   python3 index.py
   ```

#### Feedback:

Your feedback is valuable! If you encounter any issues or have suggestions for improvements, please create a new [GitHub issue](https://github.com/imprvhub/nasa-apod-viewer/issues/new) in this repository.

#### License:

This project is licensed under the MIT License. See the [LICENSE](https://github.com/imprvhub/nasa-apod-viewer/blob/main/LICENSE.md) file for details.


#### Conclusion:

##### Achievements

- **Efficient Management of Complex Workflow and Scripts:** Efficient Management of Complex Workflow and Scripts: Effectively handling the intricate workflow involving multiple script executions to facilitate user interaction and offer various options, such as randomization, date selection, and APOD card generation, was the primary challenge addressed in this project. Ensuring the desired outcomes following each script execution and interaction was particularly rewarding. This required orchestrating a sequence of API calls to dynamically update the APOD based on user interactions, each serving distinct purposes. Attention to detail and comprehensive testing were essential to ensure seamless functionality throughout the process.

##### Learnings

- **Enhanced Frontend-Backend Interaction:** I gained insights into achieving improved interaction between frontend scripts and Python backend processes. Previously, my approach was limited to transmitting specific data and processing it. However, this project necessitated establishing a continuous exchange of data between the frontend and backend due to the numerous scripts and interactions within the web application. It was a valuable learning experience.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Back to Home</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Back to Projects</button>     
</div>

---
