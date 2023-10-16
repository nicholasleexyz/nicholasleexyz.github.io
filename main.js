import './node_modules/modern-normalize/modern-normalize.css'
import './style.css'

const projectData = [
  {
    "project": "https://mellow-bubblegum-042b96.netlify.app/",
    "description" : "Sudoku game and editor",
    "preview" : "/sudoku_create.png"
  },
  {
    "project": "https://exodecode.com",
    "description" : "I make music as a hobby from time to time so I decided to make a music player for some of my tracks. Originally written in vanilla js but later ported to react.",
    "preview" : "/preview-exodecode.com.png"
  },
  {
    "project": "https://alpacaattic.com",
    "description" : "Mock web store front made with vanilla js.",
    "preview" : "/preview-alpacaattic.com.png"
  },
  {
    "project": "https://funny-cendol-681c20.netlify.app/",
    "description" : "Procedural map generator written with vanilla javascript.",
    "preview" : "/preview-funny-cendol-681c20.netlify.app.png"
  },
  {
    "project": "https://lighthearted-mooncake-7fc852.netlify.app/",
    "description" : "War Card Game App. Built with vanilla js.",
    "preview" : "/preview-lighthearted-mooncake-7fc852.netlify.app.png"
  },
  {
    "project": "https://musical-khapse-552528.netlify.app/",
    "description" : "Mock Plant Data App. Built with JQuery and Bootstrap",
    "preview" : "/preview-musical-khapse-552528.netlify.app.png"
  },
];

const title = `
`

const summary = `
<div class="summary">
  <div style="justify-self: center; align-self: center">
    <img src="/portrait-temp.png" class="portrait"/>
  </div>
  <div class="summary-text">
    <h1 class="welcome-text">Welcome to my portfolio!</h1>
  </div>
</div>
`;

const aboutMe = `
  <h2>Who I am:</h2>
  <p>A seasoned web developer with a substantial five years of experience in software development. My professional journey is driven by a profound passion for continuous learning. I possess a comprehensive skill set covering web and game development and my portfolio showcases my creativity and passion for problem solving.  I'm all about staying on top of the latest trends and technologies.  I am dedicated to crafting efficient and responsive web solutions that elevate user experiences.  I am currently seeking to bring my expertise and enthusiasm to a dynamic team of like minded developers.</p>
  <h2>What I do</h2>
  <p>My creativity and passion for problem solving is reflected in the games and web apps I design. I enjoy being productive and efficient, for example I learned vim key bindings to be more ergonomic and to save time typing. I'm always working on a software project, be that a game or web app. Because learning and growth is important to me I recently completed the front end bootcamp at promineo tech. I also plan on taking the back end bootcamp at promineo tech in the near future to pursue full stack development.</p>
`;

const experience= `
  <h2>My Expertise:</h2>

  <p>
  HTML5 & CSS3: Building the foundation of every website with clean and semantic HTML markup, while using CSS to style and layout elements in a visually appealing manner.
  JavaScript & ES6+: Employing JavaScript to add interactivity, dynamic content, and client-side functionality to websites. I embrace modern ES6+ syntax for cleaner and more efficient code.
  Responsive Design: Ensuring websites look and function flawlessly across a variety of devices, from mobile phones and tablets to desktop screens.
  Front-End Frameworks: Proficient in utilizing frameworks like React or Vue.js to create modular and reusable components that streamline development and enhance maintainability.
  Web Performance Optimization: Implementing techniques such as minification, lazy loading, and caching to enhance website performance, resulting in faster load times and a smoother user experience.
  Cross-Browser Compatibility: Testing and ensuring consistent functionality and appearance across different web browsers.
  </p>
`;

const projects = `
  <h2>Projects:</h2>
  <h3>Explore a diverse array of projects that showcase my skills and creativity, including:</h3>
  <div style="display: flex; justify-content: center;">
    <ul style="display: flex; flex-flow: column; gap: 1rem; width: fit-content">
    ${projectData.map(p => `
      <div style="display: flex; width: 100%; flex-wrap: wrap;">
        <img src="${p.preview}" class="preview-image">
        <li class="project-text"><a href="${p.project}" target="_blank">${p.project}</a> - ${p.description}</li>
      </div>
    `).join('')}
    </ul>
  </div>
`;

const contact = `
  <a href="mailto:nicholasleexyz@gmail.com" target="_blank" >Email Me</a>
`;

const outro = `
  <p>Thank you for visiting my Portfolio. Feel free to explore my projects and get in touch to discuss potential collaborations or just to say hello!</p>
`;

document.querySelector('#app').innerHTML = `
  <div class="content">
    <div class="card">
      ${summary}
      ${aboutMe}
      ${contact}
      ${projects}
      ${contact}
      ${outro}
    </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
