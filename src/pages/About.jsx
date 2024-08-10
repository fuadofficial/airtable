import { useState } from "react"
import Container from "../layout/Container"
import Image from "../components/HomeProject/Image/Image"

const About = () => {
	const [image, setImage] = useState(false)
	return (
		<Container>

			<div>
				<h1>This is About page</h1>
				<button onClick={() => setImage(!image)}>Image</button>
				{image && <Image />}
			</div>
		</Container>
	)
}

export default About