import { Link } from "react-router-dom"
import { SvgArrowUpRight } from "./Icons"

export default function Section({ title, data }) {
    return (
        <section className="section projects-works-container">
            <div className="section-container">
                <h1 className="title">{title}</h1>
                {data.length === 0 && <h5 className="nothing">Nothing yet :(</h5>}
                {data.length > 0 &&
                    <ol className="list">
                        {data.map((element, i) =>
                            <article key={"project-" + i}>
                                {element.link &&
                                    <div className="link-button">
                                        <Link target="_blank" to={element.link}>
                                            <button>
                                                <SvgArrowUpRight />
                                            </button>
                                        </Link>
                                    </div>
                                }
                                <h3 className="name">{element.name}</h3>
                                <h5 className="description">{element.description}</h5>
                                <ul className="tags">{
                                    element.tags.map((tag, o) =>
                                        <li key={"pw-" + i + "-" + o}>
                                            <img className="skill-img" src={"skills/" + tag + ".png"} />
                                        </li>
                                    )}
                                </ul>
                            </article>
                        )}
                    </ol>
                }
            </div>
        </section>
    )
}