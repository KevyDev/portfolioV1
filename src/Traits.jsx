import "./style/Traits.scss"

export default function Traits({ goals }) {
    return (
        <section className="section traits-container">
            <div className="section-container">
                <div className="separator-container">
                    <div className="info-container">
                        <h5>Hi, my name is</h5>
                        <h1 className="name"><span>Kevin Gorrín</span>.</h1>
                        <h2>I'm a <span>Fullstack Developer</span>!</h2>
                        <h5 className="motto">My motto is: simple, modern, functional, scalable and fast.</h5>
                    </div>
                    <div className="photo-container">
                        <img src="kevydev-logo.jpg" alt="KevyDev Photo" />
                    </div>
                </div>
                <ul className="goals">
                    {goals.map((trait, i) =>
                        <li key={"trait-" + i}>
                            <h5>{trait}</h5>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}