import React from 'react';
import Header from "../../Components/Header/Header";
import MenuAdmin from "./menuAdmin";
import {Route,Routes} from "react-router-dom";
import AdminDelivery from "../AdminDelivery/AdminDelivery";
import AdminAddProduct from "../AdminAddProduct/AdminAddProduct";

function Admin() {
    return (
        <>
            <Header/>
            <MenuAdmin>
                <Routes>
                    <Route path={'/admindelivery'} element={<AdminDelivery/>}/>
                    <Route path={'/adminaddproduct'} element={<AdminAddProduct/>}/>
                </Routes>
            </MenuAdmin>
        </>
    );
}

export default Admin;