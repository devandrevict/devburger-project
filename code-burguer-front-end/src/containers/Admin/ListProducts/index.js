import React, { useEffect } from "react";
import api from '../../../services/api'
import { Container, Img, EditIconStyles } from './styles'
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formatCurrency from "../../../utils/formatCurrency";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import paths from "../../../constants/paths";



export function ListProducts() {

    const { push } = useHistory()
    const [products, setProducts] = useState()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadOrders()

    }, [])


    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{ color: 'green' }} />
        }
        return <ThumbDownAltIcon style={{ color: 'red' }} />
    }

    function editProduct(product) {
        push(paths.EditProduct, { product })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Oferta</TableCell>
                            <TableCell align="center">Produto</TableCell>
                            <TableCell align="center">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map(product => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <Img src={product.url} alt="imagem-do-produto" />
                                </TableCell>
                                <TableCell align="center">
                                    <EditIconStyles onClick={() => editProduct(product)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts