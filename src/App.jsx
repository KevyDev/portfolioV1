import { useEffect, useState } from "react"
import ExperienceSection from "./ExperienceSection"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"
import Skills from "./Skills"
import Welcome from "./Welcome"
import "./style/App.scss"

export default function App() {
	let [workData, setWork] = useState({}),
		[skillsData, setSkills] = useState({}),
		[projectsData, setProjects] = useState({}),
		[loaded, setLoaded] = useState(false),
		[error, setError] = useState(false)

	useEffect(() => {
		const loadData = async () => {
			let data = await fetch("https://kevydev.github.io/portfolio/data.json")
				.then(response => response.json())
				.catch(error => {
					setError(true)
					throw error
				})
			setWork(data.workData.reverse())
			setSkills(data.skillsData)
			setProjects(data.projectsData.reverse())
			setTimeout(() => setLoaded(true), 500)
		}
		loadData()
	}, [])

	return !loaded ? <Loader error={error} /> :
		<>
			<Header />
			<Welcome />
			<ExperienceSection title="Projects" data={projectsData} />
			<Skills data={skillsData} />
			<ExperienceSection title="Experience" data={workData} />
			<Footer />
		</>
}