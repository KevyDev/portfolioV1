import { Link } from "react-router-dom"
import SvgGitHub from "./svg/GitHub.jsx"
import SvgLink from "./svg/Link.jsx"
import SvgYouTube from "./svg/YouTube.jsx"

function Section({ lang, data }) {
    return (
        <section className="section-container projects-works-container">
            <div>
                <h1>{data.title[lang]}</h1>
                <ol className="list">
                    {data.list.map((element, i) =>
                        <article key={"project-" + i}>
                            <h3 className="name">{element.name}</h3>
                            <h5 className="description">{element.description[lang]}</h5>
                            <ul className="tags">{element.tags.map((tag, o) => <li key={"pw-" + i + "-" + o}>{"#" + tag}</li>)}</ul>
                            <ol className="links-buttons">
                                {element.ghLink && <Link target="_blank" to={element.ghLink}><button className="github"><SvgGitHub /></button></Link>}
                                {element.link && <Link target="_blank" to={element.link}><button><SvgLink /></button></Link>}
                                {element.ytLink && <Link target="_blank" to={element.ytLink}><button className="youtube"><SvgYouTube /></button></Link>}
                            </ol>
                        </article>
                    ).reverse()}
                </ol>
            </div>
        </section>
    )
}

export default Section