import { Link } from "react-router-dom"
import "./style/footer.scss"
import SvgYouTube from "./svg/YouTube.jsx"
import SvgGitHub from "./svg/GitHub.jsx"

function Footer({ footerText }) {
    return (
        <footer>
            <h6>{footerText}</h6>
            <section className="social-media-buttons">
                <Link target="_blank" to="https://www.youtube.com/@KevyDev"><button className="youtube"><SvgYouTube /></button></Link>
                <Link target="_blank" to="https://github.com/KevyDev"><button className="github"><SvgGitHub /></button></Link>
            </section>
        </footer>
    )
}

export default Footer