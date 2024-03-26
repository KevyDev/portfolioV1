import "./style/Header.scss"

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logotype-container">
                    <img
                        src="kevydev-logotype.png"
                        alt="KevyDev logotype"
                    />
                </div>
            </div>
        </header>
    )
}