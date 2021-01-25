import './WalktroughMenu.css';
import { Link } from '@reach/router';

export default function WalktroughMenuCard() {

	return (
            
            <article className="WalktroughMenuCirckels">

      
                  <i className="icon-spotify Walktrough-items"></i>
    
                  <i className="icon-heart Walktrough-items"></i>

                  <i className="icon-note Walktrough-items"></i>

            
                  
                  <h2 className="walkThroughSkip"><Link to="/">SKIP</Link></h2>
            

		</article>
	);
}