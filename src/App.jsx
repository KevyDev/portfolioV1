import { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"
import Section from "./Section"
import Skills from "./Skills"
import Traits from "./Traits"
import "./style/App.scss"
import "./style/Section.scss"

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lastYOffset: 0,
			headerOnTop: true,
			goalsData: [],
			workData: {},
			skillsData: {},
			projectsData: {},
			loaded: false,
			error: false
		}
	}

	componentDidMount() {
		this.loadData()
	}

	loadData = async () => {
		let data = await fetch("data.json")
			.then(response => response.json())
			.catch(error => {
				this.setState({ error: true })
				throw error
			})
		this.setState({
			goalsData: data.goalsData.reverse(),
			workData: data.workData.reverse(),
			skillsData: data.skillsData,
			projectsData: data.projectsData.reverse()
		})
		setTimeout(() => this.setState({ loaded: true }), 500)
	}

	render() {
		return (
			<BrowserRouter>
				{!this.state.loaded && <Loader error={this.state.error} />}
				{this.state.loaded && (
					<>
						<Header />
						<Traits goals={this.state.goalsData} />
						<Section title="Experience" data={this.state.workData} />
						<Skills data={this.state.skillsData} />
						<Section title="Projects" data={this.state.projectsData} />
						<Footer />
					</>
				)}
			</BrowserRouter>
		)
	}
}
