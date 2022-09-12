<h1 align='center'>Weather App</h1>
<p align='center'>
Responsive Weather App with DarkMode <br>using NodeJS and TailwindCSS. <br>
<a href="https://bikas-weather-application.herokuapp.com/"><img src="https://img.shields.io/badge/DEMO-WeatherApp-9cf.svg?style=flat"></a>
</p>

<img height="75px" align='left' src="https://santiagocodes.github.io/santiagocodes/images/octocat-santiagocodes.png" alt="santiagocodes octocat" />

## Initial Setup

1. [Clone](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository) the repository.

-  On Git Bash navigate to the folder you want your cloned directory to be made.
-  Type `git clone https://git.heroku.com/bikas-weather-application.git`.
-  Press `enter`

2. Install package dependencies.

-  On Git Bash navigate to the cloned directory by typing `cd weather_website` and press `enter`.
-  Install dependencies by typing `npm i` or `npm install` and press `enter`.

## Scripts you can run in your terminal within this app...

`npm run start`

Note: This will fire up the local server so you can view the application locally in your browser (on localhost:3000). This is possible because the script `"start": "node src/app.js"` was added to package.json.

`npm run dev`

Note: This starts up the local developement server easily. This is possible because the script `"dev": "nodemon src/app.js -e js,hbs"` was added to package.json.
