---
title: "🎧 Fifty List - A React/Python Music Automation Platform."
meta_title: "Iván Luna - Software Developer - Fifty List"
description: "this is meta description"
date: 2024-01-07T05:00:00Z
image: "/images/assets/fifty-list.png"
categories: ["React.js","Python","API RESTful","Development","Vercel Deployment"]
tags: ["fifty-list","flask","react"]
draft: false
---

#### Welcome to [Fifty List - Fetching Your Top 50 Jams.](https://fiftylist.vercel.app/)

This project is a music automation platform and showcases a seamless integration of React and Python. For detailed insights, please visit the [Fifty List React Github Repo](https://github.com/imprvhub/fiftylist-react/) and the [Fifty List Python Github Repo](https://github.com/imprvhub/fiftylist-python/).

#### Live Demo:
https://fiftylist.vercel.app/

#### Key Features:

##### Frontend (React.js)
- Spotify Integration: Fetches your top 50 tracks from Spotify within a chosen timeframe (1, 6 months, or all-time classics).
- Playlist Creation: Automatically generates a new playlist on your Spotify account with these tracks.
- Recommendation Lists Creation: Based on your top 50 listened songs, our recommendation engine suggests an additional 20 songs to add to your playlists.

##### Backend (Python)
- Flask-Powered: Acts as a middleware that interfaces between React and Todoist.
- Task Management: Organizes track details into tasks on Todoist, including artist names, song titles, album names, release dates, and genres.

#### About the Project:

FiftyList is an exploratory project diving deep into the collaboration of different programming languages and APIs. It is designed to:
- Demonstrate Seamless Communication: Showcases smooth communication between the frontend and backend using API calls.
- Emphasize Language Synergy: Highlights the synergy between React's frontend prowess and Python's backend efficiency.
- Data Presentation Challenge: Ensures that complex data is rendered in a user-friendly format and transmitted effectively between systems.

#### Installation and Usage:

##### For Frontend Installation:
1. Clone this project.
 ```bash
git clone https://github.com/imprvhub/fiftylist-react.git
```
2. Navigate to the project directory (in your terminal IDE).
```bash
cd /your/folder/directory/fiftylist-react
```
3. Run the following command to install all required dependecies.
```bash
npm install
```
4. Replace the environment variables (`REACT_APP_SCOPES`, `REACT_APP_REDIRECT_URI`, `REACT_APP_CLIENT_SECRET`, `REACT_APP_CLIENT_ID`) with your own. You can generate these variables from Spotify Developer Dashboard.
5. Replace the variable defined at the beginning of the code in `App.js`:
   `const redirectUri = 'https://fiftylist.vercel.app/callback';` with -> `const redirectUri = "http://localhost:3000/callback";`
   Update the URLs in the variables of the `exportTodoist` function from `'https://fiftylistbackend.vercel.app/todoist'` to `'http://localhost:5000/todoist'` if your Python backend is using a different 
   port.
6. Run the following command from your terminal IDE; this should start the frontend on the designated port. 
```bash
npm start
```

##### For Backend Installation:
##### Prerequisites:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

1. Clone the project. ( https://github.com/imprvhub/fiftylist-python )
 ```bash
git clone https://github.com/imprvhub/fiftylist-python.git
```

1.2 Navigate to the project directory (in your terminal IDE).
```bash
cd /your/folder/directory/fiftylist-python
```
2. Run the following command to install all required dependecies.
```bash
pip install -r requirements.txt
```
3. Replace the variable defined at the beginning of the todoist.py code: `cors = CORS(app, resources={r"/todoist": {"origins": "https://fiftylist-frontend.vercel.app/"}})` with ->  `cors = CORS(app, resources={r"/todoist": {"origins": "http://localhost:3000/"}})` (or the port you designated for your frontend).
4. Run `python3 todoist.py`.
   
IMPORTANT: Open two separate windows in your IDE to run the fullstack locally. Execute the commands to have both projects running simultaneously for them to work seamlessly.

#### Conclusion:

Although the functionality of exporting song data to Todoist may seem unnecessary, my main focus was to achieve effective integration between various programming languages and ensure efficient feedback with the Python backend. Additionally, I saw this opportunity as a way to learn about new APIs.

##### Future Plans: 

In the future, just as currently the export works for Todoist. I would also like to add an 'Export to Notion' new feature.

#### Feedback & Support:
Your input matters, and I'm ready to help address any inquiries or feedback you may have. Your contributions are essential for refining the project and enhancing the overall user experience. Don't hesitate to get in touch with me:

Feel free to share your insights, recommendations, or suggestions for continuous improvement. If you encounter any challenges or require assistance, please [create a new GitHub issue](https://github.com/imprvhub/fiftylist-react/issues/new). Be sure to provide a detailed description of your issue to facilitate prompt and precise support.

#### License:
For more information regarding this topic please read the following [Terms and Conditions Section.](https://fiftylist.vercel.app/html/termsandconditions.html)


---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Back to Home</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Back to Projects</button>     
</div>

---
