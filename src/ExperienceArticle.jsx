import { SvgGitHub } from "./Icons"

export default function ExperienceArticle({ data, i }) {
    return (
        <article>
            {data.preview &&
                <div className="preview-container">
                    <img
                        src={"https://kevydev.github.io/portfolio/previews/" + data.preview}
                        alt={data.name + " preview."}
                        loading="lazy"
                    />
                </div>
            }
            <div className="info-container">
                <h4 className="name">{data.name}</h4>
                <p className="description">{data.description}</p>
                <ul className="skills">
                    {data.skills.map((skill, o) =>
                        <li key={"pw-" + i + "-" + o}>
                            <img
                                className="skill-img"
                                src={"https://kevydev.github.io/portfolio/skills/" + skill + ".png"}
                                alt={skill}
                                loading="lazy"
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className={"buttons-container" + ((data.link && data.ghLink) ? " both" : "")}>
                {data.link && <a className="take-a-look" href={data.link} target="_blank">Take a look</a>}
                {data.ghLink &&
                    <a className="see-code" href={"https://github.com/" + data.ghLink} target="_blank">
                        <SvgGitHub />
                        {!data.link && <p>See code</p>}
                    </a>
                }
            </div>
        </article>
    )
}