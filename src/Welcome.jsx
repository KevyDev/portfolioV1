import { SvgGitHub, SvgLinkedin } from "./Icons"
import "./style/Welcome.scss"

export default function Welcome() {
    return (
        <section className="section welcome-container">
            <div className="section-container">
                <div className="separator-container">
                    <div className="photo-container">
                        <img src="kevydev-logo.jpg" alt="KevyDev Photo" />
                    </div>
                    <div className="info-buttons-container">
                        <div className="info-container">
                            <p>Hi, my name is</p>
                            <h1 className="name"><span>Kevin Gorrín</span>.</h1>
                            <h2>I'm a <span>Fullstack Developer!</span></h2>
                            <p className="motto">My motto is: simple, modern, functional, scalable and fast.</p>
                        </div>
                        <div className="buttons-container">
                            <ul className="action-buttons">
                                <a target="_blank" href="cv-kevydev.pdf">
                                    <button className="curriculum">Download CV</button>
                                </a>
                                <a href="mailto:kevydev@outlook.com">
                                    <button className="contact">{"<Contact />"}</button>
                                </a>
                            </ul>
                            <ul className="social-buttons">
                                <a target="_blank" href="https://github.com/KevyDev">
                                    <button className="github"><SvgGitHub /></button>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/kevydev/">
                                    <button className="linkedin"><SvgLinkedin /></button>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}