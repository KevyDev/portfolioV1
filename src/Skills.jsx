import "./style/skills.scss"

function Skills({ lang, data }) {
    return (
        <section className="section-container skills-container">
            <div>
                <h1>{data.title[lang]}</h1>
                <ol className="skills-list">
                    {data.list.map((group, i) =>
                        <ul key={"group-" + i}>
                            {group.map((skill, o) =>
                                <li key={"skill-" + o}>
                                    <img className="skill-img" src={"skills/" + skill + ".png"} />
                                    <h5 className="skill-name">{skill}</h5>
                                </li>
                            )}
                        </ul>
                    )}
                </ol>
            </div>
        </section >
    )
}

export default Skills