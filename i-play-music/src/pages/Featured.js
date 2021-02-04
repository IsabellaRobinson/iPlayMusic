import { useContext, useEffect, useState } from "react";
import axios from "axios";

import TokenContext from "../TokenContext";
import TopNavBar from "../components/TopNavBar";
import Drawer from "../components/Drawer";

export default function Featured_Pg() {
	var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setContent(response.data);
        })}, [token, setContent]);

	return (
		<>
		<TopNavBar>Featured</TopNavBar>


		<img src="./featuredBig1.svg" alt="Womens body" className="featFirstPic" style={{width: "100%"}}/>

		<img src="./featuredBig2.svg" alt="Womens head" style={{width: "100%"}}/>

		<Drawer/>

		</>
	)
}
