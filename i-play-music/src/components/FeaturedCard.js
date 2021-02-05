import "./FeaturedCard.css";

export default function FeaturedCard({image, artist, category}){
    return(
        <article className="FeaturedCard">
            <img src={image} alt="" className="FeaturedCardImage"/>
            <div className="FeaturedCardGradientOverlay"></div>
            <div className="FeaturedCardText">
                <p className="FeaturedCardArtist">{artist}</p>
                <p className="FeaturedCardCategory">{category}</p>
            </div>
        </article>
    )
};