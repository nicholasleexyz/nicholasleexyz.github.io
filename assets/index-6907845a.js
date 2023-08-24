(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=[{project:"https://exodecode.com",description:"I make music as a hobby from time to time so I decided to make a music player for some of my tracks. Originally written in vanilla js but later ported to react.",preview:"/preview-exodecode.com.png"},{project:"https://alpacaattic.com",description:"Mock web store front made with vanilla js.",preview:"/preview-alpacaattic.com.png"},{project:"https://funny-cendol-681c20.netlify.app/",description:"Procedural map generator written with vanilla javascript.",preview:"/preview-funny-cendol-681c20.netlify.app.png"},{project:"https://lighthearted-mooncake-7fc852.netlify.app/",description:"War Card Game App. Built with vanilla js.",preview:"/preview-lighthearted-mooncake-7fc852.netlify.app.png"},{project:"https://musical-khapse-552528.netlify.app/",description:"Mock Plant Data App. Built with JQuery and Bootstrap",preview:"/preview-musical-khapse-552528.netlify.app.png"}],l=`
<div class="summary">
  <div style="justify-self: center; align-self: center">
    <img src="/portrait-temp.png" class="portrait"/>
  </div>
  <div class="summary-text">
    <h1 class="welcome-text">Welcome to my Front End Developer Portfolio!</h1>
    <p>Hi I'm Nick! I like to make websites and code things. :p</p>
  </div>
</div>
`,p=`
  <h2>Who Am I:</h2>
  <p> I'm a dedicated and enthusiastic front-end developer with a keen eye for design and an insatiable curiosity for emerging web technologies. My mission is to seamlessly merge aesthetics with functionality, producing websites that not only look great but also provide an exceptional user experience.  </p>
  <p> I'm thrilled to present a compilation of my passion for crafting captivating and intuitive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I've embarked on a journey to transform ideas into visually stunning and functional digital realities. This portfolio showcases a selection of projects that highlight my expertise and creativity in front-end development.  </p>

  <h2>What I Do:</h2>
  <p>
    My primary focus is on creating responsive and interactive websites that adapt fluidly to various devices and screen sizes. I excel in crafting user interfaces that are not only visually pleasing but also optimized for speed and accessibility. Leveraging the latest tools and frameworks, I bring life to static designs through animations, transitions, and engaging user interactions.
  </p>
`,d=`
  <h2>Projects:</h2>
  <h3>Explore a diverse array of projects that showcase my skills and creativity, including:</h3>
  <div style="display: flex; justify-content: center;">
    <ul style="display: flex; flex-flow: column; gap: 1rem; width: fit-content">
    ${c.map(i=>`
      <div style="display: flex; width: 100%; flex-wrap: wrap;">
        <img src="${i.preview}" class="preview-image">
        <li class="project-text"><a href="${i.project}" target="_blank">${i.project}</a> - ${i.description}</li>
      </div>
    `).join("")}
    </ul>
  </div>
`,n=`
  <a href="mailto:nicholasleexyz@gmail.com" target="_blank" >Email Me</a>
`,f=`
  <p>Thank you for visiting my Front End Developer Portfolio. Feel free to explore my projects and get in touch to discuss potential collaborations or just to say hello!</p>
`;document.querySelector("#app").innerHTML=`
  <div class="content">
    <div class="card">
      ${l}
      ${p}
      ${n}
      ${d}
      ${n}
      ${f}
    </div>
  </div>
`;
