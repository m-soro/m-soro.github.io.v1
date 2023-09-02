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

export const ProjectData = [
  {
    id: 1,
    projectName: "PONG!",
    images: [
      `${imgUrl}pong/pong01${imgExt}`,
      "https://github.com/m-soro/Project_1/raw/main/image/demo-big-screen.gif?raw=true",
    ],
    summary: `My first project for Per Scholas Software Engineering Track. This is a Pong game in written in vanilla JavaScript.`,

    projectBullets: [
      "This app can be played with your phone or on the web.",
      "Control by dragging the mouse or keyboard keys if played on the web.",
      "Three levels of difficulty.",
      "Options to toggle sounds and background music.",
      "Minimal design and intuitive.",
    ],
    moreDetail: [
      `This is a collision based game. I knew I wanted to create something interactive and that I would like to play. 
       I decided to do this project because I wanted to learn about collision based games.`,
      `My original plan was to create an object oriented game but that proved to be difficult. After this project was built I could see how I could re-write this following object oriented principles.`,
      `Design wise, I kept the design to a minimum. I added some "keep playing" motivating messages every 20th score to make it more fun and also a chime every 100th score.`,
      `I had a lot fun building and playing this app. Read more details about it in the github repo.`,
    ],
    stack: [`${url}JavaScript${ext}`, `${url}HTML${ext}`, `${url}CSS${ext}`],
    demoLink: "https://m-soro.github.io/Project_1/",
    repoLink: "https://github.com/m-soro/Project_1",
    repoAPI: "https://api.github.com/repos/m-soro/Project_1",
  },
  {
    id: 2,
    projectName: "My Portfolio",
    images: [
      `${imgUrl}portfolio/portfolio01${imgExt}`,
      `${imgUrl}portfolio/portfolio02.gif`,
      `${imgUrl}portfolio/portfolio03${imgExt}`,
    ],
    summary: `My portfolio built with React with the goal of to be as low maintenance as much as possible.`,

    projectBullets: [
      "I created this portfolio website with the goal of being easy to maintain.",
      "This single page is created with React and deployed in Github Pages.",
      "Uses Github API to pull relevant data. Shows latest activity of each project.",
    ],
    moreDetail: [
      `One problem with portfolio website is the difficulty of maintenance. This portfolio is built to avoid that problem.`,
      `As much as possible, I do not want hard code anything specifically dates. The data and components are kept separate and follows a structure to render.`,
      `I wanted to create a portfolio that iss responsive, minimal, clean and looks polished that will be a breeze for me to maintain.`,
      `I'm using Github API to call relevant keywords that appears in tags section, created date and updated to show lastest activity of each project.`,
      `See the source code in github.`,
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
    id: 3,
    projectName: "Hotel Webscraper",
    images: [
      "src/assets/images/mostay/mostay01.png",
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/mo_stay.png",
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/demo.gif",
    ],
    summary: `A python webscraper built for checking hotel's available discounted stays.`,

    projectBullets: [
      "I used this program to keep track of hotel availabilities.",
      "Returns three months availabilities of each properties selected.",
      "Written in python and used pillow library to handle images.",
    ],
    moreDetail: [
      `This is the first version of this program. Back when I was still a hotel worker, we get amazing hotel discount benefits,  the problem is that its too difficult to chain which locations that are available within reasonable distance from each other.`,
      `Instead of just checking each hotel's site all the time, I created this program so I could easily plan to potentially hotel hop after I exhausted my discounted nights from another property.`,
      `For the second version of this app, I created a front end using flask library which is deployed in heroku(back when it was free). See the seond version source code here: https://github.com/m-soro/getmostay.`,
      `See the source code and more details in github.`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink: "https://m-soro.github.io/mostay/",
    repoLink: "https://github.com/m-soro/mostay",
    repoAPI: "https://api.github.com/repos/m-soro/mostay",
  },
  {
    id: 4,
    projectName: "Transit Departures or Delays",
    images: [
      "src/assets/images/wmata/wmata01.png",
      "https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/demo.gif",
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/demo.gif",
    ],
    summary: `A python script to check train times.`,

    projectBullets: [
      "I used this terminal program to check train times or delays.",
      "This terminal app makes an API call to WMATA.",
      "Written in python.",
    ],
    moreDetail: [
      `Even though I live nearby the train station, I *sometimes* still miss the train which causes me to be late.`,
      `Instead of downloading another app in my phone or checking the webiste every morning, I run this script in my terminal to check for up to date departures or delays.`,
      `See the source code and more details in github.`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink: "https://m-soro.github.io/wmata_dc_metro_train_times_v2/",
    repoLink: "https://github.com/m-soro/wmata_dc_metro_train_times_v2",
    repoAPI:
      "https://api.github.com/repos/m-soro/wmata_dc_metro_train_times_v2",
  },
  {
    id: 5,
    projectName: "Pixel Art Maker",
    images: [
      "src/assets/images/pong/pong01.png",
      "https://github.com/m-soro/Intro-to-Programming/raw/main/pixel-art-maker.gif",
    ],
    summary: `Get creative! create your own pixel art!`,

    projectBullets: [
      "This is my very first JavaScript app.",
      "Building this project got me started with my programming journey!",
    ],
    moreDetail: [
      `This project was done to complete the intro to programming nanodegree by Udacity based on defined rubric.`,
      `As this was my very first project, it thought me a lot about problem solving and always checking before proceeding any further. After taking this introductory course and building this project made me very interested in learning how to code.`,
      `Even though this is my very first project, I just didnt want to create something that meets the minimum. I added a header and footer and a collapsible that contains instructions.`,
      `Coming up with ideas and then proceeding to make it happen, even faced with challenges is the aspect that I love about programming.`,
      `Create something cool and click demo! See the source code in github.`,
    ],
    stack: [`${url}JavaScript${ext}`, `${url}HTML${ext}`, `${url}CSS${ext}`],
    demoLink: "https://m-soro.github.io/Pixel-Art-Maker",
    repoLink: "https://github.com/m-soro/Pixel-Art-Maker",
    repoAPI: "https://api.github.com/repos/m-soro/Pixel-Art-Maker",
  },
  {
    id: 6,
    projectName: "Explore Cities Bike Share",
    images: [
      "src/assets/images/bikeshare/bikeshare01.png",
      "src/assets/images/bikeshare/bikeshare02.png",
    ],
    summary: `Using python and pandas dataframe to investigate a real data set.`,

    projectBullets: [
      "I learned a lot from this project about manipulating data. It was written in python using google colab.",
      "With this project I cleaned the data and manipulated it.",
      "This project made me really like coding in python with all of its built in methods and clean syntax.",
    ],
    moreDetail: [
      `This is project from Udacity Data Science with python. To pass, this project must meet the rubric requirements.`,
      `Writing this project really gave me a firm understanding of data types in python. I used pandas and numpy libraries to manipulate the data.`,
      `As for every project, I didn't just want to submit something that just meets the minimum. I challenged myself to come up with other features, such as additional filters and specifiying how many results to return.`,
      `I wrote an extensive description about this project here: https://m-soro.github.io/Data-Science-with-Python/projects/project2.html`,
      `Create something cool and click demo! See the source code in github.`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink:
      "https://colab.research.google.com/drive/1Uunf4ash0c2BRQKtqkhEs3PHSI3FNV3P?usp=sharing",
    repoLink: "https://github.com/m-soro/bikeshare_project",
    repoAPI: "https://api.github.com/repos/m-soro/bikeshare_project",
  },
];
