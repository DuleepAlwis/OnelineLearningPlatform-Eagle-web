import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function Routers(){

    return (
        <div>
             <Routes>
             <Route path="/" element={                    
                     <Home />                    
                } />  
                <Route path="/onlineLearningPlatform" element={                    
                     <Home />                    
                } />   
            </Routes>
        </div>
    );
}

export default Routers;