---
title: "🎧 Fifty List v2 [React.js-Python]"
meta_title: "Iván Luna - Software Developer - Fifty List"
date: 2024-01-07T05:00:00Z
image: "/images/assets/fifty-list.png"
categories: ["React.js","Python","Flask","Fullstack Development","PostgreSQL","Google Cloud Storage","Supabase", "Vercel Deployment"]
tags: ["fifty-list"]
draft: false
---
This project is a fullstack music automation platform and showcases a seamless integration of React and Python. 
<br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; ">
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://fiftylist.vercel.app', '_blank');">Live Demo</button>  
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/fiftylist-react-v2/', '_blank');">Github React Code</button>
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/fiftylist-python-v2/', '_blank');">Github Python Code</button>   
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

#### Key Features:

##### Frontend (React.js)
- Spotify Integration: Fetches your top 50 tracks from Spotify within a chosen timeframe (1, 6 months, or all-time classics).
- Export To Playlist (Results): Automatically generates a new playlist on your Spotify account with these 50 tracks.
- Export To Playlist (Recommendations): Based on your top 50 listened songs, our recommendation engine suggests an additional 20 songs to add to your playlists.

##### Backend (Python)
- Flask-Powered: Acts as a middleware that interfaces with React.
- Fifty Card: Organizes retrieved tracks dynamically into a static brand new website in order to provide sharing functionality to social media or for accessing later, including artist names, song titles, album names, release dates, and genres.

#### About the Project
FiftyList is an exploratory project diving deep into the collaboration of different programming languages and APIs. It is designed to:
- Demonstrate Seamless Communication: Showcases smooth communication between the frontend and backend using API calls.
- Emphasize Language Synergy: Highlights the synergy between React's frontend prowess and Python's backend efficiency.
- Data Presentation Challenge: Ensures that complex data is rendered in a user-friendly format and transmitted effectively between systems.

#### Installation and Usage:

##### For Frontend Installation:
1. Clone this project.
 ```bash
git clone https://github.com/imprvhub/fiftylist-react-v2.git
```
2. Navigate to the project directory (in your terminal IDE).
```bash
cd /your/folder/directory/fiftylist-react-v2
```
3. Run the following command to install all required dependecies.
```bash
npm install
```
4. Replace the environment variables (`REACT_APP_SCOPES`, `REACT_APP_REDIRECT_URI`, `REACT_APP_CLIENT_SECRET`, `REACT_APP_CLIENT_ID`) with your own. You can generate these variables from Spotify Developer Dashboard.
5. Replace the variable defined at the beginning of the code in `App.js`:
   `const redirectUri = 'https://fiftylist.vercel.app/callback';` with -> `const redirectUri = "http://localhost:3000/callback";`
   Update the URLs in the variables of the `exportShare` function from `'https://fiftylistbackend.vercel.app/share'` to `'http://localhost:5000/share'` if your Python backend is using a different 
   port.
6. Run the following command from your terminal IDE; this should start the frontend on the designated port. 
```bash
npm start
```

##### For Backend Installation:
##### Prerequisites:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

1. Clone the project. ( https://github.com/imprvhub/fiftylist-python-v2 )
 ```bash
git clone https://github.com/imprvhub/fiftylist-python-v2.git
```

1.2 Navigate to the project directory (in your terminal IDE).
```bash
cd /your/folder/directory/fiftylist-python-v2
```
2. Run the following command to install all required dependecies.
```bash
pip install -r requirements.txt
```
3. Replace the variable defined at the beginning of the share.py code: `cors = CORS(app, resources={r"/share": {"origins": "https://fiftylist-frontend.vercel.app/"}})` with ->  `cors = CORS(app, resources={r"/share": {"origins": "http://localhost:3000/"}})` (or the port you designated for your frontend).
4. Run `python3 share.py`.
   
IMPORTANT: Open two separate windows in your IDE to run the fullstack locally. Execute the commands to have both projects running simultaneously for them to work seamlessly.

#### Feedback & Support:
Your input matters, and I'm ready to help address any inquiries or feedback you may have. Your contributions are essential for refining the project and enhancing the overall user experience. Don't hesitate to get in touch with me:

Feel free to share your insights, recommendations, or suggestions for continuous improvement. If you encounter any challenges or require assistance, please [create a new GitHub issue](https://github.com/imprvhub/fiftylist-react-v2/issues/new). Be sure to provide a detailed description of your issue to facilitate prompt and precise support.

#### License:
For more information regarding this topic please read the following [Terms and Conditions.](https://fiftylist.vercel.app/html/termsandconditions.html)

<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Back to Home</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Back to Projects</button>     
</div>

---
