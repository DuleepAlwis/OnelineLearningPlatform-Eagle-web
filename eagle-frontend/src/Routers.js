import Home from "./pages/Home";
import Dashboard from './pages/Dashboard'
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
             <Route path="/dashboard" element={                    
                     <Dashboard/>                    
                } />   
            </Routes>
        </div>
    );
}

export default Routers;