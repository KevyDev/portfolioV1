import ExperienceArticle from "./ExperienceArticle"
import "./style/ExperienceSection.scss"

export default function ExperienceSection({ areProjects = false, data }) {
    return (
        <section className="section projects-works-container">
            <div className="section-container">
                <h2 className="title">{areProjects ? "Projects" : "Experience"}</h2>
                {data.length === 0 && <p className="nothing">I still don't have work experience, but meanwhile <b>I'm developing personal projects :)</b></p>}
                {data.length > 0 &&
                    <ol className="list">
                        {data.map((element, i) => <ExperienceArticle data={element} i={i} key={"project-" + i} />)}
                    </ol>
                }
            </div>
        </section>
    )
}