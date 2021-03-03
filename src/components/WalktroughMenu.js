import './WalktroughMenu.css';
import { Link } from '@reach/router';


const NavLink = props => (
      <Link
        {...props}
        getProps={({ isCurrent }) => {
          return {

                style: {
                  paddingLeft: "20px",
                  padding: "20px",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "20px",
                  fontSize: "xx-large",
                  margin: "10px",
                  display: "flex",
                  marginTop: "5px",
                  width: "30px", 
                  color: isCurrent ? "white" : "black",
                  backgroundColor: isCurrent ? "#FF1168" : "white",
                  borderRadius: "50%",
                  border: isCurrent ? "#34193128 3px solid" : "#341931 3px solid"
            }
          };
        }}
      />
    );
    

export default function WalktroughMenuCard() {
	return (
            
            <article className="WalktroughMenuCirckels">
                  
                  <NavLink to="/Walktrough">
                        <i className="icon-spotify Walktrough-items" > </i>
                  </NavLink>
    
                  <NavLink to="/Walktrough2">
                        <i className="icon-heart Walktrough-items"></i>
                  </NavLink>

                  <NavLink to="/Walktrough3">
                        <i className="icon-note Walktrough-items"></i>
                  </NavLink>

            
                  
                  <h2 className="WalkThroughSkip"><Link to="/Login">SKIP</Link></h2>
            

		</article>
	);
}