import type { Component } from 'solid-js';

const WhoIAm: Component = () => {
    return (
        <div id="who-i-am" class="hero bg-base-200 rounded-2xl shadow-2xl">
            <div class="hero-content flex-col lg:flex-row">
                <img src="me.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Who Am I</h1>
                    <p class="py-6">
                        A seasoned web developer with a substantial five years of experience in software development. My professional journey is driven by a profound passion for continuous learning. I possess a comprehensive skill set covering web and game development and my portfolio showcases my creativity and passion for problem solving. I'm all about staying on top of the latest trends and technologies. I am dedicated to crafting efficient and responsive web solutions that elevate user experiences. I am currently seeking to bring my expertise and enthusiasm to a dynamic team of like minded developers.
                    </p>
                    {/* <button class="btn btn-primary">What I do?</button> */}
                </div>
            </div>
        </div>
    )
}
export default WhoIAm;