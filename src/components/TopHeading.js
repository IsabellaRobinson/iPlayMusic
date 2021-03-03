import { Children } from "react";
import "./TopHeading.css";
          
export default function TopHeading({children}) {
    return(

        <article className="TopHeading">

                <p className="TopHeadingText">{children}</p>
                
        </article>

    );
}
