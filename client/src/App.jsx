import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/AllFood/index.jsx";
import CreateFood from "./pages/CreateFood/index.jsx";
import UpdateFoodPage from "./pages/UpdateFood/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createFood" element={<CreateFood/>} />
                <Route path="/updateFood/:id" element={<UpdateFoodPage/>}/>
                {/* Add more routes here as needed */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
