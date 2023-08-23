import './node_modules/modern-normalize/modern-normalize.css'
import './style.css'

const projectData = [
  {"project": "https://exodecode.com", "description" : "I make music as a hobby from time to time so I decided to make a music player for some of my tracks. Originally written in vanilla js but later was ported to react."},
  {"project": "https://alpacaattic.com", "description" : "Mock web store front made with vanilla js."},
  {"project": "https://funny-cendol-681c20.netlify.app/", "description" : "Procedural map generator written with vanilla javascript."},
];

const title = `
`

const summary = `
<div class="summary">
  <div style="justify-self: center; align-self: center">
    <img src="/portrait-temp.png" class="portrait"/>
  </div>
  <div class="summary-text">
    <h1 class="welcome-text">Welcome to my Front End Developer Portfolio!</h1>
    <p>Hi I'm Nick! I like to make websites and code things. :p</p>
  </div>
</div>
`;

const aboutMe = `
  <h2>Who Am I:</h2>
  <p> I'm a dedicated and enthusiastic front-end developer with a keen eye for design and an insatiable curiosity for emerging web technologies. My mission is to seamlessly merge aesthetics with functionality, producing websites that not only look great but also provide an exceptional user experience.  </p>
  <p> I'm thrilled to present a compilation of my passion for crafting captivating and intuitive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I've embarked on a journey to transform ideas into visually stunning and functional digital realities. This portfolio showcases a selection of projects that highlight my expertise and creativity in front-end development.  </p>

  <h2>What I Do:</h2>
  <p>
    My primary focus is on creating responsive and interactive websites that adapt fluidly to various devices and screen sizes. I excel in crafting user interfaces that are not only visually pleasing but also optimized for speed and accessibility. Leveraging the latest tools and frameworks, I bring life to static designs through animations, transitions, and engaging user interactions.
  </p>
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
  <ul>
  ${projectData.map(p => `<li><a href="${p.project}" target="_blank">${p.project}</a> - ${p.description}</li>`).join('')}
  </ul>
`;

const outro = `
  <p>Thank you for visiting my Front End Developer Portfolio. Feel free to explore my projects and get in touch to discuss potential collaborations or just to say hello!</p>
`;

document.querySelector('#app').innerHTML = `
  <div class="content">
    <div class="card">
      ${summary}
      ${aboutMe}
      ${projects}
      ${outro}
    </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
