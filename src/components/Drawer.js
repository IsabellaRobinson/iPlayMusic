import "./Drawer.css";
import { Link } from '@reach/router';

export default function Drawer() {
    
const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
              style: {  
                color: isCurrent ?  "#341931" : "transparent",
          }
        };
      }}
    />
  );

    return(

        <article className="DrawerButtom">

        <NavLink to="/Categories" className="iconDrawer"><i className="icon-heartbeat">
            </i>
        </NavLink>

        <NavLink to="/Featured" className="iconDrawer">
            <i className="icon-mic">
            </i>
        </NavLink>

        <NavLink to="/LatestTrends" className="iconDrawer">
            <i className="icon-heart">
            </i>
        </NavLink>

        <NavLink to="/Music" className="iconDrawer">
            <i className="icon-color-adjust">
            </i>
        </NavLink>

        <NavLink to="/Settings" className="iconDrawer">
            <i className="icon-cog">
            </i>
        </NavLink> 

        </article>
    );
}