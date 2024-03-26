import "./style/Loader.scss"

export default function Loader({ error }) {
    return (
        <div className="loader">
            <img
                src="kevydev-logotype.png"
                alt="KevyDev logotype"
            />
            {error && <h6>Something went wrong :(</h6>}
        </div>
    )
}