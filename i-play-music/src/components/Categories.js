import React, { useState } from "react";
import "./Categories.css";
import CategoriesUnderCard from "./CategoriesSub";




export default function CategoriesCard(props){
    var [open, setOpen] = useState(false);
    
    function toggleUnderGenre(event){
        setOpen(!open);

    
    };

    return(
        <>

            <article className="CategoriesCard" style={{backgroundColor: props.color}}>
                <p className="CategoriesCard__text">{props.genre}</p>
                
            <img src="../dots.svg" alt="dots" className="categoriesUnderCard__dots" onClick={toggleUnderGenre} />
            </article>

            <section className={"underCards" + (open ? "" : "underCards--hidden")}>

                <CategoriesUnderCard undergenre="Acoustic Blues" />
                <CategoriesUnderCard undergenre="Blues Rock" />
                <CategoriesUnderCard undergenre="Canadian Blues" />
                <CategoriesUnderCard undergenre="Jazz Blues" />
                <CategoriesUnderCard undergenre="Piano Blues" />
                <CategoriesUnderCard undergenre="Soul Blues" />
                <CategoriesUnderCard undergenre="Swamp Blues" />
                
            </section>
        </>
    )
};