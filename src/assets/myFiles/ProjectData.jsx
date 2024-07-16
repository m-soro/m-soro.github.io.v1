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
    projectName: `Watt Wise - Utility Management Solution`,
    images: [
      `${imgUrl}wattwise/01${imgExt}`,
      `${imgUrl}wattwise/02${imgExt}`,
      `${imgUrl}wattwise/03${imgExt}`,
      `${imgUrl}wattwise/04${imgExt}`,
      `${imgUrl}wattwise/05${imgExt}`,
      `${imgUrl}wattwise/06${imgExt}`,
    ],
    summary: `A cutting-edge Salesforce solution for managing utility ⚡🌱. 
              Empower customers to manage, monitor, and optimize utility services through a personalized portal 🌍. 
              Internal users enjoy streamlined account management, detailed tracking, and efficient scheduling. 
              Watt Wise offers real-time billing, seamless service transfers, and robust customer support. 
              Your ultimate energy companion for a sustainable and efficient future! 🌿💡. 
    `,

    projectBullets: [
      `As part of the Meter Data Management Services Team, I developed custom components using Apex, JavaScript, and CSS to display aggregated utility data in a client-side portal. This enhances account managers' ability to oversee customer utility usage and optimizes the user experience with seamless data integration and intuitive interfaces`,
      `Customers benefit from a personalized portal that offers real-time billing updates, seamless service transfers, and robust customer support. This ensures a smooth, efficient, and user-friendly way to manage their utility services, track usage, and handle service requests.`,
      `Internal end-users enjoy streamlined account management, detailed usage tracking, and efficient service scheduling. By implementing custom metadata types and scheduled flows, the project ensures accurate invoicing and billing, while Agile collaboration and tools like DevOps Center and Jira drive continuous improvement and project success.`,
    ],
    moreDetail: [
      `Watt Wise is a comprehensive utility management platform built within the Salesforce ecosystem. Our project replicates the functionality of the Salesforce Energy and Utilities Cloud without incurring additional costs, providing essential tools to manage customer accounts, utility usage, billing, and service requests. This platform features a customer portal for self-service and internal tools for efficient customer support. ⚡🌿`,
      `🌟 My Contributions (Meter Data Management System Team) 📈🛠️`,
      `󠁛󠁛󠁛󠁝✅ Developed Custom Components: Utilized Apex, JavaScript, and CSS to display aggregated utility data in a client-side portal, enhancing account managers' ability to oversee customer utility usage.`,
      `✅ Implemented Custom Metadata Types: Facilitated accurate invoicing and billing through custom metadata types and scheduled flows.`,
      `✅ Configured Salesforce Org: Created custom objects and optimized record pages for better user experience.`,
      `✅ Integrated Components: Ensured seamless functionality and improved user experience by integrating custom components.`,
      `✅ Agile Collaboration: Participated in Agile sprints, story pointing, and utilized DevOps Center and Jira for project management.`,
      `🌟 Key Features of Watt Wise 💡`,
      `✅ Customer Portal: View meter usage, billing statements, payment methods, and manage services.`,
      `✅ Service Management: Add new services, transfer services, and schedule appointments.`,
      `✅ Billing and Payments: View bills, set up payment methods, and pay invoices.`,
      `✅ Usage Tracking: Detailed utility usage with data fetched via external API callouts.`,
      `✅ Internal Tools: Access detailed customer information, manage service appointments, and handle support cases.`,
      `✅ Scalable Design: Flexible and customizable for various business needs.`,
      `🌟 Benefits for Customer Portal Users 👥`,
      `✅ Enhanced Oversight: Utilize custom components to get a comprehensive view of customer utility usage.`,
      `✅ Efficient Billing: Accurate invoicing and billing facilitated by custom metadata and scheduled flows.`,
      `✅ Streamlined Operations: Easily manage customer accounts, service appointments, and support cases through optimized tools.`,
      `🌟 Development Process 🚀`,
      `✅ Agile Methodology: Adopted one-week sprints, daily stand-ups, and weekly planning/retrospective ceremonies for continuous improvement and flexibility.`,
      `✅ Collaboration Tools: Utilized GitHub for version control, Jira for task management, and DevOps Center for deployment and operations.`,
      `✅ Planning and Design: Created detailed entity relationship diagrams (ERDs) and process flow diagrams to ensure a seamless system architecture and user experience.`,
      `🌟 Team Organization 🏅`,
      `✅ Meter Data Management System (MDMS) Team: Integrated and managed utility and meter services, handled endpoints for meter data, and maintained meter history.`,
      `✅ Customer Information System (CIS) Team: Managed customer accounts, profiles, and billing information, enabling invoice viewing and bill payment.`,
      `✅ Service and Support Team: Provided customer service information and assistance, implemented service appointment scheduling, and managed cases.`,
    ],
    stack: [
      `${url}Salesforce${ext}`,
      `${url}SQL${ext}`,
      `${url}JavaScript${ext}`,
      `${url}HTML${ext}`,
      `${url}CSS${ext}`,
    ],
    demoLink: "https://awcomputing-4e9.my.salesforce.com/",
    repoLink: "",
    repoAPI:
      "https://api.github.com/repos/skillstorm-congo/20240422-Sf-AFS-Project3",
  },
  {
    id: 2,
    projectName: `Capstone - Open Peaks Version 2`,
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
      `Open Peaks Version 2 showcases my top-notch web app skills, especially for fellow snow enthusiasts. 
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
      `Creating a portfolio isn't just about showcasing work; it's an ongoing journey towards an effortlessly sleek and perpetually 
      updated platform. My approach? Steering clear of tangled, hardcoded dates 🗓️. Everything, from data to components, adheres to 
      a meticulously organized structure, ensuring a seamless rendering process.🌟`,
      `Picture a portfolio that isn't just responsive but embodies minimalism, pristine cleanliness, and an unmistakably polished 
      aesthetic—all while remaining an absolute delight to maintain. That's the main idea behind this project.`,
      `Powered by the GitHub API 🚀 , this platform intelligently extracts relevant keywords, creation, and update dates, offering 
      visitors real-time insights into each project's latest activity.`,
      `But that's not all—the inclusion of the NPM package swiper elevates the experience, enabling users to effortlessly swipe 
      through a visual cascade of images, adding a touch of interactivity to the browsing journey.`,
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
    id: 6,
    projectName: "Vacancy Spotter",
    images: [
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/mo_stay.png",
      "https://raw.githubusercontent.com/m-soro/mostay/main/files/demo.gif",
      `${imgUrl}mostay/mostay01${imgExt}`,
    ],
    summary: `Unlock hotel availabilities with a snap! 🔍 My hotel web scraper streamlines finding discounts and reveals 
    three months of vacancies at a glance. Make vacation planning a delightful breeze. 🌟🖥️ `,

    projectBullets: [
      `I utilized this tool to efficiently monitor and manage discounted hotel availabilities. 
      No more manual searching through various hotel websites!`,
      `Returns an insightful three-month availability status for each selected property. 
      This quick glance at upcoming vacancies made planning a breeze.`,
      `Created in Python, this tool employed the powerful Pillow library to seamlessly capture and manipulate screenshots. 
      The magic behind handling the visuals!`,
      `I had a lot of fun building this project that I extended it! I created a user-friendly front-end using Flask. 
      This upgrade enhanced accessibility and added a touch of sophistication to the experience.`,
      `Please note: This project specifically caters to the Mandarin Oriental Website. Unfortunately, as I am not an employee 
      of Mandarin Oriental anymore, access to discount codes is not available to be used with this tool.`,
    ],
    moreDetail: [
      `Let's time travel back to my days working at hotels. One of the coolest perks was scoring fantastic discounts 
      at various properties. But here's the catch: figuring out which hotels had available rooms nearby each property 
      was a real challenge. 🏨💻`,
      `So, I put on my coding hat and created the first version of this program! Instead of endlessly checking each 
      hotel's website, I created a nifty terminal tool. Its job? To help me plan potential hotel hops after I'd used up my 
      discounted nights elsewhere. 🌟✨`,
      `Now, for the sequel – Version 2! 🎬🍿 I took things a step further and built a sleek front-end using the 
      Flask library 🌐✨, which I then deployed on Heroku (back when it was still in its free glory days!) 😭. 
      You can check out the source code for this second iteration right here 👉 https://github.com/m-soro/getmostay.`,
      `For more details about this awesome project, make sure to dive into my GitHub Repo! 🚀🔍✨`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink: "https://m-soro.github.io/mostay/",
    repoLink: "https://github.com/m-soro/mostay",
    repoAPI: "https://api.github.com/repos/m-soro/mostay",
  },
  {
    id: 7,
    projectName: "Terminal Transit Ticker",
    images: [
      "https://raw.githubusercontent.com/m-soro/wmata_dc_metro_train_times_v2/main/files/demo.gif",
      `${imgUrl}wmata/wmata01${imgExt}`,
    ],
    summary: `Ever felt the frantic rush to catch that train, only to miss it by a hair? 🤦‍♂️💥 Enter this Python wizardry — 
    a savvy terminal program that fetches live train times and delays from the Washington Metropolitan Area Transit Authority (WMATA). 🚇`,

    projectBullets: [
      `This trusty terminal app is my go-to for peeking at real-time train departures and potential delays.`,
      `With a simple API call, it taps into WMATA's treasure trove of transit information.`,
      `Bid farewell to frantic app checks—this script keeps your commute on track with a quick keystroke.`,
    ],
    moreDetail: [
      `Mornings can be chaotic, and missing the train used to be my signature move. 🚉🤦‍♂️  But with this script, 
      I bid adieu to app downloads and frantic webpage checks.`,
      `Now, a quick tap on my terminal reveals the latest departures and alerts, keeping my commute right on track! 
      May your journeys be hassle-free and right on time! 🕥`,
      `Discover more about this transit tale within my GitHub Repo.🔍🌟`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink: "https://m-soro.github.io/wmata_dc_metro_train_times_v2/",
    repoLink: "https://github.com/m-soro/wmata_dc_metro_train_times_v2",
    repoAPI:
      "https://api.github.com/repos/m-soro/wmata_dc_metro_train_times_v2",
  },
  {
    id: 8,
    projectName: "Pixel Art Maker",
    images: [
      `${imgUrl}pixelart/pixelart01${imgExt}`,
      "https://github.com/m-soro/Intro-to-Programming/raw/main/pixel-art-maker.gif",
    ],
    summary: `Explore the world of creativity with Pixel Art Maker, a JavaScript pixel playground where your pixel designs comes to life! 🎨 🖼️✨`,

    projectBullets: [
      `Get creative in this pixel playground where you can create fun designs pixel by pixel. Build your art using a wide spectrum of vibrant colors!`,
      `This project marked the beginning of my exciting exploration into the world of programming and problem-solving.`,
      `Beyond the basics, this project goes the extra mile. I didn't settle for the minimum; I incorporated a personalized touch by adding a dynamic header, 
      footer, and collapsible instructions, elevating the user experience.`,
    ],
    moreDetail: [
      `This project signifies the first step in my coding journey. Through trial, error, and persistent tinkering, I explored the 
      fascinating world of JavaScript, revealing the joys of codes. 💻🚀`,
      `Beyond just code, I added a few touches to make this more than just a basic pixel art tool. By adding a dynamic header, 
      a footer that pops, and collapsible instructions, I strived to bridge the gap between creativity and user experience. 🌟🎩`,
      `This project isn't just about painting pixels; it's about imagination, problem-solving, and overcoming challenges. 
      It speaks volumes about the joy of bringing ideas to life through code, even when faced with hurdles. 🧩🌟`,
      `Create your pixelated masterpiece now and dive into the project! Explore the source code on my GitHub Repo! 🎉🔍`,
    ],
    stack: [`${url}JavaScript${ext}`, `${url}HTML${ext}`, `${url}CSS${ext}`],
    demoLink: "https://m-soro.github.io/Pixel-Art-Maker",
    repoLink: "https://github.com/m-soro/Pixel-Art-Maker",
    repoAPI: "https://api.github.com/repos/m-soro/Pixel-Art-Maker",
  },
  {
    id: 9,
    projectName: `Discovering Bikeshare Trends`,
    images: [
      `${imgUrl}bikeshare/bikeshare01${imgExt}`,
      `${imgUrl}bikeshare/bikeshare02${imgExt}`,
    ],
    summary: `Hop on a virtual ride through the bustling streets of Chicago, New York City, and Washington with the Bikeshare 
    Explorer project - an interactive Python journey into the heart of urban mobility! 🚲💨`,

    projectBullets: [
      `Take a thrilling dive into city dynamics! Explore popular biking routes, discover hotspots, and unravel fascinating urban 
      travel patterns across Chicago, New York City, and Washington.`,
      `Buckle up for an interactive journey! Customize filters, unveil ride statistics, and peek into user demographics, all while 
      steering through Python-powered data exploration.`,
      `Dive into the code, unveil the secrets behind lambdas, functions, and Pandas, as Python transforms raw data into an 
      immersive urban adventure.`,
    ],
    moreDetail: [
      `Dive into this data science project with Udacity's Data Science with Python course! 🚀 This project was an exciting expedition 
      into Python's data types, where Pandas and NumPy became my trusty companions on this data adventure.`,
      `This project wasn't just an assignment; it was an adventure! Exploring the fascinating nuances of data types in Python, I wielded 
      the mighty Pandas and NumPy libraries to uncover the secrets hidden within the datasets. 🕵️`,
      `But hey, I'm all about going beyond expectations! I spiced things up by adding more flair—think enhanced filters and custom result 
      settings—transforming a data exploration project into a playground of endless possibilities!`,
      `This journey wasn't merely about crunching numbers; it was about discovering stories within the data. 📊✨ And guess what? 
      I've meticulously documented every twist and turn of this incredible expedition, offering a peek into the exciting world of 
      data exploration right here 👉 https://m-soro.github.io/Data-Science-with-Python/projects/project2.html`,
      `If you're hungry for more  or curious to see the source code hop over to my GitHub Repo! 🌟💻 `,
    ],
    stack: [`${url}Python${ext}`],
    demoLink:
      "https://colab.research.google.com/drive/1Uunf4ash0c2BRQKtqkhEs3PHSI3FNV3P?usp=sharing",
    repoLink: "https://github.com/m-soro/bikeshare_project",
    repoAPI: "https://api.github.com/repos/m-soro/bikeshare_project",
  },
  {
    id: 10,
    projectName: "Decoding Trends in FBI NICS Background Checks",
    images: [`${imgUrl}nics/nics02${imgExt}`, `${imgUrl}nics/nics01${imgExt}`],
    summary: `Step into the heart of American firearm checks with this NICS data science project! 🔎 I delved into two decades of data, 
    decoding the intricacies behind background checks. Uncover the trends, peek into the political pulse, and witness how holidays 
    and societal events shape the nation's firearm ownership landscape.`,

    projectBullets: [
      `Dive into the heartbeat of firearm ownership - discover the pulse of background checks across days, months, and years, 
      revealing the cadence of gun sales.`,
      `Journey through two decades of background check data and see the connections between politics, holidays, and societal 
      rhythms, uncovering trends that illuminate the pulse of firearm activities.`,
      `Go beyond the numbers, venture into the world of data exploration, where histograms, line charts, and bar plots paint 
      a vibrant canvas of insights.`,
    ],
    moreDetail: [
      `Ever wondered what happens behind the scenes when someone tries to buy a firearm? In this project I discover insights into the 
      National Instant Criminal Background Check System (NICS) - the gatekeeper to firearm ownership in the United States.`,
      `This project is a data-driven expedition where numbers and trends tell stories. The journey begins with the basics, sifting 
      through vast datasets, cleaning them up, and preparing for the unknown.`,
      `As I delve deeper, colorful visualizations paint a vivid picture. 📊 Histograms tower with the distribution of handgun, long gun, 
      and other firearm background checks over two decades. I uncover peaks on Fridays and Mondays and unveil the mystery 
      behind why December, March, and November buzz with background check activity.`,
      `But wait, there's more! Politics enters the scene as I notice spikes during election years. States like New Jersey, Hawaii, 
      and the District of Columbia emerge with intriguing background check stats.`,
      `The plot thickens as limitations rear their heads. Our dataset lacks the full story, unable to reveal demographics or 
      directly correlate checks with actual purchases. Yet, I press on, unearthing remarkable growth rates in states like the 
      District of Columbia, where background checks skyrocketed by a whopping 67,458% from 2000 to 2020! 🚀`,
      `Finally, amidst the data treasures lies a golden nugget of insight: Fridays and Mondays light up with checks, holiday months 
      sparkle with firearm wishes, and political climates cast shadows on background check trends. 📈`,
      `This journey isn't just about numbers; it's about unraveling the hidden tales within datasets, exploring trends, and 
      understanding the intricacies between firearm ownership, politics, and societal rhythms. 🌐`,
      `If you're eager to explore the raw data, charts, and scripts behind this analysis, find all these in my GitHub Repo.🌟`,
    ],
    stack: [`${url}Python${ext}`],
    demoLink:
      "https://nbviewer.org/github/m-soro/Data_Analyst/blob/main/projects/project2/Project2_DAND_final.ipynb",
    repoLink: "https://m-soro.github.io/Data_Analyst",
    repoAPI: "https://api.github.com/repos/m-soro/Data_Analyst",
  },
];
