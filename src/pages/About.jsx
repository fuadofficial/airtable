import { lazy, Suspense, useState } from "react"
import Container from "../layout/Container"

const Image = lazy(() => import("../components/HomeProject/Image/Image"))

const About = () => {
	const [image, setImage] = useState(false)
	return (
		<Container>
			<div>
				<h1>This is About page</h1>
				<button onClick={() => setImage(!image)}>Image</button>
				{image &&
					<Suspense fallback={<h1>Loding.....</h1>}>
						<Image />
					</Suspense>
				}
			</div>
		</Container>
	)
}

export default About