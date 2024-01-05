import { Link } from "react-router-dom"
import { SvgGitHub } from "./Icons"
import "./style/ExperienceSection.scss"

export default function ExperienceSection({ title, data }) {
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
                                        <img src={"https://kevydev.github.io/portfolio/previews/" + element.preview} alt={element.name + " preview."} loading="lazy" />
                                    </div>
                                }
                                <div className="info-container">
                                    <h4 className="name">{element.name}</h4>
                                    <p className="description">{element.description}</p>
                                    <ul className="skills">{
                                        element.skills.map((skill, o) =>
                                            <li key={"pw-" + i + "-" + o}>
                                                <img className="skill-img" src={"https://kevydev.github.io/portfolio/skills/" + skill + ".png"} loading="lazy" />
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className={"buttons-container" + ((element.link && element.ghLink) ? " both" : "")}>
                                    {element.link &&
                                        <a target="_blank" href={element.link}>
                                            <button className="take-a-look">Take a look</button>
                                        </a>
                                    }
                                    {element.ghLink &&
                                        <a target="_blank" href={"https://github.com/" + element.ghLink}>
                                            <button className="see-code">
                                                <SvgGitHub />
                                                {!element.link && <p>See code</p>}
                                            </button>
                                        </a>
                                    }
                                </div>
                            </article>
                        )}
                    </ol>
                }
            </div>
        </section>
    )
}