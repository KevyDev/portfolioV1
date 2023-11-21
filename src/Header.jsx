import { Link } from "react-router-dom"
import { SvgGitHub, SvgLinkedin } from "./Icons"
import "./style/Header.scss"

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logotype-container">
                    <img src="kevydev-logotype.png" alt="KevyDev logotype" />
                </div>
                <ul className="social-buttons">
                    <Link target="_blank" to="https://github.com/KevyDev">
                        <button className="github"><SvgGitHub /></button>
                    </Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/kevingorrin/">
                        <button className="linkedin"><SvgLinkedin /></button>
                    </Link>
                </ul>
            </div>
        </header>
    )
}