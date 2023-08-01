import { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import "./style/app.scss"
import "./style/section.scss"
import Header from "./Header"
import Traits from "./Traits"
import Section from "./Section"
import Skills from "./Skills"
import Footer from "./Footer"

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lastYOffset: 0,
			headerOnTop: true,
			lang: "en",
			traitsData: {},
			workData: {},
			skillsData: {},
			projectsData: {},
			footerText: {},
			loaded: false
		}
	}

	componentDidMount() {
		this.loadData()
		window.addEventListener("scroll", e => this.setState({
			lastYOffset: e.currentTarget.pageYOffset,
			headerOnTop: e.currentTarget.pageYOffset < 50 || e.currentTarget.pageYOffset < this.state.lastYOffset
		}))
	}

	toggleLang = () => {
		let newLang = this.state.lang == "en" ? "es" : "en"
		localStorage.setItem("appLang", newLang)
		this.setState({ lang: newLang })
	}

	loadData = async () => {
		let lang = localStorage.getItem("appLang") || "en",
			data = await fetch("data.json")
				.then((response) => response.json())
				.catch((error) => {
					throw error;
				});
		this.setState({
			lang: ["en", "es"].includes(lang) ? lang : "en",
			traitsData: data.traitsData,
			workData: data.workData,
			skillsData: data.skillsData,
			projectsData: data.projectsData,
			footerText: data.footerText,
			loaded: true
		})
	}

	render() {
		return (
			<>
				{this.state.loaded &&
					<BrowserRouter>
						<Header headerOnTop={this.state.headerOnTop} lang={this.state.lang} toggleLang={this.toggleLang} />
						<Traits lang={this.state.lang} data={this.state.traitsData} />
						<Section lang={this.state.lang} data={this.state.workData} />
						<Skills lang={this.state.lang} data={this.state.skillsData} />
						<Section lang={this.state.lang} data={this.state.projectsData} />
						<Footer footerText={this.state.footerText[this.state.lang]} />
					</BrowserRouter>
				}
			</>
		)
	}
}

export default App
