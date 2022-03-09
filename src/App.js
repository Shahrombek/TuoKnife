import React, {createContext, useState} from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import inputGlobalStyles from "./Style/GlobalStyle";
import {ThemeProvider} from "@mui/material/styles";
import makeTheme from "./Style/makeTheme";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import Map from "./Pages/map/Map";
import Basket from "./Pages/Basket/Basket";
import Admin from "./Pages/Admin/Admin";
import Login from './Pages/login/Login';


export const DarkModeContext = createContext({
    mode: "light",
    toggleMode: () => {
    },
});

function App(props) {

    const [mode, setMode] = useState("light");
    const theme = makeTheme(mode);
    return (
        <DarkModeContext.Provider value={{mode, toggleMode: () => setMode(mode === "light" ? "dark" : "light")}}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {inputGlobalStyles(mode)}
                <div className={'App'}>
                    <Routes>
                        <Route path="/" element={ <HomePage />} />
                        <Route path="/map" element={ <Map /> } />
                        <Route path={'/basket'} element={<Basket/>}/>
                        <Route path={'/login'} element={<Login />}/>
                        <Route path={'/admin/*'} element={<Admin/>}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </Provider>
        </DarkModeContext.Provider>
    );
}

export default App;