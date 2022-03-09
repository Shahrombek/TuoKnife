import React from 'react';
import {Typography} from "@mui/material";
import styled from "styled-components";
import {useSelector} from "react-redux";
import { DataGrid } from '@mui/x-data-grid';



const StyleDelivery=styled.div`
margin-top:64px;
p,svg{
    color:white;
}
`

const columns = [

    {
        field: 'name',
        headerName: 'Full name',
        sortable: false,
        width:200,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'text',
        width:200,

    },
    {
        field: 'phone',
        headerName: 'Tel',
        type: 'number',
        width:200,

    },
    {
        field: 'title',
        headerName: 'Mahsulot',
        type: 'text',
        width:200,

    },
    {
        field: 'nums',
        headerName: 'Soni',
        type: 'number',
        width:200,

    },
    {
        field: 'moneyAll',
        headerName: 'Summasi',
        type: 'number',
        width:200,
    }
];


const rows = [
    {
        name:'Quvonchbek',
        phone:'+998914645436',
        email:'quvonchbek5436@gmail.com',
        moneyAll:218000,
        id: Math.random().toString(),
        nums: 2,
        completed: false,
        title: " Knight light C653",
        img: "./images/knifes/image16.svg",
        price: 109000,
    },
    {
        name:'Quvonchbek',
        phone:'+998914645436',
        email:'quvonchbek5436@gmail.com',
        moneyAll:218000,
        id: Math.random().toString(),
        nums: 2,
        completed: false,
        title: " Knight light C653",
        img: "./images/knifes/image16.svg",
        price: 109000,
    },
    {
        name:'Quvonchbek',
        phone:'+998914645436',
        email:'quvonchbek5436@gmail.com',
        moneyAll:218000,
        id: Math.random().toString(),
        nums: 2,
        completed: false,
        title: " Knight light C653",
        img: "./images/knifes/image16.svg",
        price: 109000,
    },
    {
        name:' Jovliyev',
        phone:'+998914645436',
        email:'quvonchbek5436@gmail.com',
        moneyAll:218000,
        id: Math.random().toString(),
        nums: 2,
        completed: false,
        title: " Knight light C653",
        img: "./images/knifes/image16.svg",
        price: 109000,
    },
    {
        name:'Shahrom',
        phone:'+998914365788',
        email:'shahrom2002@gmail.com',
        moneyAll:218000,
        id: Math.random().toString(),
        nums: 2,
        completed: false,
        title: " Knight light C653",
        img: "./images/knifes/image16.svg",
        price: 109000,
    },
]
function AdminDelivery(props) {
    const getAdmin = useSelector((state)=>state.sendProducts)

    console.log(getAdmin)

    return (
        <StyleDelivery>
            <Typography sx={{color: 'white'}} component={'h2'} variant={'h3'}>Delivery</Typography>
            <div style={{ height: 400, width: '100%',color:'white',marginTop:'15px' }}>
                <DataGrid
                    sx={{color:'white'}}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </StyleDelivery>
    );
}

export default AdminDelivery;