import { Link } from "react-router-dom"
import { SvgGitHub, SvgLinkedin } from "./Icons"
import "./style/Traits.scss"

export default function Traits({ goals }) {
    return (
        <section className="section traits-container">
            <div className="section-container">
                <div className="separator-container">
                    <div className="photo-container">
                        <img src="kevydev-logo.jpg" alt="KevyDev Photo" />
                    </div>
                    <div className="info-container">
                        <p>Hi, my name is</p>
                        <h1 className="name"><span>Kevin Gorrín</span>.</h1>
                        <h2>I'm a <span>Fullstack Developer!</span></h2>
                        <p className="motto">My motto is: simple, modern, functional, scalable and fast.</p>
                        <ul className="action-buttons">
                            <Link target="_blank" to="cv-kevydev.pdf">
                                <button className="curriculum">Download CV</button>
                            </Link>
                            <Link to="mailto:kevydev@outlook.com">
                                <button className="contact">{"<Contact />"}</button>
                            </Link>
                        </ul>
                        <ul className="social-buttons">
                            <Link target="_blank" to="https://github.com/KevyDev">
                                <button className="github"><SvgGitHub /></button>
                            </Link>
                            <Link target="_blank" to="https://www.linkedin.com/in/kevydev/">
                                <button className="linkedin"><SvgLinkedin /></button>
                            </Link>
                        </ul>
                    </div>
                </div>
                <ul className="goals">
                    {goals.map((trait, i) =>
                        <li key={"trait-" + i}>
                            <p>{trait}</p>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}