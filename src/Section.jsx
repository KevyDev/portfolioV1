import { Link } from "react-router-dom"
import { SvgEye, SvgGitHub, SvgYouTube } from "./Icons"

export default function Section({ lang, data }) {
    return (
        <section className="section-container projects-works-container">
            <div>
                <h1>{data.title[lang]}</h1>
                <ol className="list">
                    {data.list.map((element, i) =>
                        <article key={"project-" + i}>
                            <h3 className="name">{element.name}</h3>
                            <h5 className="description">{element.description[lang]}</h5>
                            <ul className="tags">{element.tags.map((tag, o) => <li key={"pw-" + i + "-" + o}><img className="skill-img" src={"skills/" + tag + ".png"} /></li>)}</ul>
                            <ol className="links-buttons">
                                {element.ghLink &&
                                    <Link target="_blank" to={element.ghLink}>
                                        <button className="github"><SvgGitHub /></button>
                                    </Link>
                                }
                                {element.ytLink &&
                                    <Link target="_blank" to={element.ytLink}>
                                        <button className="youtube"><SvgYouTube /></button>
                                    </Link>
                                }
                                {element.link &&
                                    <Link target="_blank" to={element.link}>
                                        <button className="view"><SvgEye /></button>
                                    </Link>
                                }
                            </ol>
                        </article>
                    ).reverse()}
                </ol>
            </div>
        </section>
    )
}