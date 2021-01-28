import TopNavBar from "../components/TopNavBar";
import Drawer from "../components/Drawer";

export default function Featured_Pg() {
	return (
		<>
		<TopNavBar>Featured</TopNavBar>
		<img src="./featuredBig1.svg" alt="Womens body" className="featFirstPic" style={{width: "100%"}}/>

		<img src="./featuredBig2.svg" alt="Womens head" style={{width: "100%"}}/>

		<Drawer/>
		</>
	)
}