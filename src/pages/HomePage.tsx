import React from 'react';
import {Main} from "../layout/sections/main/Main";
import {About} from "../layout/sections/about/About";
import {Features} from "../layout/sections/features/Features";
import {Piccollection} from "../layout/sections/piccollection/Piccollection";
import {Contact} from "../layout/sections/contact/Contact";
import {Fade} from "react-awesome-reveal";

export const HomePage = () => {
    return (
        <Fade>
            <Main/>
            <About/>
            <Features/>
            <Piccollection/>
            <Contact/>
        </Fade>
    );
};

