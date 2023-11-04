import { Link } from "react-router-dom"
import { SvgGitHub } from "./Icons"
import "./style/Footer.scss"

export default function Footer({ footerText }) {
    return (
        <footer className="footer">
            <h6>{footerText}</h6>
            <section className="social-buttons">
                <Link target="_blank" to="https://github.com/KevyDev">
                    <button className="github"><SvgGitHub /></button>
                </Link>
            </section>
        </footer>
    )
}