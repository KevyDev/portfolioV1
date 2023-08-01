import { Link } from "react-router-dom"
import "./style/header.scss"
import SvgYouTube from "./svg/YouTube.jsx"
import SvgGitHub from "./svg/GitHub.jsx"

function Header({ headerOnTop, lang, toggleLang }) {
    return (
        <header className={headerOnTop ? "on-top" : ""}>
            <div className="header-container">
                <section className="logotype-container">
                    <img src="kevydev-logotype.png" alt="" />
                </section>
                <section className="menu-container">
                    <Link target="_blank" to="https://www.youtube.com/@KevyDev"><button className="social-media-button youtube"><SvgYouTube /></button></Link>
                    <Link target="_blank" to="https://github.com/KevyDev"><button className="social-media-button github"><SvgGitHub /></button></Link>
                    <button className={"lang-button " + (lang == "en" ? "en-selected" : "es-selected")} onClick={toggleLang}>
                        <img src="en.png" className="en-img" alt="" />
                        <img src="es.png" className="es-img" alt="" />
                    </button>
                </section>
            </div>
        </header>
    )
}

export default Header