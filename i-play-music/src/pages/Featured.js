import { useContext, useEffect, useState } from "react";
import axios from "axios";

import TokenContext from "../TokenContext";
import TopNavBar from "../components/TopNavBar";
import TopHeading from "../components/TopHeading";
import FeaturedCard from "../components/FeaturedCard";
import Drawer from "../components/Drawer";

export default function FeaturedPg() {
	var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
		.then(function (response){
            setContent(response.data);
            console.log(content.playlists?.items)
        })}, [token, setContent]);





	return (
		<>
		<TopNavBar>Featured</TopNavBar>
		<TopHeading>Featured</TopHeading>

{/* Fetch */}
		{content.playlists?.items.map(function(item){
               return(
                   <FeaturedCard image={item.images[0].url} artist={item.name} category={item.type} />
               )
           })}

		<Drawer/>

		</>
	)
}