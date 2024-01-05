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
    projectName: `Capstone Project - Open Peaks Version 2`,
    images: [
      `${imgUrl}openpeaksv2/07${imgExt}`,
      `${imgUrl}openpeaksv2/04${imgExt}`,
      `${imgUrl}openpeaksv2/05${imgExt}`,
      `${imgUrl}openpeaksv2/01${imgExt}`,
      `${imgUrl}openpeaksv2/02${imgExt}`,
      `${imgUrl}openpeaksv2/03${imgExt}`,
      `${imgUrl}openpeaksv2/demo${gifExt}`,
    ],
    summary: `A MERN stack app for snow enthusiasts🏂⛷️. Discover, compare, and curate your dream ski and snowboarding 
    destinations worldwide 🌍 Your dashboard is your personalized ticket to create, manage, and tailor lists of 
    top-notch ski resorts. It's your ski buddy for an epic snow-filled journey! 🏔️✨. 
    `,

    projectBullets: [
      `Open Peaks Version 2 is the upgraded and improved version of my second project.`,
      `Equipped with user authentication and provides complete CRUD (Create, Read, Update, Delete) functionality, 
      allowing users to effortlessly manage their preferred ski resort list.`,
      `The project is actually two interconnected applications that seamlessly communicate with each other. 
      This connectivity ensures a smooth transfer of data and interactions across various sections of the system, 
      resulting in a more unified and streamlined user experience.`,
    ],
    moreDetail: [
      `Open Peaks Version 2 was my epic finale during the Full Stack Software Engineering program at Per Scholas! 🚀 
      It's this cool, all-in-one MERN app tailor-made for ski and snowboard enthusiasts eager to explore and compare 
      top-notch snow destinations. 🏂❄️.`,
      `My mission? Creating this slick platform where logged-in users effortlessly handle their ski resort bucket lists. 
      With MongoDB, Express, React, and Node.js in my tool box, I facilitated seamless data flow between the back-end and 
      front-end, ensuring a smooth data flow. 🌊`,
      `CRUD operations were the key! Users could Create, Read, Update, and Delete their favorite ski spots. 
      I incorporated Material UI and Pico.css to enhance the visuals—resulting in picture-perfect design that shines on any device! 🎨✨`,
      `Working on User authentication felt like a windy chairlift ride—I had to ensure data moved flawlessly
      between different parts while keeping everything locked up tight. 
      And wrangling data from external APIs was like navigating a ski slope: exhilarating but demanding!⛷️`,
      `Where is this app deployed you ask? Well, the backend chills ❄️ in Render, while the frontend says Hi! 👋 from Render and Netlify.`,
      `Open Peaks Version 2 is my ticket to exhibit top-notch web app skills, especially for fellow snow enthusiasts. 
      Full-stack proficiency, nifty user authentication, and sleek design — that's what it's all about! 🌟`,
      `If you want more details and insights in this snow-filled app, head on over to my GitHub Repo! 🌨️✨`,
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
    demoLink: "https://openpeaks.onrender.com/",
    repoLink: "https://github.com/m-soro/Project_3",
    repoAPI: "https://api.github.com/repos/m-soro/Project_3",
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
    summary: `Open Peaks is a React-fueled app that spills the details on ski resorts—snow stats, chairlift vibes, 
    and up-to-date weather! 🏔️❄️ Plus, it's as slick and easy to use as your favorite pair of ski boots! 🎿✨.`,

    projectBullets: [
      `Using React, I made this single page app that shows details about ski resorts conditions.`,
      `I used two different sources (API endpoints) to collect data, ensuring the website dynamically 
      update based on the fetched information.`,
      `To make the site more interactive, I incorporated a special scrolling effect using the react-parallax NPM package.`,
      `I made sure the website was resilient by implementing error handling methods, 
      ensuring smooth data retrieval and does not crash even when things went wrong.`,
      `I wanted the app to look sleek and attractive, so I prioritized clean design and loaded it with beautiful imagery.`,
    ],
    moreDetail: [
      `Open Peaks is an app I built using React.js. The main idea behind it was to make a website 
      where people can easily check out info about different ski resorts ⛷️. I used two APIs to grab all the details 
      about these resorts, like how much snow 🌨️ they've got, if the chairlifts are working 🚠, and what the weather's like there.`,
      `I worked hard on making the website interesting for folks who use it 🏂. 
      I wanted it to be fun to look at and easy to use. So, I added some cool parallax effect when you scroll through the site. 
      It gives a neat feeling like you're moving along with the page.`,
      `The tough part was making sure all the images didn't slow down how fast the site loads. 
      I had to make the images smaller without making them look distorted to keep things speedy. 
      Also, I made sure that if something goes wrong while getting the info, the site won't crash—it'll
       show an error message instead. 👍`,
      `Oh, and this app works well on all devices! Whether you're on a computer, a tablet, or a phone 📱, 
      it should look good and work smoothly.`,
      `Although I faced some troubles with the data being a bit inconsistent sometimes, 
      causing some mix-ups with the resort info, the project went pretty well overall. 
      I'm planning to make an even cooler version called Open Peaks Version 2. 
      This new one will let users create their own accounts, log in, and save their favorite ski spots. 
      Pretty neat right? 😎`,
      `As an extra help for my classmates, I made a video tutorial 🧑‍💻 to show other developers how to easily put 
      their similar websites on GitHub Pages and Netlify.`,
      `If you're curious and want to know more about how I built this app, 
      check out the source code or see my video tutorial, you can find all that cool ❄️ stuff in my on GitHub Repo!`,
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
    projectName: "Pong!",
    images: [
      `${imgUrl}pong/pong03${imgExt}`,
      `${imgUrl}pong/pong04${imgExt}`,
      "https://github.com/m-soro/Project_1/raw/main/image/demo-big-screen.gif?raw=true",
      `${imgUrl}pong/pong01${imgExt}`,
    ],
    summary: `Pong! 🏏 is my very first project at Per Scholas — an arcade-style game made using 
    plain ol' JavaScript, HTML, and CSS! Sounds simple but, this project is all about giving you an interactive experience. 
    And guess what? It's super responsive too! 🚀✨`,

    projectBullets: [
      `A classic collision-based game where a player controls the paddle to hit the ball back and forth.`,
      `It features multiple levels of difficulty, dynamic elements, sound effects, interactive controls, 
      and UI enhancements for an engaging user experience.`,
      `The player can control the paddle using keyboard or mouse.`,
      `The game maintains a minimalist and clean design to focus on gameplay rather than excessive visuals.`,
    ],
    moreDetail: [
      `Pong! was my very first project at Per Scholas, where I dived into creating an old-school arcade-style 🏏  game. 
      Using technologies like JavaScript, HTML, and CSS - the building blocks of the web 🏗️ 
      I created this game to explore how objects in games interact.`,
      `Initially, I aimed to build the game by following "object-oriented principles." 
      However, that turned out to be a bit tricky, so I adapted a plan to work around it.`,
      `In terms of design, I kept things minimal and neat. To add some extra fun 😉 I included messages like "Keep it up!" 👍 
      when players hit every 20 points 🎉, and there's a cool chime that plays whenever the score reaches 100 points.`,
      `Creating and playing this game was super enjoyable 😁. If you're interested in knowing more about how I made it 
      or want to check out my source code, feel free to take a look at my GitHub Repo where I've shared all the details!`,
    ],
    stack: [`${url}JavaScript${ext}`, `${url}HTML${ext}`, `${url}CSS${ext}`],
    demoLink: "https://m-soro.github.io/Project_1/",
    repoLink: "https://github.com/m-soro/Project_1",
    repoAPI: "https://api.github.com/repos/m-soro/Project_1",
  },

  {
    id: 4,
    projectName: "React Portfolio",
    images: [
      `${imgUrl}portfolio/portfolio04${imgExt}`,
      `${imgUrl}portfolio/portfolio02${gifExt}`,
      `${imgUrl}portfolio/portfolio01${imgExt}`,
    ],
    summary: `My React portfolio 🚀 harnesses the power of the GitHub API to provide dynamic, real-time project insights. 
    Featuring an elegantly clean design ✨, intuitive navigation 🧭, and seamless functionality, it offers users a polished 
    and interactive browsing experience.`,

    projectBullets: [
      `A React-powered portfolio that's as smooth as it gets, blending a sleek design with effortless maintenance. 
      Mix in Pico.css to deliver a crisp and polished appearance!`,
      `Think easy updates! I've organized everything in separate bits and bobs, so tweaking, adding, or updating 
      is a breeze without messing with pesky details.`,
      `GitHub API magic at work! Stay updated with the latest buzz on each project - from creation dates, updated dates and keyword tags, 
      it's all dynamically pulled in. Plus, it's super responsive, looking slick on any device!`,
    ],
    moreDetail: [
      `Creating a portfolio isn't just about showcasing work; it's an ongoing journey towards an effortlessly sleek and perpetually updated platform. 
      My approach? Steering clear of tangled, hardcoded dates 🗓️. Everything, from data to components, adheres to a meticulously organized structure, 
      ensuring a seamless rendering process.🌟`,
      `Picture a portfolio that isn't just responsive but embodies minimalism, pristine cleanliness, and an unmistakably polished aesthetic—all while 
      remaining an absolute delight to maintain. That's the main idea behind this project.`,
      `Powered by the GitHub API 🚀 , this platform intelligently extracts relevant keywords, creation, and update dates, offering visitors real-time 
      insights into each project's latest activity.`,
      `But that's not all—the inclusion of the NPM package swiper elevates the experience, enabling users to effortlessly swipe through a visual 
      cascade of images, adding a touch of interactivity to the browsing journey.`,
      `Seeking engagement? The interactive contact form using EmailJS invites visitors to share thoughts, drop a line, or simply connect.👋💬`,
      `Curious to peek behind the scenes? 🔍 Dive into the source code on my GitHub Repo!`,
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
