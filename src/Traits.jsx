import "./style/Traits.scss"

export default function Traits({ lang, data }) {
    return (
        <section className="section-container traits-container">
            <div>
                <h1>{data.title[lang]}</h1>
                <ul>
                    {data.list[lang].map((trait, i) =>
                        <li key={"trait-" + i}>
                            <h5>{trait}</h5>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}