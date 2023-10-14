/**
 * -----------------------
 * ABOUT THE PROJECT DATA
 * -----------------------
 * Each project object lives inside the ProjectData array and has the following properties:
 * id: int,
 * projectName: string, the Project's name,
 * images: array of urls, plan to have at least 2 images
 * summary: string, a paragraph intro
 * projectBullets: array of strings, features I want to point out
 * moreDetail: string, an array of string, this will appear as separate paragraphs under "About"
 * stack: array of tech icon image urls, pattern--> https://github.com/m-soro/icons/blob/main/icons/[ICONNAME].png?raw=true
 * demoLink: string, url of demo link pattern ---> https://m-soro.github.io/[REPONAME]
 * repoLink: string, url of repo link pattern ---> https://github.com/m-soro/[REPONAME]
 * repoAPI: string, url of repo's github api ---> https://api.github.com/repos/m-soro/[REPONAME]
 *
 * NOTES:
 * images and icons must be run thru @link https://tinypng.com/ to reduce file size.
 * create iphone and desktop mockup here: @link https://mockuphone.com/device
 * resize iphone mock up to: 250px * 467px using preview app
 * make sure desktop mock up screen shot is 1920px * 1200px --if not, then resize @link https://www.adobe.com/express/feature/image/resize
 * resize desktop mock up to: 816px * 816px using preview app
 * make pretty screen shots of source code here @link https://carbon.now.sh/
 * project images url should be in project's separate images folder.
 * tech icons must be named properly this will appear as alt text in images
 * images from github repo's source folder pattern ---> https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/[FOLDERNAME]/[IMAGENAME].png?raw=true
 *
 * IMPORTANT! REMEMBER TO RUN: `npm run build` and push to github to update!
 *
 */

// ICONS URL
let url = `https://github.com/m-soro/icons/blob/main/icons/`;
let ext = `.png?raw=true`;

// GITHUB'S REPO IMAGES
// pattern `${imgUrl}[FOLDERNAME]/[IMAGENAME]${imgExt}`
let imgUrl =
  "https://github.com/m-soro/m-soro.github.io/blob/main/src/assets/images/";
let imgExt = ".png?raw=true";
// if gif
let gifExt = ".gif?raw=true";

export const ProjectData = [
  {
    id: 1,
    projectName: "Pong!",
    images: [
      `${imgUrl}pong/pong03${imgExt}`,
      `${imgUrl}pong/pong04${imgExt}`,
      "https://github.com/m-soro/Project_1/raw/main/image/demo-big-screen.gif?raw=true",
      `${imgUrl}pong/pong01${imgExt}`,
    ],
    summary: `My first project for Per Scholas Software Engineering Track. Pong, is a collision based game in written in vanilla JavaScript.`,

    projectBullets: [
      "This app can be played with your phone or on the web.",
      "Control by dragging the paddle with your mouse or keyboard keys if played on the web.",
      "Three levels of difficulty.",
      "Options to toggle sounds and background music.",
      "Minimal design and intuitive.",
    ],
    moreDetail: [
      `I knew I wanted to create something interactive and that I would like to play. 
       I decided to do this project because I wanted to learn about collision based games.`,
      `My original plan was to create an object oriented game but that proved to be difficult. After this project was built I could see how I could re-write this following object oriented principles.`,
      `Design wise, I kept the design to a minimum. I added some "keep playing" motivating messages every 20th score to make it more fun and also a chime every 100th score.`,
      `I had a lot fun building and playing this app. Read more details about it in my GitHub repo.`,
    ],
    stack: [`${url}JavaScript${ext}`, `${url}HTML${ext}`, `${url}CSS${ext}`],
    demoLink: "https://m-soro.github.io/Project_1/",
    repoLink: "https://github.com/m-soro/Project_1",
    repoAPI: "https://api.github.com/repos/m-soro/Project_1",
  },
  {
    id: 2,
    projectName: "Open Peaks",
    images: [
      `${imgUrl}openpeaks/01${imgExt}`,
      `${imgUrl}openpeaks/02${imgExt}`,
      `${imgUrl}openpeaks/03${imgExt}`,
      `${imgUrl}openpeaks/05${gifExt}`,
    ],
    summary: `A React app that lets you check skiing and snowboarding conditions around the world!`,

    projectBullets: [
      "Completely responsive for desktop and mobile.",
      "Built with React. Uses async and await function to fetch data from two RapidAPI endpoints.",
    ],
    moreDetail: [
      `This is the second project for Per Scholas Software Engineering Track module 2.`,
      `View the comprehensive documentation and source code in my GitHub Repo.`,
    ],
    stack: [
      `${url}JavaScript${ext}`,
      `${url}React${ext}`,
      `${url}HTML${ext}`,
      `${url}CSS${ext}`,
    ],
    demoLink: "https://m-soro.github.io/Project_2/",
    repoLink: "https://github.com/m-soro/Project_2",
    repoAPI: "https://api.github.com/repos/m-soro/Project_2",
  },
  {
    id: 3,
    projectName: "Open Peaks Version 2",
    images: [
      `${imgUrl}openpeaksv2/01${imgExt}`,
      `${imgUrl}openpeaksv2/02${imgExt}`,
      `${imgUrl}openpeaksv2/03${imgExt}`,
      `${imgUrl}openpeaksv2/04${imgExt}`,
      `${imgUrl}openpeaksv2/05${imgExt}`,
      `${imgUrl}openpeaksv2/06${imgExt}`,
    ],
    summary: `A MERN stack application (MongoDB, Express, React and Nodejs). Users can create an account to track conditions of their favorite skiing and snowboarding destinations.`,

    projectBullets: [
      "This is the expanded version of my second project.",
      "Complete with user authentication and full CRUD features.",
      "Built two applications that communicates with each other.",
    ],
    moreDetail: [
      `This is my third and my capstone project for Per Scholas Software Engineering track.`,
      `Users can sign up, create multiple lists of their favorite resorts, it can also edited (list name only) and deleted.`,
      `Once list is created you are taken into your "dashboard", where you can get an overview of your listed resort's latest chair and lift statistics.`,
      `This app is completely mobile friendly/responsive and minimally styled and designed.`,
      `Back end is deployed in Render. Front end is deployed in both Render and Netlify.`,
      `More details can be found in my GitHub repo.`,
    ],
    stack: [
      `${url}JavaScript${ext}`,
      `${url}MongoDB${ext}`,
      `${url}Express${ext}`,
      `${url}React${ext}`,
      `${url}NodeJS${ext}`,
      `${url}HTML${ext}`,
      `${url}CSS${ext}`,
    ],
    demoLink: "https://m-soro.github.io/Project_3/",
    repoLink: "https://github.com/m-soro/Project_3",
    repoAPI: "https://api.github.com/repos/m-soro/Project_3",
  },
  {
    id: 4,
    projectName: "React Portfolio",
    images: [
      `${imgUrl}portfolio/portfolio04${imgExt}`,
      `${imgUrl}portfolio/portfolio02${gifExt}`,
      `${imgUrl}portfolio/portfolio01${imgExt}`,
    ],
    summary: `My React portfolio using the GitHub API to pull relevant data.`,

    projectBullets: [
      "I created this React portfolio with Pico.css with the goal of being easy to maintain.",
      "This single page app is created with React and deployed in Github Pages.",
      "Uses Github API to pull relevant data. Shows latest activity of each project.",
    ],
    moreDetail: [
      `One problem with portfolio website is the difficulty of maintenance. I built this to potentially avoid that problem.`,
      `As much as possible, I do not want hard code anything specifically dates. The data and components are kept separate and follows a structure to render.`,
      `I wanted to create a portfolio that is responsive, minimal, clean and looks polished that will be a breeze for me to maintain.`,
      `I'm using GitHub API to call relevant keywords that appears in tags section, created date and updated date to show latest activity of each project.`,
      `View the source code in my GitHub repo.`,
    ],
    stack: [
      `${url}JavaScript${ext}`,
      `${url}React${ext}`,
      `${url}HTML${ext}`,
      `${url}CSS${ext}`,
    ],
    demoLink: "https://m-soro.github.io/",
    repoLink: "https://github.com/m-soro/m-soro.github.io/tree/main",
    repoAPI: "https://api.github.com/repos/m-soro/m-soro.github.io",
  },
  {
    id: 5,
    projectName: "Hotel Availability Webscraper",
    images: [
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/mo_stay.png",
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/demo.gif",
      `${imgUrl}mostay/mostay01${imgExt}`,
    ],
    summary: `A Python webscraper built for checking available hotel discounted stays.`,

    projectBullets: [
      "I used this program to keep track of discounted hotel availabilities.",
      "Returns three months availabilities of each properties selected.",
      "Written in python and used pillow library to manipulate screenshots.",
      "I had a great time building this project, that I made a front end as well using the Flask library.",
    ],
    moreDetail: [
      `This is the first version of this program. Back when I was still a hotel worker, we get amazing hotel discount benefits, the problem is that its too difficult to chain which locations that are available within reasonable distance from each other.`,
      `Instead of just checking each hotel's website all the time, I created this terminal program so I could easily plan to potentially hotel hop after I exhausted my discounted nights from another property.`,
      `For the second version of this app, I created a front end using Flask library which is deployed in Heroku(back when it was free). You view the second version source code here 👉 https://github.com/m-soro/getmostay.`,
      `More details about this project can be found in my GitHub repo.`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink: "https://m-soro.github.io/mostay/",
    repoLink: "https://github.com/m-soro/mostay",
    repoAPI: "https://api.github.com/repos/m-soro/mostay",
  },
  {
    id: 6,
    projectName: "Transit Departures or Delays",
    images: [
      "https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/demo.gif",
      `${imgUrl}wmata/wmata01${imgExt}`,
    ],
    summary: `A Python terminal program to check train times.`,

    projectBullets: [
      "I used this Python terminal program to check train times or delays.",
      "This terminal app makes an API call to Washington Metropolitan Area Transit Authority (WMATA).",
    ],
    moreDetail: [
      `Even though I live nearby the 5 minutes away from train station, I *sometimes* still miss the train which causes me to be late.`,
      `Instead of downloading another app in my phone or checking the website every morning, I run this script in my terminal to check for up to date departures or delays.`,
      `More information can be viewed in my GitHub repo.`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink: "https://m-soro.github.io/wmata_dc_metro_train_times_v2/",
    repoLink: "https://github.com/m-soro/wmata_dc_metro_train_times_v2",
    repoAPI:
      "https://api.github.com/repos/m-soro/wmata_dc_metro_train_times_v2",
  },
  {
    id: 7,
    projectName: "Pixel Art Maker",
    images: [
      `${imgUrl}pixelart/pixelart01${imgExt}`,
      "https://github.com/m-soro/Intro-to-Programming/raw/main/pixel-art-maker.gif",
    ],
    summary: `Pixel Art Maker is written in vanilla JavaScript, where you can create your own pixel art!`,

    projectBullets: [
      "This is my very first JavaScript app.",
      "Building this project got me started with my programming journey!",
    ],
    moreDetail: [
      `As this was my very first project, it thought me a lot about problem solving. Building this project made me very interested in learning how to code.`,
      `Even though this is my very first project, I just didnt want to create something that meets the minimum. I added a header and footer and a collapsible that contains instructions.`,
      `Coming up with ideas and then proceeding to make it happen, even faced with challenges is the aspect that I love about programming.`,
      `Create something cool and click demo! See the source code in GitHub.`,
    ],
    stack: [`${url}JavaScript${ext}`, `${url}HTML${ext}`, `${url}CSS${ext}`],
    demoLink: "https://m-soro.github.io/Pixel-Art-Maker",
    repoLink: "https://github.com/m-soro/Pixel-Art-Maker",
    repoAPI: "https://api.github.com/repos/m-soro/Pixel-Art-Maker",
  },
  {
    id: 8,
    projectName: "Explore Cities Bike Share",
    images: [
      `${imgUrl}bikeshare/bikeshare01${imgExt}`,
      `${imgUrl}bikeshare/bikeshare02${imgExt}`,
    ],
    summary: `Using python and pandas dataframe to investigate a real data set.`,

    projectBullets: [
      "I learned a lot from this project about manipulating data. It was written in python using google colab.",
      "With this project I cleaned the data and manipulated it. Visualize and interpreted it.",
      "This project made me really like coding in python with all of its built in methods and clean syntax.",
    ],
    moreDetail: [
      `This is project from Udacity Data Science with python. To pass, this project must meet the rubric requirements.`,
      `Writing this project really gave me a firm understanding of data types in python. I used pandas and numpy libraries to manipulate the data.`,
      `As for every project, I didn't just want to submit something that just meets the minimum. I challenged myself to come up with other features, such as additional filters and specifiying how many results to return.`,
      `View my 🖊️ extensive documentation here 👉 https://m-soro.github.io/Data-Science-with-Python/projects/project2.html`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink:
      "https://colab.research.google.com/drive/1Uunf4ash0c2BRQKtqkhEs3PHSI3FNV3P?usp=sharing",
    repoLink: "https://github.com/m-soro/bikeshare_project",
    repoAPI: "https://api.github.com/repos/m-soro/bikeshare_project",
  },
  {
    id: 9,
    projectName: "Explore FBI NICS Background Checks",
    images: [`${imgUrl}nics/nics02${imgExt}`, `${imgUrl}nics/nics01${imgExt}`],
    summary: `This Python project explores the FBI NICS background checks.`,

    projectBullets: [
      "Using the National Instant Criminal Background Check System (NICS) data. I'm using Python, Pandas, and Matplotlib to wrangle, clean and present data.",
    ],
    moreDetail: [
      "Building this project was a great excercise to help solidify my knowledge in Python and its libraries.",
      `It was interesting building this project because I got a lot of practice and learned a lot about data types and operations that can be done with data.`,
      "View in depth 📄 documentation, processes involved and data interpretation by cliking the demo link.",
    ],
    stack: [`${url}Python${ext}`],
    demoLink:
      "https://nbviewer.org/github/m-soro/Data_Analyst/blob/main/projects/project2/Project2_DAND_final.ipynb",
    repoLink: "https://m-soro.github.io/Data_Analyst",
    repoAPI: "https://api.github.com/repos/m-soro/Data_Analyst",
  },
];
