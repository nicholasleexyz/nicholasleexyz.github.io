(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=[{project:"https://exodecode.com",description:"I make music as a hobby from time to time so I decided to make a music player for some of my tracks. Originally written in vanilla js but later was ported to react."},{project:"https://alpacaattic.com",description:"Mock web store front made with vanilla js."},{project:"https://funny-cendol-681c20.netlify.app/",description:"Procedural map generator written with vanilla javascript."}],c=`
<div class="summary">
  <div style="justify-self: center; align-self: center">
    <img src="/portrait-temp.png" class="portrait"/>
  </div>
  <div class="summary-text">
    <h1 class="welcome-text">Welcome to my Front End Developer Portfolio!</h1>
    <p>Hi I'm Nick! I like to make websites and code things. :p</p>
  </div>
</div>
`,l=`
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
  <ul>
  ${a.map(o=>`<li><a href="${o.project}" target="_blank">${o.project}</a> - ${o.description}</li>`).join("")}
  </ul>
`,p=`
  <a href="mailto:nicholasleexyz@gmail.com" target="_blank" >Contact Me</a>
`,u=`
  <p>Thank you for visiting my Front End Developer Portfolio. Feel free to explore my projects and get in touch to discuss potential collaborations or just to say hello!</p>
`;document.querySelector("#app").innerHTML=`
  <div class="content">
    <div class="card">
      ${c}
      ${l}
      ${d}
      ${p}
      ${u}
    </div>
  </div>
`;
