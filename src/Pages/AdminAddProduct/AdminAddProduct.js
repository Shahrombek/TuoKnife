import React, {useRef} from 'react';
import {Button, Input, NativeSelect, Typography,} from "@mui/material";
import styled from "styled-components";
import {setAdminProducts} from "../../redux/actions/doing";

//-------------------------------------------
const StyleAddProduct=styled.div`
margin-top:64px;
`

function AdminAddProduct(props) {

    //---------------------------------------------------------
    const titleRef = useRef('')
    const numsRef = useRef(1)
    const imgRef = useRef('')
    const priceRef = useRef(0)
    const sendValue = () => {
        const setData = {
            title : titleRef.current.value,
            nums : numsRef.current.value,
            img : imgRef.current.value,
            price : priceRef.current.value,
        }
        console.log(setData)
        setAdminProducts(setData);
    }
    return (
        <StyleAddProduct>
            <Typography sx={{color: 'white'}} component={'h2'} variant={'h3'}>Add  Product</Typography>
            <form>
                <Input
                    component={'input'} variant='input'

                    sx={{
                        borderRadius: '12px',
                        width: '100%',
                        marginY: '15px',
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#303030',
                        paddingX: '18px',
                        paddingY: '25px',
                    }}
                    placeholder={'Mahsulot Nomi'}
                    required
                    inputRef={titleRef}
                    type={'text'}
                />
                <Input
                    component={'input'} variant='input'
                    sx={{
                        borderRadius: '12px',
                        width: '100%',
                        marginY: '15px',
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#303030',
                        paddingX: '18px',
                        paddingY: '25px',
                    }}
                    placeholder={'Soni'}
                    inputRef={numsRef}
                    required
                    type={'number'}
                />


                <Input
                    component={'input'} variant='input'

                    sx={{
                        borderRadius: '12px',
                        width: '100%',
                        marginY: '15px',
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#303030',
                        paddingX: '18px',
                        paddingY: '25px',
                    }}
                    placeholder={'Image url'}
                    inputRef={imgRef}
                    type={'text'}
                />
                <Input
                    component={'input'} variant='input'

                    sx={{
                        borderRadius: '12px',
                        width: '100%',
                        marginY: '15px',
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#303030',
                        paddingX: '18px',
                        paddingY: '25px',
                    }}
                    placeholder={'Narxi'}
                    inputRef={priceRef}
                    type={'number'}
                />
                {/*<NativeSelect*/}
                {/*    component={'input'} variant='input'*/}
                {/*    defaultValue={1}*/}
                {/*    inputProps={{*/}
                {/*        name: 'age',*/}
                {/*        id: 'uncontrolled-native',*/}
                {/*    }}*/}
                {/*    sx={{*/}
                {/*        borderRadius: '12px',*/}
                {/*        width: '100%',*/}
                {/*        marginY: '15px',*/}
                {/*        color: 'black',*/}
                {/*        border: 'none',*/}
                {/*        outline: 'none',*/}
                {/*        backgroundColor: '#303030',*/}
                {/*        paddingX: '18px',*/}
                {/*        paddingY: '25px',*/}
                {/*    }}*/}
                {/*    inputRef={priceRef}*/}
                {/*>*/}
                {/*    <option value={1}>1</option>*/}
                {/*    <option value={2}>2</option>*/}
                {/*    <option value={3}>3</option>*/}
                {/*</NativeSelect>*/}


            </form>
            <Button variant="contained" onClick={sendValue} sx={{color: 'white',backgroundColor:'#C80000',paddingY:'16px',paddingX:'34px',borderRadius:'27px','&:hover':{backgroundColor:'#C82000'}}}>Добавить</Button>

        </StyleAddProduct>
    );
}

export default AdminAddProduct;