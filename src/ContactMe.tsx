import type { Component } from 'solid-js';

const ContactMe: Component = () => {
    return (
        <div id="contact-me" class="hero bg-base-200 w-full mb-32 rounded-2xl shadow-2xl">
            <div class="hero-content flex-col lg:flex-row">
                <img src="contact.png" class="max-w-xs rounded-full shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Contact</h1>
                    <p class="py-6">
                        Thank you for visiting my Portfolio. Feel free to explore my projects and get in touch to discuss potential collaborations or just to say hello!
                    </p>
                    <div class="grid grid-flow-col-dense auto-cols-auto w-fit gap-2">
                        <a href="mailto:nicholasleexyz@gmail.com" ><button class="btn btn-primary">Email</button></a>
                        <a href="https://github.com/nicholasleexyz" target="_blank"><button class="btn btn-secondary">Github</button></a>
                        <a href="https://www.linkedin.com/in/nicholasleexyz/" target="_blank"><button class="btn btn-accent">LinkedIn</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactMe;