import type { Component } from 'solid-js';

const WhatIDo: Component = () => {
    return (
        <div id="what-i-do" class="hero bg-base-200 rounded-2xl shadow-2xl">
            <div class="hero-content flex-col lg:flex-row">
                <img src="jumpy_bug.gif" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">What I Do</h1>
                    <p class="py-6">
                        My creativity and passion for problem solving is reflected in the games and web apps I design. I enjoy being productive and efficient, for example I learned vim key bindings to be more ergonomic and to save time typing. I'm always working on a software project, be that a game or web app. Because learning and growth is important to me I recently completed the front end bootcamp at promineo tech. I also plan on taking the back end bootcamp at promineo tech in the near future to pursue full stack development.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default WhatIDo;