import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {useDispatch, useSelector} from 'react-redux'
import {getVehicle} from '../../redux/actions/VehicleActions'
import { makeStyles, withStyles } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    }
  }))(TableCell);

  const useStyles = makeStyles  ({
    container: {
      maxHeight: 240,
    },
  });

const columns = [
    {
        idc: 'id',
        label: 'Codigo',
        minWidth: 170,
        align: 'center'
    },
    {
        idc: 'marca',
        label: 'Marca',
        minWidth: 170,
        align: 'center',
    },
    {
        idc: 'modelo',
        label: 'Modelo',
        minWidth: 170,
        align: 'center',
    },
    {
        idc: 'placa',
        label: 'Placa',
        minWidth: 170,
        align: 'center',
    },
];


const index = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const vehicles = useSelector(store => store.vehicles.array)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
    };

    useEffect(() => {
       dispatch(getVehicle())
    }, [])

    return (
        <Paper className="container my-4">
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.idc}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((vehicle) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={vehicle.id}>
                                    {columns.map((column) => {
                                        const value = vehicle[column.idc];
                                        return (
                                            <TableCell key={column.idc} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                labelRowsPerPage={"Filas por página"}
                component="div"
                count={vehicles.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>

    )
}

export default index
