import type { Component } from 'solid-js';

const MyProjects: Component = () => {
    return (
        <>
            <div id="my-projects" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><a target="_blank" href="https://exodecode.com"><img src="preview-exodecode.com.png" alt="Custom Music Player" /></a></figure>
                    <div class="card-body">
                        <h2 class="card-title">Custom Music Player</h2>
                        <p>I make music as a hobby from time to time so I decided to make a music player for some of my tracks. Originally written in vanilla js but later ported to react.</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><a target="_blank" href="https://mellow-bubblegum-042b96.netlify.app/"><img src="sudoku_create.png" alt="Sudoku Game Project" /></a></figure>
                    <div class="card-body">
                        <h2 class="card-title">Sudoku game and editor</h2>
                        <p>I made this as my final project for a front end boot camp. It has a working sudoku game that even highlights cells when they contain valid numbers. The app has several themes and it was built with React, tailwindcss, and daisyUI.</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><a target="_blank" href="https://funny-cendol-681c20.netlify.app/"><img src="preview-funny-cendol-681c20.netlify.app.png" alt="Map Generator" /></a></figure>
                    <div class="card-body">
                        <h2 class="card-title">Procedural map generator written with vanilla javascript.</h2>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><a target="_blank" href="https://lighthearted-mooncake-7fc852.netlify.app/"><img src="preview-lighthearted-mooncake-7fc852.netlify.app.png" alt="War Card Game App" /></a></figure>
                    <div class="card-body">
                        <h2 class="card-title">War Card Game App. Built with vanilla js.</h2>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><a target="_blank" href="https://musical-khapse-552528.netlify.app/"><img src="preview-musical-khapse-552528.netlify.app.png" alt="Mock Plant Data App" /></a></figure>
                    <div class="card-body">
                        <h2 class="card-title">Mock Plant Data App. Built with JQuery and Bootstrap</h2>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><a target="_blank" href="https://alpacaattic.com"><img src="alpacaattic.png" alt="Voronoi Diagram Generator" /></a></figure>
                    <div class="card-body">
                        <h2 class="card-title">Voronoi Diagram Generator</h2>
                        <p>This project was built with Flask as the backend and bootstrap for some of the styling. The cool part about this project is the generation is multi threaded so it is very snappy. Also the settings of the generated image gets stored in the url so sharing created images is very easy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProjects;