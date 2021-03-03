import './StartUp.css';
import { Link } from '@reach/router';

export default function StartUpCard() {
	return (
		<article className="StartArticle">

			<Link to="/Walktrough">
			<img src="music-logo-solid.png" alt="Logo" />
                  </Link>
			<h1 className="StartUpTitle">iPlayMusic</h1>   

		</article>
	);
}