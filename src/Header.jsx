import { Link } from "react-router-dom"
import { SvgGitHub } from "./Icons"
import "./style/Header.scss"

function Header({ headerOnTop, lang, toggleLang }) {
    return (
        <header className={"header" + (headerOnTop ? " on-top" : "")}>
            <div className="header-container">
                <section className="logotype-container">
                    <img src="kevydev-logotype.png" alt="KevyDev logotype" />
                </section>
                <section className="menu-container">
                    <Link target="_blank" to="https://github.com/KevyDev">
                        <button className="social-media-button github"><SvgGitHub /></button>
                    </Link>
                    <button className={"lang-button " + (lang == "en" ? "en-selected" : "es-selected")} onClick={toggleLang}>
                        <img src="en.png" className="en-img" alt="USA flag" />
                        <img src="es.png" className="es-img" alt="Spain flag" />
                    </button>
                </section>
            </div>
        </header>
    )
}

export default Header