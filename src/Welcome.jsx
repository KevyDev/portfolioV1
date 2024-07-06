import { SvgGitHub } from "./Icons"
import "./style/Welcome.scss"

export default function Welcome({ goals }) {
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
                            <h2>I'm a <span>Full Stack Developer!</span></h2>
                            <p className="motto">My motto is: simple, modern, functional, scalable and fast.</p>
                        </div>
                        <div className="buttons-container">
                            <a className="curriculum" href="cv-kevydev.pdf" download>Download CV</a>
                            <a className="contact" href="mailto:kevydev@outlook.com">{"<Contact />"}</a>
                            <a className="github" href="https://github.com/KevyDev" target="_blank"><SvgGitHub /></a>
                        </div>
                    </div>
                </div>
                <ul className="goals-list">
                    {goals.map((goal, o) => <li key={"goal-" + o}>{goal}</li>)}
                </ul>
            </div>
        </section>
    )
}