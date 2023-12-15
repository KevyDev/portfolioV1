import { Link } from "react-router-dom"
import { SvgGitHub } from "./Icons"

export default function Section({ title, data }) {
    return (
        <section className="section projects-works-container">
            <div className="section-container">
                <h2 className="title">{title}</h2>
                {data.length === 0 && <h5 className="nothing">I still don't have work experience, but meanwhile <b>I'm developing personal projects :)</b></h5>}
                {data.length > 0 &&
                    <ol className="list">
                        {data.map((element, i) =>
                            <article key={"project-" + i}>
                                {element.preview &&
                                    <div className="preview-container">
                                        <img src={"previews/" + element.preview} alt={element.name + " preview."} loading="lazy" />
                                    </div>
                                }
                                <h4 className="name">{element.name}</h4>
                                <p className="description">{element.description}</p>
                                <ul className="skills">{
                                    element.skills.map((skill, o) =>
                                        <li key={"pw-" + i + "-" + o}>
                                            <img className="skill-img" src={"skills/" + skill + ".png"} loading="lazy" />
                                        </li>
                                    )}
                                </ul>
                                {element.link &&
                                    <Link target="_blank" to={element.link}>
                                        <button className="take-a-look">Take a look</button>
                                    </Link>
                                }
                                {element.ghLink &&
                                    <Link target="_blank" to={"https://github.com/" + element.ghLink}>
                                        <button className="see-code">
                                            <SvgGitHub />
                                            <p>See code</p>
                                        </button>
                                    </Link>
                                }
                            </article>
                        )}
                    </ol>
                }
            </div>
        </section>
    )
}