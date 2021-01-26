import "./Drawer.css";
import { Link } from '@reach/router';

export default function Drawer() {
    
const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {

              style: {
                fontSixe: "xx-large",
                justifyContent: "space-evenly",
                backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)"
          }
        };
      }}
    />
  );

    return(

        <article className="DrawerButtom">

        <NavLink to="/pulse">
            <i className="icon-heartbeat">
            </i>
        </NavLink>

            <i className="icon-heartbeat"></i> 
            <i className="icon-mic Drawer-icons"></i>
            <i className="icon-heart"></i>
            <i className="icon-color-adjust"></i>
            <i className="icon-cog"></i>

        </article>
    );
}