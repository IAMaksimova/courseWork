import React from 'react';
import {Header, HeaderTitle} from "./Contacts";
import styled from "styled-components";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container} from "../components/Container";

export const TableStat = () => {

    function createData(
        year: number,
        dacha: number,
        city: number,
        koeff: number,
    ) {
        return {year, dacha, city, koeff};
    }

    const rows = [
        createData(2006, 144, 156, 1.08),
        createData(2007, 190, 258, 1.35),
        createData(2008, 200, 288, 1.44),
        createData(2009, 210, 275, 1.3),
        createData(2010, 192, 254, 1.32),
        createData(2011, 201, 277, 1.37),
        createData(2012, 211, 268, 1.27),
        createData(2013, 228, 235, 1.03),
        createData(2014, 268, 307, 1.15),
        createData(2015, 272, 365, 1.34),
    ];

    return (
        <StyledTable>
            <Header>
                <HeaderTitle>Это таблица.</HeaderTitle>
            </Header>
            <Container>
                <TableWrap>

                <TableContainer component={Paper}>
                        <Table sx={{minWidth: 600}} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell align="center" style={{fontFamily: 'Montserrat'}}>Год</TableCell>
                                    <TableCell align="center" style={{fontFamily: 'Montserrat'}}>Покупка загородных домов (тыс.)</TableCell>
                                    <TableCell align="center" style={{fontFamily: 'Montserrat'}}>Покупка квартиры (тыс.)</TableCell>
                                    <TableCell align="center" style={{fontFamily: 'Montserrat'}}>Коэффициент пропорциональности</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.year}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="center" style={{fontFamily: 'Montserrat'}}>{row.year}</TableCell>
                                        <TableCell align="center" style={{fontFamily: 'Montserrat'}}>{row.dacha}</TableCell>
                                        <TableCell align="center" style={{fontFamily: 'Montserrat'}}>{row.city}</TableCell>
                                        <TableCell align="center" style={{fontFamily: 'Montserrat'}}>{row.koeff}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                </TableContainer>
                </TableWrap>

            </Container>


        </StyledTable>
    );
};

const StyledTable = styled.section`
  background: #f6f6f6;
  padding: 15vh 0;
`

const TableWrap = styled.div`
  width: 65vw;
  margin: 0 auto;
`