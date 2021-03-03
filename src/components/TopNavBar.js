// import { Children } from "react";
import "./TopNavBar.css";
          
export default function TopNavBar({children}) {
    return(

        <article className="TopNav">

                <button className="TopNav_icon">
                    <i className="icon-left-open" onClick={() => window.history.back()}> </i>
                </button>
                


                <p className="TopNav_text">{children}</p>
                
                
                <button className="TopNav_icon">
                    <i className="icon-search"> </i>
                </button>
                  

        </article>

    );
}

// NavLink to, bruger man vis man vil have en bestemt style på et bestemt side. 