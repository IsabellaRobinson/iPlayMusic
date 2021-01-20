import './WalktroughMenu.css';
import { Link } from '@reach/router';

export default function WalktroughMenuCard() {
	return (
		<article className="WalktroughMenuCirckels">

            <div className="InsideCirckelCard">
            <Link to="/radio"><img src="radio.svg" alt="radio"/></Link>
            </div>

            <div className="InsideCirckelCard">
            <Link to="/fav"><img src="heart.svg" alt="heart"/></Link>
            </div>

            <div className="InsideCirckelCard" >
            <Link to="/note"><img src="note.svg" alt="note"/></Link>
            </div>

		</article>
	);
}