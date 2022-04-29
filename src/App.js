import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
function App() {
    return (
        <div>
            <Toaster/>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
