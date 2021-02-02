import TopNavBar from "../components/TopNavBar";
import CategoriesCards from "../components/Categories";


import Drawer from "../components/Drawer";

        export default function Categories_Pg(props){
                
                return(
                        
                <>
                <TopNavBar>Categories</TopNavBar>
                
                <main className="Main_Categories">
                
                <CategoriesCards color="#D70060" genre="Alternative" />
                <CategoriesCards color="#E54028" genre="Blues" />
                <CategoriesCards color="#F18D05" genre="Classical" />
                <CategoriesCards color="#F2BC06" genre="Country" />
                <CategoriesCards color="#5EB11C" genre="Dance" />
                <CategoriesCards color="#3A7634" genre="Electronic" />
                <CategoriesCards color="#0ABEBE" genre="Fitness & Workout" />
                <CategoriesCards color="#00A1CB" genre="Hip-Hop/Rap" />
                <CategoriesCards color="#115793" genre="Industrial" />
    
            </main>

            <Drawer/>
            </>
        );
}