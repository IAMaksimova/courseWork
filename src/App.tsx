import React from 'react';
import './App.css';
import {GlobalStyle} from "./styles/Global.styled";
import {Footer} from "./layout/footer/Footer";
import {HomePage} from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import {Contacts} from "./pages/Contacts";
import {ProjectsCollection} from "./pages/ProjectsCollection";
import {Menu} from "./layout/menu/Menu";
import {TableStat} from "./pages/TableStat";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Menu/>
            <Routes>
                <Route element={<HomePage/>} path={'/*'}/>
                <Route element={<Contacts/>} path={'contact'}/>
                <Route element={<ProjectsCollection/>} path={'projects'}/>
                <Route element={<TableStat/>} path={'table'}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
