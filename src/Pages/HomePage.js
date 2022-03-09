import {Box, Container} from '@mui/material'
import React from 'react'
import FirstSection from '../Components/FirstSection/FirstSection'
import Header from '../Components/Header/Header'
import About from './About'
import MyPart from "../Components/MyPart";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
                <FirstSection/>
                <MyPart/>
                <About/>
                <Footer/>

        </>
    )
}

export default HomePage