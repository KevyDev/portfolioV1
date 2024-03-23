import "./style/Skills.scss"

export default function Skills({ data }) {
    return (
        <section className="section skills-container">
            <div className="section-container">
                <h2 className="title">Skills</h2>
                <p className="bio">I've been writing code since <b>2018</b>, developing various <b>personal projects</b> while I'm <b>self-taught</b> in programming languages and frameworks. I've participated in <b>national and international competitive programming events</b> too. All of this has led me to possess the following <b>skill stack:</b></p>
                <ol className="skills-groups-list">
                    {data.map((group, i) =>
                        <div className="skills-group" key={"group-" + i}>
                            <h4 className="subtitle">{group[0]}</h4>
                            <ul>
                                {group[1].map((skill, o) =>
                                    <li key={"skill-" + o}>
                                        <img className="skill-img" src={"https://kevydev.github.io/portfolio/skills/" + skill.replace("#", "%23") + ".png"} loading="lazy" />
                                        <p className="skill-name">{skill}</p>
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