import "./style/Skills.scss"

let groups = ["Frontend", "Backend", "Programming Languages", "Databases", "Version Control"]

export default function Skills({ data }) {
    return (
        <section className="section skills-container">
            <div className="section-container">
                <h1 className="title">Skills</h1>
                <ol className="skills-groups-list">
                    {data.map((group, i) =>
                        <div className="skills-group">
                            <h4 className="subtitle">{groups[i]}</h4>
                            <ul key={"group-" + i}>
                                {group.map((skill, o) =>
                                    <li key={"skill-" + o}>
                                        <img className="skill-img" src={"skills/" + skill + ".png"} />
                                        <h5 className="skill-name">{skill}</h5>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </ol>
            </div>
        </section >
    )
}