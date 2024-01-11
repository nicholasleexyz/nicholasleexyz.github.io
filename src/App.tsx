import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { createSignal } from "solid-js";
// import createScrollPosition from "@solid-primitives/scroll";

import WhoIAm from './WhoIAm';
import WhatIDo from './WhatIDo';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';

const App: Component = () => {
  return (
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col h-screen">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-base-300 justify-center">
          <div class="navbar-start">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <a href="#who-i-am"><button class="btn btn-nav hidden lg:block">nicholasleexyz</button></a>

          </div>
          <div class="navbar-center">
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                {/* <!-- Navbar  menu content here --> */}
                <li><a href="#who-i-am">Who I Am</a></li>
                <li><a href="#what-i-do">What I Do</a></li>
                <li><a href="#my-projects">My Projects</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
              </ul>
            </div>
          </div>
          <div class="navbar-end"></div>
        </div>
        {/* <!-- Page content here --> */}
        <div style="background: linear-gradient(0deg,rgba(44,38,51,.9) 30%,rgba(236,234,229,.2) 100%),url(background.png); background-size: 512px; background-attachment: fixed;"
          class="object-cover h-full flex-1 justify-center items-center overflow-y-auto no-scrollbar">


          <div class="flex justify-center h-fit">
            {/* <Show when={pageIndex() == 0}>
            </Show> */}
            <div class="grid grid-flow-row columns-1 gap-8 mt-8 mx-2 text-xl h-max ">
              <WhoIAm></WhoIAm>
              <WhatIDo></WhatIDo>
              <MyProjects></MyProjects>
              <ContactMe></ContactMe>
            </div>
          </div>

        </div>

      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200">
          {/* <!-- Sidebar content here --> */}
          <li><a href="#who-i-am">Who I Am</a></li>
          <li><a href="#what-i-do">What I Do</a></li>
          <li><a href="#my-projects">My Projects</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
        </ul>
      </div>
    </div >
  );
};

export default App;