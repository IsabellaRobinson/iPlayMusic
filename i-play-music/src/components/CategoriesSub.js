import "./CategoriesSub.css";


export default function CategoriesUnderCard({undergenre}){


    return(
        

        <article className="CategoriesUnderCard">

    
            <p className="CategoriesUnderCard__text">{undergenre}</p>

            <img src="../arrow-right.svg" alt="Under categories" className="categoriesUnderCard__arrow" />
        </article>
    )
};